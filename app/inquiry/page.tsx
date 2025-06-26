"use client";
import InquiryList from "@/components/InquiryList";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { useCallback, useEffect, useState } from "react";

interface Inquiry {
  _id: string;
  title: string;
  name: string;
  createdAt: string;
  isSecret: boolean;
}

export default function InquiryPage() {
  const [data, setData] = useState<Inquiry[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [startPage, setStartPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState<"title" | "content">("title");

  const dataPerPage = 10;

const fetchData = useCallback(async () => {
  try {
    const query = searchKeyword
      ? `/api/lists/search?keyword=${encodeURIComponent(searchKeyword)}&type=${searchType}&page=${startPage}&limit=${dataPerPage}`
      : `/api/pages?page=${startPage}&limit=${dataPerPage}`;

    const res = await fetch(query);

    if (!res.ok) {
      const errText = await res.text();
      console.error('API 응답 실패:', res.status, errText);
      setData([]);
      setDataCount(0);
      return;
    }

    const json = await res.json();
    setData(json.data);
    setDataCount(json.totalCount ?? json.data.length);
  } catch (err) {
    console.error("검색 또는 페이지 데이터 로딩 오류:", err);
    setData([]);
    setDataCount(0);
  }
}, [searchKeyword, searchType, startPage, dataPerPage]);

  useEffect(() => {
    fetchData();
  }, [startPage]);

  const onSearch = () => {
    setStartPage(1);
    fetchData();
  };

  return (
    <Layout
      title="INQUIRY"
      backgroundText="INQUIRY"
      span="캠핑메이커의 견적"
      content="에 관련하여 언제든지 문의해주세요."
    >
      <div className="inquiry">
        <InquiryList
          data={data}
          startPage={startPage}
          dataPerPage={dataPerPage}
          dataCount={dataCount}
        />
        {data &&
        <Pagination
          dataCount={dataCount}
          dataPerPage={dataPerPage}
          setStartPage={setStartPage}
          currentPage={startPage}
        />
        }
        <div className="search-form">
          <Search
            keyword={searchKeyword}
            type={searchType}
            onKeywordChange={setSearchKeyword}
            onTypeChange={setSearchType}
            onSearch={onSearch}
          />
        </div>
      </div>
    </Layout>
  );
}
