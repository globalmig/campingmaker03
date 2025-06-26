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
          <p className="item-number">{index}</p>
        </div>
        <div className="display-flex lock-item" style={{ alignItems: 'center' }}>
          <div style={{ width: '20px', marginRight: "10px"}}>
            <Image src="/icons/icon_lock.png" alt="비밀글" className="mo" width={20} height={20} />
          </div>
          <a href={`/inquiry/detail/${data._id}`} onClick={onClickTitle}>{data.title}</a>
          <div style={{ width: '20px',marginLeft: "10px" }}>
            <Image src="/icons/icon_lock.png" alt="비밀글" className="pc" width={20} height={20} />
          </div>
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
          <div className="display-flex mo comment-box" style={{ alignItems: 'center' }}>
            <div style={{ width: '20px', marginRight: '10px' }}>
              <Image
                src="/icons/icon_talk_white.png"
                alt="댓글 아이콘"
                width={20}
                height={18}
              />
            </div>
            <p className="comment-count">0</p>
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