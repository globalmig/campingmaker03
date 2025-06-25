import Image from "next/image"
import Link from "next/link"

type YoutubeItemProps = {
    title: string,
    img: string,
    link: string
}

export default function YoutubeItem({ title,img, link }: YoutubeItemProps) {
    return(
        <section>
            <div>
                <Image src={img} alt="유튜브 썸네일"/>
                <Image src="/icons/icon_video.png" alt="비디오 아이콘"/>
            </div>
            <div>
                <h3>[캠핑메이커]</h3>
                <p>{title}</p>
            </div>
            <button className="display-flex more-button">
                <Link href={link}>자세히 보기</Link>
                <Image src="/icons/icon_arrow_next.png" alt="자세히 보기"/>
            </button>
        </section>
    )
}