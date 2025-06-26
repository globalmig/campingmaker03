import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Comment from '@/models/Comment';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  try {
    const id = params.id;

    await connectDB();

    const comments = await Comment.find({ inquiryId: id })
      .sort({ createdAt: 1 })
      .lean();

    return NextResponse.json({ comments });
  } catch (error) {
    console.error('댓글 목록 가져오기 실패:', error);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { writer, content } = await request.json();

  if (!writer?.trim()) {
    return NextResponse.json({ error: '작성자를 입력해주세요.' }, { status: 400 });
  }

  if (!content?.trim()) {
    return NextResponse.json({ error: '내용이 비어있습니다.' }, { status: 400 });
  }

  try {
    await Comment.create({
      inquiryId: params.id,
      writer,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("댓글 저장 실패:", error);
    return NextResponse.json({ error: '댓글 저장 실패' }, { status: 500 });
  }
}