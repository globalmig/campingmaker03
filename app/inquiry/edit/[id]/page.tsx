'use client';

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { useParams, useRouter } from "next/navigation";

interface InquiryForm {
     title: string;
  name: string;
  content: string;
  password: string;
}

export default function InquiryEditPage() {
  const router = useRouter();
  const { id } = useParams(); // route param에서 id 가져오기
  const [form, setForm] = useState<InquiryForm>({
    title: '',
    name: '',
    content: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/lists/${id}`);
      if (!res.ok) {
        alert('글을 불러올 수 없습니다.');
        return;
      }
      const data = await res.json();
      setForm({
        title: data.title || '',
        name: data.name || '',
        content: data.content || '',
        password: '',
      });
    };

    fetchData();
  }, [id]);

  const onChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = async () => {
    if (!form.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!form.name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!form.content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    if (!form.password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const res = await fetch(`/api/lists/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('수정이 완료되었습니다.');
      router.push('/inquiry');
    } else {
      alert('수정에 실패했습니다.');
    }
  };

  return (
    <article>
      <img className='mo' src="/images/common_banner_mo.png" alt='배너' />
      <img className='pc' src="/images/common_banner.png" alt='배너' />
      <div>
        <h3>견적 및 문의</h3>
        <InquiryForm
          form={form}
          onChangeForm={onChangeForm}
          onSubmitForm={onSubmitForm}
        />
      </div>
    </article>
  );
}
