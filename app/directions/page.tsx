import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function DirectionsPage() {
    return (
        <Layout title="DIRECTIONS" backgroundText="DIRECTIONS" span="캠핑메이커" content="의 위치를 안내해드립니다.">

            <div className="directions">

                <div style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
                    <iframe
                        title="캠핑메이커 위치"
                        src="https://www.google.com/maps?q=경상남도+김해시+진영읍+본산리+716&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div>
                    <p>캠핑메이커</p>
                    <p>경상남도 김해시 진영읍 본산리 716</p>
                    <div></div>
                </div>

                <div className="display-flex">
                    <button className="display-flex">
                        <div style={{ width: '15px' }}>
                            <Image src="/icons/icon_location.png" alt="길찾기" width={15} height={15} style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <Link href="https://naver.me/GMmr08Lg">길찾기</Link>
                    </button>
                    <button className="display-flex">
                        <div style={{ width: '15px' }}>
                            <Image src="/icons/icon_map.png" alt="지도에서보기" width={15} height={15} style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <Link href="https://naver.me/GMmr08Lg">지도에서 보기</Link>
                    </button>
                </div>

                <div className="display-flex-flow">
                    <div>
                        <div className="display-flex direction-icon">
                            <div style={{ width: '15px', maxWidth: '20px', margin: "auto 0" }}>
                                <Image src="/icons/icon_location_2.png" alt="오시는길 아이콘" width={100} height={20} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p>오시는 길</p>
                        </div>
                        <div>
                            <p>경남 김해시 진영읍, 봉하마을(전 노무현대통령 생가) 방향으로 오시거나, 경동택배 김해진영본산714 영업소를 네비게이션에 검색하고 오시면 편리하게 오실 수 있습니다.</p>
                            <div className="display-flex">
                                <p>주차정보</p>
                                <p>주차공간 여유있음 주차시간 무제한</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="display-flex direction-icon">
                            <div style={{ width: '15px', maxWidth: '20px', margin: "auto 0" }}>
                                <Image src="/icons/icon_tel_2.png" alt="전화번호 아이콘" width={100} height={20} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p>전화번호</p>
                        </div>
                        <ul>
                            <li>055-345-7470</li>
                            <li>010-8347-7470</li>
                        </ul>
                    </div>
                    <div>
                        <div className="display-flex direction-icon">
                            <div style={{ width: '15px', maxWidth: '20px', margin: "auto 0" }}>
                                <Image src="/icons/icon_time.png" alt="이용시간 아이콘" width={100} height={20} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p>이용시간</p>
                        </div>
                        <div className="display-flex">
                            <ul>
                                <li>평일</li>
                                <li>토요일</li>
                            </ul>
                            <ul>
                                <li>09:00 - 18:00</li>
                                <li>09:00 - 15:00<br /><span>일요일, 공휴일은 휴무입니다.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="display-flex direction-icon">
                            <div style={{ width: '15px', maxWidth: '20px' }}>
                                <Image src="/icons/icon_notice.png" alt="이용안내 아이콘" width={20} height={20} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p>이용안내</p>
                        </div>
                        <div className="display-flex-flow direction-notice">
                            <section>
                                <div style={{ width: '30px', height: '40px', maxWidth: '70px', margin:'0 auto' }}>
                                    <Image src="/icons/icon_directions_1.png" alt="예약" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <p>예약</p>
                            </section>
                            <section>
                                <div style={{ width: '30px',  height: '40px',maxWidth: '70px', margin:'0 auto' }}>
                                    <Image src="/icons/icon_directions_2.png" alt="주차" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <p>주차</p>
                            </section>
                            <section>
                                <div style={{ width: '30px',  height: '40px',maxWidth: '70px', margin:'0 auto' }}>
                                    <Image src="/icons/icon_directions_3.png" alt="발렛파킹" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <p>발렛파킹</p>
                            </section>
                            <section>
                                <div style={{ width: '30px',  height: '40px', maxWidth: '70px', margin:'0 auto' }}>
                                    <Image src="/icons/icon_directions_4.png" alt="무선인터넷" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <p>무선인터넷</p>
                            </section>
                            <section>
                                <div style={{ width: '40px',  height: '40px',maxWidth: '70px', margin:'0 auto' }}>
                                    <Image src="/icons/icon_directions_5.png" alt="애완동물 동반" width={30} height={35} style={{ width: '100%', height: 'auto'}} />
                                </div>
                                <p>애완동물 동반</p>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className="display-flex direction-icon">
                            <div style={{ width: '15px', maxWidth: '20px', margin: "auto 0" }}>
                                <Image src="/icons/icon_profile.png" alt="사업자번호 아이콘" width={50} height={50} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <p>사업자번호</p>
                        </div>
                        <div className="display-flex">
                            <ul>
                                <li>상호명</li>
                                <li>대표자</li>
                                <li>사업자번호</li>
                                <li>이메일</li>
                            </ul>
                            <ul>
                                <li>캠핑메이커</li>
                                <li>김미호</li>
                                <li>387-01-01790</li>
                                <li>wwkywky@naver.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}