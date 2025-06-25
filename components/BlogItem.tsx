import Link from "next/link"

type BlogItemProps = {
    title: string,
    contents: string,
    img: string,
    date: string,
    link: string
}

export default function BlogItem({ title, contents, img, date, link }: BlogItemProps) {
    return (
        <section className="display-flex">
            <Link href={link}>
                <p>{title}</p>
                <p>{contents}</p>
                <p>네이버 블로그 <span>{date}</span></p>
            </Link>
            <div>
            <img src={img}/>
            </div>
        </section>
    )
}