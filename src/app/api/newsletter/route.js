import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
// :white_check_mark: Logging function
function logToFile(logData) {
  const logPath = path.join(process.cwd(), 'src', 'app', 'logs', 'newsletter_logs.json');
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
    timestamp,
    ...logData,
  };
  existingLogs.push(logEntry);
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.writeFileSync(logPath, JSON.stringify(existingLogs, null, 2));
}
export async function POST(req) {
  try {
    const { email } = await req.json();
    // :white_check_mark: Email validation
    if (!email || !email.includes('@')) {
      const errorData = {
        email,
        status: 'validation error',
        message: 'Invalid email address',
      };
      logToFile(errorData);
      return NextResponse.json(errorData, { status: 400 });
    }
    // :white_check_mark: Transporter (Webmail config)
    const transporter = nodemailer.createTransport({
      host: 'creasions.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.WEBMAIL_USER,
        pass: process.env.WEBMAIL_PASSWORD,
      },
    });
    // :white_check_mark: Email to Admin
    const mailOptions = {
      from: process.env.WEBMAIL_USER,
      to: process.env.WEBMAIL_USER,
      subject: 'New Newsletter Subscriber',
      html: `
        <p><strong>New subscriber:</strong> ${email}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    const successData = {
      email,
      status: 'success',
      message: 'Subscribed successfully',
    };
    logToFile(successData);
    return NextResponse.json(successData, { status: 200 });
  } catch (error) {
    console.error('Newsletter Email Error:', error);
    const errorData = {
      status: 'error',
      message: 'Failed to send subscription email',
    };
    logToFile(errorData);
    return NextResponse.json(errorData, { status: 500 });
  }
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