"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InquiryItemProps {
  data: {
    _id: string;
    title: string;
    name: string;
    createdAt: string;
  },
  index: number,
}

export default function InquiryItem({ data, index }: InquiryItemProps) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const router = useRouter();

  const onClickTitle = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPasswordForm(true);
  };

  const onSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/lists/${data._id}/check-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: inputPassword }),
    });

    if (res.ok) {
      // 상세 페이지로 이동하면서 password를 쿼리로 전달
      router.push(`/inquiry/detail/${data._id}`);
    } else {
      const err = await res.json();
      alert(err.error || '비밀번호가 일치하지 않습니다.');
    }
  };


  return (
    <li className="inquiry-item">
      <div className="display-flex-flow">
        <div className="pc">
          <p className="item-number">{index }</p>
        </div>
        <div className="display-flex lock-item">
          <Image src="/icons/icon_lock.png" alt="비밀글" className="mo" />
          <a href={`/inquiry/detail/${data._id}`} onClick={onClickTitle}>{data.title}</a>
          <Image src="/icons/icon_lock.png" alt="비밀글" className="pc" />
        </div>
        <div className="pc item-name">
          <p>{data.name[0] + '*'.repeat(data.name.length - 1)}</p>
        </div>
        <div className="display-flex">
          <p className="mo item-name">{data.name[0] + '*'.repeat(data.name.length - 1)}</p>
          <p className="item-date">{new Date(data.createdAt).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}</p>
          <div className="display-flex mo comment-box">
            <Image src="/icons/icon_talk_white.png" alt="댓글 아이콘" />
            <p className="comment-count">댓글수</p>
          </div>
        </div>
      </div>
      {showPasswordForm && (
        <div className="detail-password-form" style={{ display: 'block' }}>
          <form onSubmit={onSubmitPassword} className="display-flex">
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <div className="display-flex">
              <button type="submit">입력</button>
              <button type="button" onClick={() => setShowPasswordForm(false)}>
                닫기
              </button>
            </div>
          </form>
        </div>
      )}
    </li>
  )
}