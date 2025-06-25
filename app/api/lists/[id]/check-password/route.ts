import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry, { IInquiry } from '@/models/Inquiry';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  await connectDB();

  const { password } = await request.json();

  // 단일 문서임을 명확히 지정
  const inquiry = await Inquiry.findById(params.id).lean<IInquiry | null>();

  if (!inquiry) {
    return NextResponse.json({ error: '글을 찾을 수 없습니다.' }, { status: 404 });
  }

  const masterPassword = process.env.MASTER_PASSWORD;

  if (inquiry.password !== password && password !== masterPassword) {
    return NextResponse.json({ error: '비밀번호가 일치하지 않습니다.' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    data: {
      title: inquiry.title,
      name: inquiry.name,
      content: inquiry.content,
      createdAt: inquiry.createdAt,
    },
  });
}
