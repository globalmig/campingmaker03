import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Comment from "@/models/Comment";

// ───────────────────────────── GET ─────────────────────────────
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← 이렇게 수정!
) {
  try {
    const { id } = await params; // ✅ Promise를 await로 해결

    await connectDB();

    const comments = await Comment.find({ inquiryId: id }).sort({ createdAt: 1 }).lean();

    return NextResponse.json({ comments });
  } catch (error) {
    console.error("댓글 목록 가져오기 실패:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

// ───────────────────────────── POST ────────────────────────────
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← 이렇게 수정!
) {
  try {
    await connectDB();

    const { writer, content } = await request.json();
    const { id } = await params; // ✅ Promise를 await로 해결

    if (!id) {
      return NextResponse.json({ error: "잘못된 요청 경로입니다." }, { status: 400 });
    }
    if (!writer?.trim()) {
      return NextResponse.json({ error: "작성자를 입력해주세요." }, { status: 400 });
    }
    if (!content?.trim()) {
      return NextResponse.json({ error: "내용이 비어있습니다." }, { status: 400 });
    }

    await Comment.create({
      inquiryId: id,
      writer,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("댓글 저장 실패:", error);
    return NextResponse.json({ error: "댓글 저장 실패" }, { status: 500 });
  }
}
