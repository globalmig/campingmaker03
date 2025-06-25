import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface InquiryFormProps {
    form: {
        title: string;
        name: string;
        content: string;
        password: string;
    };
    onChangeForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmitForm: () => void;
}

export default function InquiryForm({ form, onChangeForm, onSubmitForm }: InquiryFormProps) {
    const maxLength = 3000;
    const router = useRouter();

    return (
        <form className="inquiry-form" onSubmit={e => { e.preventDefault(); onSubmitForm(); }}>
            <div className="display-flex-flow">
                <div className="display-flex">
                    <label htmlFor="name">이름</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="이름을 입력하세요"
                        value={form.name}
                        onChange={onChangeForm}
                    />
                </div>
                <div className="display-flex">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        value={form.password}
                        onChange={onChangeForm}
                    />
                </div>
            </div>

            <div className="display-flex">
                <label htmlFor="title">제목</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="제목을 입력하세요"
                    value={form.title}
                    onChange={onChangeForm}
                />
            </div>

            <div>
                <div className="display-flex">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="내용을 입력하세요"
                        rows={8}
                        value={form.content}
                        onChange={onChangeForm}
                        maxLength={maxLength}
                    />
                </div>
                <p>{form.content.length}/{maxLength}</p>
            </div>

            <div className="display-flex">
                <button type="submit">등록</button>
                <button type="button" onClick={() => router.back()}>취소 </button>
            </div>
        </form>
    );
}
