import CommentItem from "./CommentItem";

interface CommentListProps {
  commentData: {
    _id: string;
    writer: string;
    content: string;
    createdAt: string;
  }[]
}

export default function CommentList({ commentData }: CommentListProps) {
  return (
    <div className="comment-list">
      {commentData.length > 0 ? (
        <ul>
          {commentData.map((c) => (
            <CommentItem
              key={c._id}
              data={c}
            />
          ))}
        </ul>
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  );
}
