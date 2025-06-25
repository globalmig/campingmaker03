"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent, useCallback, ChangeEvent } from "react";

interface CommentFormProps {
  inquiryId: string; // 댓글이 달리는 게시글 ID
}

export default function CommentForm({ inquiryId }: CommentFormProps) {

  const [comment, setComment] = useState({
    writer: "",
    content: "",
  });

  const router = useRouter();

  const onChangeComment = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setComment((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const onSubmitComment = async (e: FormEvent) => {
    e.preventDefault();

    if (!comment.content.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    if (!comment.writer.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    try {
      const res = await fetch(`/api/comment/${inquiryId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          writer: comment.writer,
          content: comment.content,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.log(errorData);
        return;
      }

      alert("댓글이 등록되었습니다.");
      setComment({ writer: "", content: "" });
      router.refresh();
    } catch (err) {
      console.error("댓글 등록 에러:", err);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  const commentCancel = () => {
    setComment({ writer: "", content: "" });
  };

  return (
    <form onSubmit={onSubmitComment} className="comment-form">
      <div>
        <div className="display-flex">
          <label htmlFor="comment-name">이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            id="comment-name"
            name="writer"
            value={comment.writer}
            onChange={onChangeComment}
          />
        </div>
        <div className="display-flex">
          <label htmlFor="comment">댓글</label>
          <textarea
            id="comment"
            placeholder="댓글을 입력하세요"
            name="content"
            value={comment.content}
            onChange={onChangeComment}
            rows={5}
          />
        </div>
      </div>
      <div className="display-flex">
        <button type="submit">등록</button>
        <button type="button" onClick={commentCancel}>
          취소
        </button>
      </div>
    </form>
  );
}
