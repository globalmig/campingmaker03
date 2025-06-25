'use client';

import { ChangeEvent, useCallback, useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function InquiryAskPage() {
  const [form, setForm] = useState({
    title: '',
    name: '',
    content: '',
    password: '',
  });

  const router = useRouter();

  const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const onSubmitForm = useCallback(async () => {

    const { title, name, content, password } = form;

    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('name', form.name);
    formData.append('content', form.content);
    formData.append('password', form.password);

    const res = await fetch('/api/lists', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert("게시글이 등록되었습니다.")
      router.push('/inquiry');
    } else {
      const err = await res.json();
      alert("게시글 등록에 실패했습니다. 다시 시도해주세요.");
    }

  }, [form, router]);

  return (
    <article className="inquiry-write">
      <Image className='mo' src="/images/common_banner_mo.png" alt='배너' />
      <Image className='pc' src="/images/common_banner.png" alt='배너' />
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
