import Image from "next/image"
import Link from "next/link"

type YoutubeItemProps = {
    title: string,
    img: string,
    link: string
}

export default function YoutubeItem({ title, img, link }: YoutubeItemProps) {

    return (
        <section>
            <div>
                <div style={{ width: '100%', maxWidth: '435px' }}>
                    <Image src={img} alt="유튜브 썸네일" width={435} height={250} style={{ width: '100%', height: 'auto'}} />
                </div>
                <div style={{ width: '50px' }}>
                    <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={50} height={50} style={{ width: "50px", height: 'auto'}} />
                </div>
            </div>
            <div>
                <h3>[캠핑메이커]</h3>
                <p>{title}</p>
            </div>
            <button className="display-flex more-button" style={{paddingRight: "20px"}}>
                <Link href={link}>자세히 보기</Link>
                <div style={{ width: '10px', maxWidth: '15px', margin:"auto 0" }}>
                    <Image src="/icons/icon_arrow_next.png" alt="자세히 보기" width={10} height={15}/>
                </div>
            </button>
        </section>
    )
}