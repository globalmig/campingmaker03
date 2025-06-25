import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;

    const keyword = searchParams.get('keyword') || '';
    const type = searchParams.get('type') || 'title'; // title | content
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // 검색 조건
    const filter = keyword
      ? { [type]: { $regex: keyword, $options: 'i' } }
      : {};

    // 전체 개수
    const totalCount = await Inquiry.countDocuments(filter);

    // 페이징된 데이터
    const data = await Inquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.error('API 오류:', error);
    return NextResponse.json(
      { error: '검색 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
