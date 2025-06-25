'use client';
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface InquiryDetail {
  _id: string;
  title: string;
  name: string;
  content: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

interface IComment {
  _id: string;
   writer: string;
  content: string;
  createdAt: string;
}

export default function InquiryDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [data, setData] = useState<InquiryDetail | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (!params.id) return;

    fetch(`/api/lists/${params.id}`)
      .then(async (res) => {
        if (!res.ok) {
          const json = await res.json();
          throw new Error(json.error || 'Failed to fetch detail');
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const onDelete = async () => {
    const confirm = window.confirm('정말 삭제하시겠습니까?');
    if (!confirm) return;

    const res = await fetch(`/api/lists/${params.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert('삭제되었습니다.');
      router.push('/inquiry');
    } else {
      const error = await res.json();
      alert(`삭제 실패: ${error.error || '서버 오류'}`);
    }
  };

  useEffect(() => {
    if (!params.id) return;

    const fetchComments = async () => {
  try {
    const res = await fetch(`/api/comment/${params.id}`);
    const json = await res.json();
    setComments(json.comments);
  } catch (err) {
    console.error("댓글 가져오기 에러:", err);
  }
};

    fetchComments();
  }, [params.id]);

  return (
    <article className="inquiry-detail">
      <img className="mo" src="/images/common_banner_mo.png" alt="배너" />
      <img className="pc" src="/images/common_banner.png" alt="배너" />
      <div>
        {data ? <>
        <h3>{data.title}</h3>
          <div className="display-flex">
            <p>{data.name}</p>
            <p>{new Date(data.createdAt).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}</p>
          </div>
          <div>
            <p>{data.content}</p>
          </div>
          <div className="display-flex">
            <button onClick={onDelete}>삭제</button>
            <button onClick={() => router.push(`/inquiry/edit/${params.id}`)}>수정</button>
          </div></> : <p>로딩중입니다.</p>}
        <div>
          <CommentForm inquiryId={params.id} />
          <CommentList commentData={comments} />
        </div>
      </div>
    </article>
  );
}
