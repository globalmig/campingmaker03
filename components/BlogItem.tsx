import Image from "next/image"
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
                <p>네이버 블로그<span>{date}</span></p>
            </Link>
            <div style={{ width: '120px', height:'120px', maxWidth: '220px', maxHeight:"220px" }}>
            <Image src={img} alt="블로그 썸네일" width={1000} height={1000} style={{ width: '100%', height: '100%'}}/>
            </div>
        </section>
    )
}