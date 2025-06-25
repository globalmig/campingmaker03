import InquiryItem from "./InquiryItem";

interface InquiryList {
    _id: string;
  title: string;
  name: string;
  createdAt: string;
}

interface InquiryListProps {
    data: InquiryList[];
    startPage: number,
    dataPerPage: number,
    dataCount: number
}

export default function InquiryList({data, startPage, dataPerPage, dataCount} : InquiryListProps) {

  return (
    <ul>
      <li className="display-flex pc">
        <p>번호</p>
        <p>글제목</p>
        <p>글쓴이</p>
        <p>작성일</p>
      </li>
      {data.length > 0 ? (
        data.map((item, index) => (
          <InquiryItem key={item._id} data={item} index={dataCount - ((startPage - 1) * dataPerPage + index)}/>
        ))
      ) : (
        <li className="no-post">게시글이 없습니다.</li>
      )}
    </ul>
  );
}
