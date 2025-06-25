import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function GET(request: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "3");

  const totalCount = await Inquiry.countDocuments();

  const data = await Inquiry.find()
    .sort({ createdAt: -1 }) 
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return NextResponse.json({ data, totalCount });
}
