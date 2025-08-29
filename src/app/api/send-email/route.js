import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'
import fs from "fs";
import path from 'path';

function logToFile(logData) {
  const logPath = path.join(process.cwd(), 'src', 'app', 'logs', 'send-email_logs.json');
  const timestamp = new Date().toISOString();

  let existingLogs = [];
  let lastId = 0;

  if (fs.existsSync(logPath)) {
    const fileContent = fs.readFileSync(logPath, 'utf-8');
    existingLogs = JSON.parse(fileContent);
    lastId = existingLogs.length > 0 ? existingLogs[existingLogs.length - 1].id : 0;
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
  try {
    const { name, company, email, phone, service, budget, details, page } = await req.json();

    const missingFields = [];
    

    if (!name) missingFields.push('name');
    if (!company) missingFields.push('company');
    if (!email) missingFields.push('email');
    if (!service) missingFields.push('service');
    if (!budget) missingFields.push('budget');
    

    if (missingFields.length > 0) {
      const errorMessage = JSON.stringify({
        name: name,
        company: company,
        email: email,
        phone: phone,
        service: service,
        budget: budget,
        details: details,
        page: page,
        status: 'validation error',
        message: `The following fields are missing: ${missingFields.join(', ')}.`,
      });

      const errorMessageLogs = {
        name: name,
        company: company,
        email: email,
        phone: phone,
        service: service,
        budget: budget,
        details: details,
        page: page,
        status: 'validation error',
        message: `The following fields are missing: ${missingFields.join(', ')}.`,
      };

      logToFile(errorMessageLogs);

      return new Response(
        errorMessage,
        { status: 400 }
      );
    }

    let transporter = nodemailer.createTransport({
      host: 'creasions.com',  
      port: 465,                   
      secure: true,
      auth: {
        user: process.env.WEBMAIL_USER,
        pass: process.env.WEBMAIL_PASSWORD, 
      },
    });


    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', 
    //   auth: {
    //     user: process.env.GMAIL_USER, 
    //     pass: process.env.GMAIL_PASSWORD,
    //   },
    // });

    const mailOptions = {
      // from: process.env.WEBMAIL_USER, 
      // to: process.env.WEBMAIL_USER, 
      from: process.env.WEBMAIL_USER, 
      to: process.env.WEBMAIL_USER, 
      subject: 'Contact Lead',
      service: `Contact Lead`,
      html: `
        <table style="border-collapse: collapse; width: 100%">
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${name}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Company</th>
            <td style="padding: 8px; border: 1px solid #ddd">${company}</td>
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
            <th style="padding: 8px; border: 1px solid #ddd">Service</th>
            <td style="padding: 8px; border: 1px solid #ddd">${service}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Budget</th>
            <td style="padding: 8px; border: 1px solid #ddd">${budget}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Project Details</th>
            <td style="padding: 8px; border: 1px solid #ddd">${details}</td>
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
      company: company,
      email: email,
      phone: phone,
      service: service,
      budget: budget,
      details: details,
      page: page,
      status: 'success',
      message: 'Email sent successfully' 
    });

    const successMessageLogs = { 
      name: name,
      company: company,
      email: email,
      phone: phone,
      service: service,
      budget: budget,
      details: details,
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
      company: company,
      email: email,
      phone: phone,
      service: service,
      budget: budget,
      details: details,
      page: page,
      status: 'error',
      message: 'Error sending email' 
    });

    const errorMessageLog ={
      name: name,
      company: company,
      email: email,
      phone: phone,
      service: service,
      budget: budget,
      details: details,
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
