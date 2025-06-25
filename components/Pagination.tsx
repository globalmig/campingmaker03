import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IPaginationProps {
  dataCount: number;
  dataPerPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export default function Pagination({
  dataCount,
  dataPerPage,
  setStartPage,
  currentPage,
}: IPaginationProps) {
  const router = useRouter();

  const [pageCount, setPageCount] = useState(Math.ceil(dataCount / dataPerPage));
  const [groupStartPage, setGroupStartPage] = useState(1);
  const [selectPage, setSelectPage] = useState(currentPage);

  useEffect(() => {
    setPageCount(Math.ceil(dataCount / dataPerPage));
  }, [dataCount, dataPerPage]);

  useEffect(() => {
    setSelectPage(currentPage);
  }, [currentPage]);

  const pages = Array.from(
    { length: dataPerPage },
    (_, index) => index + groupStartPage
  ).filter((page) => page <= pageCount);

  const onClickPrevPage = () => {
    setStartPage((prev) => {
      if (prev - dataPerPage <= 0) {
        alert("첫 페이지입니다.");
        return 1;
      } else {
        setGroupStartPage(groupStartPage - dataPerPage);
        return prev - dataPerPage;
      }
    });
  };

  const onClickNextPage = () => {
    setStartPage((prev) => {
      if (prev + dataPerPage > pageCount) {
        alert("마지막 페이지입니다.");
        return prev;
      } else {
        setGroupStartPage(groupStartPage + dataPerPage);
        return prev + dataPerPage;
      }
    });
  };

  const onClickPage = (page: number) => {
    setStartPage(page);
  };

  return (
    <div className="pagination display-flex">
      <button onClick={onClickPrevPage}>
        <img src="/icons/icon_arrow_prev.png" alt="이전 버튼"/>
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onClickPage(page)}
            style={{
              margin: "0 8px",
              fontWeight: selectPage === page ? "bold" : "normal",
              backgroundColor: selectPage === page ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.1)"
            }}
          >
            <p>{page}</p>
          </button>
        ))}
      </div>
      <button onClick={onClickNextPage}>
        <img src="/icons/icon_arrow_next.png" alt="다음 버튼"/>
      </button>
    </div>
  );
}
