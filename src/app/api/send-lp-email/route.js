import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'
import fs from "fs";
import path from 'path';


function logToFile(logData) {
  const logPath = path.join(
    process.cwd(),
    "src",
    "app",
    "logs",
    "send-lp_logs.json"
  );
  const timestamp = new Date().toISOString();

  let existingLogs = [];
  let lastId = 0;

  if (fs.existsSync(logPath)) {
    const fileContent = fs.readFileSync(logPath, "utf-8");
    existingLogs = JSON.parse(fileContent);
    lastId =
      existingLogs.length > 0 ? existingLogs[existingLogs.length - 1].id : 0;
  }

  const logEntry = {
    id: lastId + 1,
    timestamp: timestamp,
    ...logData,
  };

  existingLogs.push(logEntry);

  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.writeFileSync(logPath, JSON.stringify(existingLogs, null, 2));
}


export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}


export async function POST(req) {
  const { name, email, phone, message, page } = await req.json();

  try {
    
    // let transporter = nodemailer.createTransport({
    //   host: 'creasions.com',  
    //   port: 465,                   
    //   secure: true,
    //   auth: {
    //     user: process.env.WEBMAIL_USER,
    //     pass: process.env.WEBMAIL_PASSWORD, 
    //   },
    // });


    let transporter = nodemailer.createTransport({
      host: "creasions.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.WEBMAIL_USER,
        pass: process.env.WEBMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.WEBMAIL_USER, 
      to: process.env.WEBMAIL_USER, 
      // from: process.env.GMAIL_USER, 
      // to: email, 
      subject: `lp Contact Lead - ${name}`,
      service: `Contact Lead`,
      html: `
        <table style="border-collapse: collapse; width: 100%">
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${name}</td>
          </tr>

          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Email</th>
            <td style="padding: 8px; border: 1px solid #ddd">${email}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Phone</th>
            <td style="padding: 8px; border: 1px solid #ddd">${phone}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Project Details</th>
            <td style="padding: 8px; border: 1px solid #ddd">${message}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Submitted From</th>
            <td style="padding: 8px; border: 1px solid #ddd">${page}</td>
          </tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    const successMessage = JSON.stringify({ 
      name: name,
      email: email,
      phone: phone,
      message: message,
      page: page,
      status: 'success',
      message: 'Email sent successfully' 
    });

    const successMessageLogs = { 
      name: name,
      email: email,
      phone: phone,
      message: message,
      page: page,
      status: 'success',
      message: 'Email sent successfully' 
    };
    
    logToFile(successMessageLogs);

    return new NextResponse(
      successMessage,
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    const errorMessage = JSON.stringify({ 
      name: name,
      email: email,
      phone: phone,
      message: message,
      page: page,
      status: 'error',
      message: 'Error sending email' 
    });

    const errorMessageLog ={
      name: name,
      email: email,
      phone: phone,
      message: message,
      page: page,
      status: 'error',
      message: 'Error sending email'
    }

    logToFile(errorMessageLog);

    return new Response(
      errorMessage,
      { status: 500 }
    );
  }
}
