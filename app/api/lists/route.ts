import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function GET() {
  try {
    await connectDB();
    console.log("MongoDB connected successfully");
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      console.log("Inquiries fetched:", inquiries.length);
    return NextResponse.json({ data: inquiries });
  } catch (error) {
    console.error('GET /api/lists error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const title = formData.get('title') as string;
    const name = formData.get('name') as string;
    const content = formData.get('content') as string;
    const password = formData.get('password') as string;

    const inquiry = new Inquiry({
      title,
      name,
      content,
      password,
    });

    await inquiry.save();
    return NextResponse.json({ data: inquiry });
  } catch (error) {
    console.error("API Error: ", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
