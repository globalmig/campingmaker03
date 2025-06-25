"use client";

import { useCallback } from 'react';

interface SearchProps {
  keyword: string;
  type: "title" | "content";
  onKeywordChange: (val: string) => void;
  onTypeChange: (val: "title" | "content") => void;
  onSearch: () => void;
}

export default function Search({
  keyword,
  type,
  onKeywordChange,
  onTypeChange,
  onSearch,
}: SearchProps) {

  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onTypeChange(e.target.value as "title" | "content");
    },
    [onTypeChange]
  );

  const onChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onKeywordChange(e.target.value);
    },
    [onKeywordChange]
  );

  const onSearchForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 페이지 새로고침 방지
      onSearch();
    },
    [onSearch]
  );

  return (
    <form onSubmit={onSearchForm} className='display-flex search-form'>
      <select value={type} onChange={onChangeSelect}>
        <option value="title">제목</option>
        <option value="content">내용</option>
      </select>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={onChangeKeyword}
      />
      <button type="submit">검색</button>
    </form>
  );
}
