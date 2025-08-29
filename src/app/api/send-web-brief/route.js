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
    // Destructure form data
    const {
      contactPersonName,
      contactEmailAddress,
      contactPhoneNumber,
      currentWebsiteURL,
      currentWebHost,
      domainPurchaseInfo,
      willProvideImages,
      allContentAvailable,
      companyDescription,
      themeFeel,
      designColors,
      competitorSites,
      additionalInfo,
      requiredPages,
      servicesOrProducts,
      competitiveAdvantage,
      customerAttraction,
      socialMediaPlatforms,
    } = await req.json();

    // Check for missing required fields
    const missingFields = [];

    if (!contactPersonName) missingFields.push("Contact Person Name");
    if (!contactEmailAddress) missingFields.push("Contact Email Address");
    if (!contactPhoneNumber) missingFields.push("Contact Phone Number");

    if (missingFields.length > 0) {
      const errorMessage = JSON.stringify({
        contactPersonName: "",
        contactEmailAddress: "",
        contactPhoneNumber: "",
        currentWebsiteURL: "",
        currentWebHost: "",
        domainPurchaseInfo: "",
        willProvideImages: "",
        allContentAvailable: "",
        companyDescription: "",
        themeFeel: "",
        designColors: "",
        competitorSites: "",
        additionalInfo: "",
        requiredPages: "",
        servicesOrProducts: "",
        competitiveAdvantage: "",
        customerAttraction: "",
        socialMediaPlatforms: "",
        status: "validation error",
        message: `The following fields are missing: ${missingFields.join(
          ", "
        )}.`,
      });

      const errorMessageLogs = {
        contactPersonName: "",
        contactEmailAddress: "",
        contactPhoneNumber: "",
        currentWebsiteURL: "",
        currentWebHost: "",
        domainPurchaseInfo: "",
        willProvideImages: "",
        allContentAvailable: "",
        companyDescription: "",
        themeFeel: "",
        designColors: "",
        competitorSites: "",
        additionalInfo: "",
        requiredPages: "",
        servicesOrProducts: "",
        competitiveAdvantage: "",
        customerAttraction: "",
        socialMediaPlatforms: "",
        status: "validation error",
        message: `The following fields are missing: ${missingFields.join(
          ", "
        )}.`,
      }

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
    //   service: "gmail", // you can change this to another email service provider if needed
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
      subject: `Web Brief - ${contactPersonName}`,
      html: `
      <h3 style="text-align: center">Web Brief Submission Details</h3>
      <table style="border-collapse: collapse; width: 100%">
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Name</th>
        <td style="padding: 8px; border: 1px solid #ddd">${contactPersonName}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Email</th>
        <td style="padding: 8px; border: 1px solid #ddd">${contactEmailAddress}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Phone</th>
        <td style="padding: 8px; border: 1px solid #ddd">${contactPhoneNumber}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Current Website URL</th>
        <td style="padding: 8px; border: 1px solid #ddd">${currentWebsiteURL}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Current Web Host</th>
        <td style="padding: 8px; border: 1px solid #ddd">${currentWebHost}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Domain Purchase Info</th>
        <td style="padding: 8px; border: 1px solid #ddd">${domainPurchaseInfo}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Will Provide Images</th>
        <td style="padding: 8px; border: 1px solid #ddd">${willProvideImages}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Content Availability</th>
        <td style="padding: 8px; border: 1px solid #ddd">${allContentAvailable}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Company Description</th>
        <td style="padding: 8px; border: 1px solid #ddd">${companyDescription}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Theme/Feel</th>
        <td style="padding: 8px; border: 1px solid #ddd">${themeFeel}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Design Colors</th>
        <td style="padding: 8px; border: 1px solid #ddd">${designColors}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Competitor Sites</th>
        <td style="padding: 8px; border: 1px solid #ddd">${competitorSites}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Additional Info</th>
        <td style="padding: 8px; border: 1px solid #ddd">${additionalInfo}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Required Pages</th>
        <td style="padding: 8px; border: 1px solid #ddd">${requiredPages}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Services/Products</th>
        <td style="padding: 8px; border: 1px solid #ddd">${servicesOrProducts}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Competitive Advantage</th>
        <td style="padding: 8px; border: 1px solid #ddd">${competitiveAdvantage}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Customer Attraction</th>
        <td style="padding: 8px; border: 1px solid #ddd">${customerAttraction}</td>
    </tr>
    <tr>
        <th style="padding: 8px; border: 1px solid #ddd">Social Media Platforms</th>
        <td style="padding: 8px; border: 1px solid #ddd">${
          socialMediaPlatforms || "N/A"
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
      currentWebsiteURL,
      currentWebHost,
      domainPurchaseInfo,
      willProvideImages,
      allContentAvailable,
      companyDescription,
      themeFeel,
      designColors,
      competitorSites,
      additionalInfo,
      requiredPages,
      servicesOrProducts,
      competitiveAdvantage,
      customerAttraction,
      socialMediaPlatforms,
      status: "success",
      message: "Email sent successfully",
    });


    const successMessageLogs = {
      contactPersonName,
      contactEmailAddress,
      contactPhoneNumber,
      currentWebsiteURL,
      currentWebHost,
      domainPurchaseInfo,
      willProvideImages,
      allContentAvailable,
      companyDescription,
      themeFeel,
      designColors,
      competitorSites,
      additionalInfo,
      requiredPages,
      servicesOrProducts,
      competitiveAdvantage,
      customerAttraction,
      socialMediaPlatforms,
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
    };


    logToFile(errorMessageLogs);


    return new Response(errorMessage, { status: 500 });
  }
}
