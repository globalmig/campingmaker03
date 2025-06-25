import Layout from "@/components/Layout";

export default function ProductPage() {
    return (
        <Layout title="PRODUCT" backgroundText="PRODUCT" span="캠핑메이커 패키지 상품" content="을 소개합니다.">
            <div className="product">

                <div>
                    <img src="/images/product/product_luxury.png" alt="캠핑메이커 패키지 상품 럭셔리" />
                    <img src="/images/product/product_noble.png" alt="캠핑메이커 패키지 상품 노블" />
                    <img src="/images/product/product_premium.png" alt="캠핑메이커 패키지 상품 프리미엄" />
                    <img src="/images/product/product_modern.png" alt="캠핑메이커 패키지 상품 모던" />
                    <img src="/images/product/product_smart.png" alt="캠핑메이커 패키지 상품 스마트" />
                    <img src="/images/product/product_nomal.png" alt="캠핑메이커 패키지 상품 노멀" />
                    <img src="/images/product/product_suv.png" alt="캠핑메이커 패키지 상품 SUV" />
                    <img src="/images/product/product_truck.png" alt="캠핑메이커 패키지 상품 픽업트럭" />
                </div>

                <div>
                    <div>
                        <h1>최고의 스타렉스 캠핑카를 향해</h1>
                        <h2>오직 캠핑메이커에서만 제작 가능한 최고의 퀄리티!</h2>
                        <p>캠핑메이커는 10년 이상 경력을 가진 목공 정비분야의 우수한 인력으로
                            최고급 품질의 캠핑카를 제작하는 업체입니다.</p>
                    </div>
                    <ul>
                        <li>스타렉스 & 스타리아 외 승합차량 SUV 차량 등 소형 캠핑카 제작 및 구조 변경 대행</li>
                        <li>고객 맞춤 캠핑카 제작 가능</li>
                    </ul>
                    <div className="display-flex">
                        <section>
                            <div>
                                <button>전기시설</button>
                                <ul>
                                    <li>- 인버터</li>
                                    <li>- 배터리 (인산철/산업용)</li>
                                    <li>- 주행충전기</li>
                                    <li>- 한전충전세트 (파워아울렛,디지털 충전기, 절체기)</li>
                                    <li>- 태양광 패널</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div>
                                <button>원목가구</button>
                                <ul>
                                    <li>사용 가능한 원목</li>
                                    <li>고무나무, 멀바우나무, 자작나무, 히노끼나무</li>
                                </ul>
                                <ul>
                                    <li>제작 가능한 가구</li>
                                    <li>조리대, 씽크대, 침실공간, 수납장, 테이블 등</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>오직 캠핑메이커에서만 제작 가능한<br />최고급 캠핑카</h2>
                        <img src="/images/product/product_1.png" />
                    </div>
                    <div>
                        <h2>견고한 가구와 다양한 옵션</h2>
                        <div className="display-flex-flow">
                            <img src="/images/product/product_option_1.png" />
                            <img src="/images/product/product_option_2.png" />
                            <img src="/images/product/product_option_3.png" />
                            <img src="/images/product/product_option_4.png" />
                        </div>
                    </div>
                    <div>
                        <h2>어닝 및 루프탑 팝업텐트도 캠핑메이커에서</h2>
                        <img src="/images/product/product_loof_flex.png" />
                    </div>
                    <div>
                        <h2>위성 안테나, 미러링 동글로 어디서든 TV 시청 가능</h2>
                        <img src="/images/product/product_tv.png" />
                    </div>
                    <div>
                        <h2>다양한 목재를 사용한 실내 인테리어</h2>
                        <div className="display-flex-flow">
                            <img src="/images/product/product_tree_1.png" />
                            <img src="/images/product/product_tree_2.png" />
                            <img src="/images/product/product_tree_3.png" />
                            <img src="/images/product/product_tree_4.png" />
                        </div>
                    </div>
                    <div>
                        <h2>부족함 없는 넓은 수납공간</h2>
                        <div className="display-flex-flow">
                            <img src="/images/product/product_box_1.png" />
                            <img src="/images/product/product_box_2.png" />
                            <img src="/images/product/product_box_3.png" />
                            <img src="/images/product/product_box_4.png" />
                        </div>
                    </div>
                    <div>
                        <h2>고객의 안전을 최우선 하는<br />
                            전기 시설 배치와 전선 마감</h2>
                        <div className="display-flex-flow">
                            <img src="/images/product/product_electricity_1.png" />
                            <img src="/images/product/product_electricity_2.png" />
                        </div>
                    </div>
                    <div className="background-wrapper">
                        <h3>캠핑메이커에서는 <span>고객님 요구사항에 맞추 커스텀 작업이 가능한
                        </span><br />국내에서는 몇 안되는 캠핑카 제작 전문 업체입니다.</h3>
                        <div></div>
                    </div>
                </div>

                <div className="display-flex">
                    <section>
                        <img src="/images/product/product_custom_1.png" />
                        <p>확장형 침상</p>
                    </section>
                    <section>
                        <img src="/images/product/product_custom_2.png" />
                        <p>주방시설<br />(본인냉장고 활용)</p>
                    </section>
                    <section>
                        <img src="/images/product/product_custom_3.png" />
                        <p>1열 콘솔 박스</p>
                    </section>
                </div>

                <div className="background-wrapper">
                    <h3>스타렉스 & 스타리아 외에도<br />
                        승합차, 시티벤, SUV 차량 등<br />
                        <span>다양한 차종을 캠핑카로 제작</span>하고 있습니다.</h3>
                    <div></div>
                </div>

                <div>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_모하비.png" />
                        </div>
                        <div>
                            <h3>모하비</h3>
                            <ul>
                                <li>전기시설</li>
                                <li>침상</li>
                                <li>TV세트</li>
                                <li>아날로그 패널</li>
                                <li>조명시설</li>
                            </ul>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_코란토투리스모.png" />
                        </div>
                        <div>
                            <h3>코란도 투리스모</h3>
                            <ul>
                                <li>전기시설</li>
                                <li>침상, 벽장</li>
                                <li>TV세트</li>
                                <li>아날로그 패널</li>
                                <li>조명시설</li>
                                <li>트렁크 테이블</li>
                                <li>주방시설</li>
                            </ul>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_올란도.png" />
                        </div>
                        <div>
                            <h3>올란도</h3>
                            <ul>
                                <li>전기시설</li>
                                <li>접이식 침상 <br /><span>(2열 시트 사용가능)</span></li>
                                <li>냉장고</li>
                                <li>전자렌지</li>
                                <li>아날로그 패널</li>
                                <li>조명시설</li>
                                <li>트렁크 테이블</li>
                                <li>리프트테이블</li>
                            </ul>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_코나.png" />
                        </div>
                        <div>
                            <h3>코나</h3>
                            <ul>
                                <li>전기시설</li>
                                <li>침상</li>
                                <li>아날로그 패널</li>
                                <li>조명시설</li>
                                <li>접이식 테이블</li>
                            </ul>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_QM6LPG.png" />
                        </div>
                        <div>
                            <h3>QM6 LPG</h3>
                            <ul>
                                <li>전기시설(이동형)</li>
                                <li>접이식 침상 <br /><span>(2열 시트 사용가능)</span></li>
                                <li>아날로그 패널</li>
                                <li>조명시설</li>
                                <li>리프트 테이블</li>
                            </ul>
                        </div>
                    </section>
                    <section className="display-flex">
                        <div>
                            <img src="/images/product/product_car_싼타페.png" />
                        </div>
                        <div>
                            <h3>싼타페</h3>
                            <ul>
                                <li>접이식 침상 <br /><span>(2열 시트 사용가능)</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="background-wrapper">
                    <h3>캠핑메이커에서는 최상품의 캠핑카를 제작하기 위해 장인들의 노력으로<br />
                        <span>최고의 마감을 보여드립니다.</span></h3>
                    <div></div>
                </div>

            </div>
        </Layout >
    )
}