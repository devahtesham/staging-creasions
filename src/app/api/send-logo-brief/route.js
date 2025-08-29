import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs";
import path from 'path';


function logToFile(logData) {
  const logPath = path.join(
    process.cwd(),
    "src",
    "app",
    "logs",
    "send-logo-brief_logs.json"
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
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function POST(req) {
  try {
    const {
      contactPersonName,
      contactEmailAddress,
      contactPhoneNumber,
      logoName,
      companySlogan,
      competitorsReference,
      businessDescription,
      logoDetails,
      primaryColor,
      secondaryColor,
      // attachment
    } = await req.json();

    // Check for missing required fields
    const missingFields = [];

    if (!contactPersonName) missingFields.push("Contact Person Name");
    if (!contactEmailAddress) missingFields.push("Contact Email Address");
    if (!contactPhoneNumber) missingFields.push("Contact Phone Number");
    if (!logoName) missingFields.push("Logo Name");
    if (!businessDescription) missingFields.push("Business Description");

    if (missingFields.length > 0) {
      const errorMessage = JSON.stringify({
        contactPersonName,
        contactEmailAddress,
        contactPhoneNumber,
        logoName,
        companySlogan,
        competitorsReference,
        businessDescription,
        logoDetails,
        primaryColor,
        secondaryColor,
        status: "validation error",
        message: `The following fields are missing: ${missingFields.join(
          ", "
        )}.`,
      });

      const errorMessageLogs = {
        contactPersonName,
        contactEmailAddress,
        contactPhoneNumber,
        logoName,
        companySlogan,
        competitorsReference,
        businessDescription,
        logoDetails,
        primaryColor,
        secondaryColor,
        status: "validation error",
        message: `The following fields are missing: ${missingFields.join(
          ", "
        )}.`,
      };

      logToFile(errorMessageLogs);

      return new Response(errorMessage, { status: 400 });
    }

    // const attachments = [];
    // if (attachment) {
    //   attachments.push({
    //     filename: attachment.name,
    //     content: attachment.content,
    //     encoding: 'base64',
    //   });
    // }

    // Set up the transporter (using Gmail in this example)
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_PASSWORD,
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


    // Prepare the email options
    const mailOptions = {
      from: process.env.WEBMAIL_USER,
      to: process.env.WEBMAIL_USER,
      subject: `Logo Brief - ${contactPersonName}`,
      html: `
            <h3 style="text-align: center">Logo Brief Submission Details</h3>
        <table style="border-collapse: collapse; width: 100%">
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Contact Person Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${contactPersonName}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Email Address</th>
            <td style="padding: 8px; border: 1px solid #ddd">${contactEmailAddress}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Phone Number</th>
            <td style="padding: 8px; border: 1px solid #ddd">${contactPhoneNumber}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Logo Name</th>
            <td style="padding: 8px; border: 1px solid #ddd">${logoName}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Company Slogan</th>
            <td style="padding: 8px; border: 1px solid #ddd">${
              companySlogan || "N/A"
            }</td>
          </tr>
          
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Competitors Reference</th>
            <td style="padding: 8px; border: 1px solid #ddd">${
              competitorsReference || "N/A"
            }</td>
          </tr>
          
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Business Description</th>
            <td style="padding: 8px; border: 1px solid #ddd">${businessDescription}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Logo Details</th>
            <td style="padding: 8px; border: 1px solid #ddd">${
              logoDetails || "N/A"
            }</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Primary Color</th>
            <td style="padding: 8px; border: 1px solid #ddd">${
              primaryColor || "N/A"
            }</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd">Secondary Color</th>
            <td style="padding: 8px; border: 1px solid #ddd">${
              secondaryColor || "N/A"
            }</td>
          </tr>
        </table>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Success message
    const successMessage = JSON.stringify({
      contactPersonName,
      contactEmailAddress,
      contactPhoneNumber,
      logoName,
      companySlogan,
      businessDescription,
      logoDetails,
      primaryColor,
      secondaryColor,
      // attachment,
      status: "success",
      message: "Email sent successfully",
    });

    const successMessageLogs = {
      contactPersonName,
      contactEmailAddress,
      contactPhoneNumber,
      logoName,
      companySlogan,
      businessDescription,
      logoDetails,
      primaryColor,
      secondaryColor,
      status: "success",
      message: "Email sent successfully",
    }

    logToFile(successMessageLogs);


    return new NextResponse(successMessage, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);

    const errorMessage = JSON.stringify({
      status: "error",
      message: "Error sending email",
      error: error.message,
    });

    const errorMessageLogs = {
      status: "error",
      message: "Error sending email",
      error: error.message,
    }

    logToFile(errorMessageLogs);


    return new Response(errorMessage, { status: 500 });
  }
}
