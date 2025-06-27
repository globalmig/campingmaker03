'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ConditionalButtons() {
    const pathname = usePathname();
    const showInquiryButton = pathname === "/inquiry";
    const showYoutubeButton = pathname === "/youtube";
        const showBlogButton = pathname === "/blog";

    return (
        <>
            {showYoutubeButton &&
                <button className='display-flex conditional-button'>
                    <div style={{ width: '20px', maxWidth: '30px' }}>
                <Image src="/icons/icon_youtube_2.png" alt='유튜브 바로가기 아이콘' width={20} height={20} style={{ width: '100%', height: 'auto'}}/>
                    </div>
                    <a href="https://www.youtube.com/channel/UC0myVFv2l0TEYfXIkyCdJRg">캠핑메이커 유튜브 바로가기</a>
                </button>
            }
            {showBlogButton &&
                <button className='display-flex conditional-button'>
                    <div style={{ width: '20px', maxWidth: '30px', margin: "auto 0"}}>
                <Image src="/icons/icon_talk.png" alt='블로그 바로가기 아이콘' width={20} height={20} style={{ width: '100%', height: 'auto'}}/>
                    </div>
                    <a href="https://naver.me/GMmr08Lg">캠핑메이커 블로그 바로가기</a>
                </button>
            }
            {showInquiryButton &&
                <button className='conditional-button'><a href='/inquiry/write'>글쓰기</a></button>
            }
        </>
    )
}