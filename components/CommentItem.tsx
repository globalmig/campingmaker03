interface CommentItemProps {
  data: {
    _id: string;
    writer: string;
    content: string;
    createdAt: string;
  },
}

export default function CommentItem({ data }: CommentItemProps) {
  const { content, writer, createdAt } = data;
  return (
    <li className="comment-item display-flex">
      <div>
        <p>[{writer}]</p>
        <p>{content}</p>
      </div>
      <p>{new Date(createdAt).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}</p>
    </li>
  )
}