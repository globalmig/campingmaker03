import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import Comment from "@/models/Comment";

export interface Inquiry {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// detail read
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← Promise 타입으로 변경
) {
  try {
    await connectDB();
    const { id } = await params; // ← await로 Promise 해결

    const inquiry = (await Inquiry.findById(id).lean()) as (Inquiry & { _id: string; createdAt: Date; updatedAt: Date }) | null;

    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    const commentCount = await Comment.countDocuments({ inquiryId: id });

    const result = {
      ...inquiry,
      _id: inquiry._id.toString(),
      createdAt: inquiry.createdAt.toISOString(),
      updatedAt: inquiry.updatedAt.toISOString(),
      commentCount,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET /api/lists/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// update
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← Promise 타입으로 변경
) {
  try {
    await connectDB();
    const { id } = await params; // ← await로 Promise 해결

    const body = await request.json(); // 클라이언트로부터 수정 데이터 받기

    const updatedInquiry = (await Inquiry.findByIdAndUpdate(id, { $set: body }, { new: true }).lean()) as Inquiry | null;

    if (!updatedInquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...updatedInquiry,
      _id: updatedInquiry._id.toString(),
      createdAt: updatedInquiry.createdAt.toISOString(),
      updatedAt: updatedInquiry.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error("PUT /api/lists/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// delete
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← Promise 타입으로 변경
) {
  try {
    await connectDB();
    const { id } = await params; // ← await로 Promise 해결

    const deletedInquiry = await Inquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
