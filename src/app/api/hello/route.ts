import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the default hello world message
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  return NextResponse.json({ message: 'Hello from the API!' });
}
