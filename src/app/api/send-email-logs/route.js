import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.resolve('src/app/logs/send-email_logs.json');

    const fileContents = fs.readFileSync(filePath, 'utf8');

    const jsonData = JSON.parse(fileContents);

    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read the JSON file' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
