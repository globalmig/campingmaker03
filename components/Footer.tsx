'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="display-flex-flow">
                    <div>
                        <div>
                            <div style={{ width: '100%', maxWidth: '100px', margin: "0 auto" }}>
                                <Image src="/icons/logo.png" alt="로고" width={100} height={20} style={{ width: '100%', height: 'auto'}}/>
                            </div>
                            <div className="display-flex">
                                <Link href="https://naver.me/GMmr08Lg"
                                style={{ width: '30px', maxWidth: '100px' }}>
                                    <Image src="/icons/icon_naverblog.png" alt="네이버 블로그 이동"  width={30} height={30} style={{ height: 'auto' }}/>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC0myVFv2l0TEYfXIkyCdJRg"
                                style={{ width: '30px', maxWidth: '100px' }}>
                                    <Image src="/icons/icon_youtube.png" alt="유튜브 이동"  width={30} height={30} style={{ height: 'auto' }}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="display-flex">
                            <p>CONTACT US</p>
                            <p>
                                <Link href="tel: 010-8347-7470">010-8347-7470 </Link>
                            </p>
                        </div>
                        <div className="display-flex">
                            <ul>
                                <li>제작문의</li>
                                <li>안내</li>
                                <li>요청사항</li>
                            </ul>
                            <button>
                                <Link href="/inquiry/write">견적 & 상담요청</Link>
                            </button>
                        </div>
                    </div>
                    <div className="display-flex-flow">
                        <div>
                            <p>캠핑메이커</p>
                            <ul className="display-flex-flow">
                                <li>캠핑메이커</li>
                                <li>김미호</li>
                                <li>사업자등록번호: 387-01-01790</li>
                                <li>주소: 경남 김해시 진영읍 본산로219번길 20-24 </li>
                                <li>전화번호: 010-8347-7470 </li>
                                <li>기타: 승합차, 화물차, SUV, 세단 등 다양한 차량을 캠핑카로 제작하고 있습니다.</li>
                            </ul>
                        </div>
                        <div>
                            <button>개인정보취급방침</button>
                        </div>
                    </div>
                </div>
                <div className="icon-menu">
                    <div>
                        <Link href="tel:010-8347-7470" className="display-flex" style={{ width: '40px', maxWidth: '70px' }}>
                            <Image src="/icons/icon_tel.png" alt="상담전화" width={20} height={20} style={{ width: '50%', height: 'auto'}} />
                            <p>010-8347-7470</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="/inquiry/write" className="display-flex" style={{ width: '40px', maxWidth: '70px'}}>
                            <Image src="/icons/icon_talk.png" alt="문의하기" width={20} height={20} style={{ width:'50%', height: 'auto'}} />
                            <p>문의하기</p>
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' , width: '100%', maxWidth:'70px',  maxHeight: '70px'}}>
                        <Image src="/icons/icon_top.png" alt="맨 위로" width={20} height={20} style={{ width: '50%', height: 'auto'}} />
                    </div>
                </div>
            </footer>
        </>

    )
}