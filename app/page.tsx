"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import "./mainVisual.css";
import "./main_visual.js";
import MainVisual from "@/components/Mainvisual";
import Image from "next/image";

export default function Home() {
  const wrapRefs = useRef<NodeListOf<HTMLDivElement> | null>(null);

  // Resize + height 설정
  const setHeights = () => {
    const width = window.innerWidth + 17;
    if (width > 1000 && wrapRefs.current) {
      wrapRefs.current.forEach((wrap) => {
        wrap.style.height = wrap.offsetWidth * 0.5 + "px";
      });
    }
  };

  useEffect(() => {
    // 초기 설정
    wrapRefs.current = document.querySelectorAll(".index-img-wrap");
    setHeights();

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", setHeights);

    return () => {
      // 클린업
      window.removeEventListener("resize", setHeights);
    };
  }, []);

  // 마우스 이벤트 핸들링
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = e.currentTarget;
    const indexWrap = anchor.closest(".index-img-wrap");

    if (!indexWrap) return;

    // i-half1 조정
    indexWrap.querySelectorAll(".i-half1").forEach((el) => {
      el.classList.remove("wid55");
      el.classList.add("wid45");
    });

    const parentHalf1 = anchor.closest(".i-half1");
    if (parentHalf1) {
      parentHalf1.classList.remove("wid45");
      parentHalf1.classList.add("wid55");
    }

    // i-half2 내부 처리
    const li = anchor.closest("li.i-half2");
    if (li) {
      const current = anchor.parentElement;
      const halves = li.querySelectorAll(".i-c-25half");

      halves.forEach((el) => {
        el.classList.remove("hei45", "hei55");
      });

      current?.classList.add("hei55");
      if (current?.previousElementSibling?.classList.contains("i-c-25half")) {
        current.previousElementSibling.classList.add("hei45");
      }

      // wid 조정
      const half2List = indexWrap.querySelectorAll(".i-half2");
      half2List.forEach((el) => {
        el.classList.remove("wid56");
        el.classList.add("wid44");
      });
      li.classList.remove("wid44");
      li.classList.add("wid56");
    }

    // i-c-half 조정
    const halfWrap = anchor.closest(".i-c-half");
    if (halfWrap) {
      indexWrap.querySelectorAll(".i-c-half").forEach((el) => {
        el.classList.remove("wid55");
        el.classList.add("wid45");
      });

      halfWrap.classList.remove("wid45");
      halfWrap.classList.add("wid55");

      const li = anchor.parentElement;
      if (!li) return;

      const index = Array.from(halfWrap.children).indexOf(li);

      const allLi = halfWrap.querySelectorAll("li");
      allLi.forEach((l) => l.classList.remove("hei55", "hei45"));

      if (index === 0) {
        allLi[0]?.classList.add("hei55");
        li.classList.add("hei55");
      }
      if (index === 1) {
        allLi[0]?.classList.add("hei45");
        allLi[1]?.classList.add("hei55");
        li.classList.add("hei55");
      }
    }
  };

  const handleMouseLeave = () => {
    document.querySelectorAll(".index-img-wrap ul li").forEach((el) =>
      el.classList.remove("wid45", "wid44", "wid55", "wid56")
    );
    document
      .querySelectorAll(".index-img-wrap ul li .i-c-25half")
      .forEach((el) => el.classList.remove("hei55", "hei45"));

    document.querySelectorAll(".i-c-half").forEach((el) =>
      el.classList.remove("wid45", "wid55")
    );
    document
      .querySelectorAll(".i-c-half li")
      .forEach((el) => el.classList.remove("hei55", "hei45"));
  };

  return (
    <>
      <main>
        <MainVisual />
      </main>

      <div className="main-contents">
        <section>
          <div>
            <p>Create Camping car No.1</p>
            <div>
              <div></div>
              <h1>Camping</h1>
            </div>
            <p>
              <span>캠핑카 제작 NO.1</span> 캠핑메이커
            </p>
            <p>
              <span>승합차, 화물차, SUV</span> 등 다양한 캠핑카를 제작합니다.
            </p>
          </div>
          <div className="index-img-wrap">
            <ul>
              <li className="i-c-50 i-half1 li1">
                <a href="#" className="a-block">
                  <h3 className="i-c-tit">다양한 목재를 사용한 실내 인테리어</h3>
                  <div className="i-c-bg-1-1 i-c-bg"></div>
                </a>
              </li>

              <li className="i-c-50 i-half1 li2">
                <ul>
                  <li className="i-c-50 i-half2 li2-1">
                    <div className="i-c-25half">
                      <div className="a-block" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h3 className="i-c-tit">부족함이 없는 수납공간</h3>
                        <div className="i-c-bg-1-2 i-c-bg"></div>
                      </div>
                    </div>

                    <div className="i-c-25half">
                      <div className="a-block" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h3 className="i-c-tit">루프탑 텐트</h3>
                        <div className="i-c-bg-1-3 i-c-bg"></div>
                      </div>
                    </div>
                  </li>

                  <li className="i-c-50 i-half2 li2-2">
                    <div className="a-block" onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      <h3 className="i-c-tit">위성 안테나와 미러링 동글로 TV시청</h3>
                      <div className="i-c-bg-1-4 i-c-bg"></div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <p>High quality Camping car</p>
            <div>
              <div></div>
              <h1>Product</h1>
            </div>
            <p>
              <span>캠핑메이커</span>에서 제작하는 캠핑카
            </p>
            <p>
              오직 캠핑메이커에서만 제작 가능한<span>최고 퀄리티!</span>
            </p>
          </div>
          <div className="index-img-wrap">
            <ul>
              <li className="i-c-50 i-half1 li2">
                <ul>
                  <li className="i-c-50 i-half2 li2-1">
                    <div className="i-c-25half">
                      <div className="a-block" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h3 className="i-c-tit">전기시설</h3>
                        <div className="i-c-bg-2-1 i-c-bg"></div>
                      </div>
                    </div>

                    <div className="i-c-25half">
                      <div className="a-block" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h3 className="i-c-tit">냉방시설</h3>
                        <div className="i-c-bg-2-2 i-c-bg"></div>
                      </div>
                    </div>
                  </li>

                  <li className="i-c-50 i-half2 li2-2">
                    <div className="a-block" onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      <h3 className="i-c-tit">주방시설</h3>
                      <div className="i-c-bg-2-3 i-c-bg"></div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="i-c-50 i-half1 li1">
                <div className="a-block" onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <h3 className="i-c-tit">원목가구</h3>
                  <div className="i-c-bg-2-4 i-c-bg"></div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <p>Customization to your customers</p>
            <div>
              <div></div>
              <h1>Option</h1>
            </div>
            <p>
              <span>견고한 가구</span>와 <span>다양한 옵션</span>의 고객 맞춤
            </p>
            <p>
              고객님 요구사항에 맞춘<span>커스텀 작업</span>이 가능합니다.
            </p>
          </div>
          <div className="index-img-wrap cf">
            <ul className="i-c-half">
              <li className="i-c-4-1 i-c-block">
                <div className="a-block" onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <h3 className="i-c-tit">확장형 침상</h3>
                  <div className="i-c-bg i-c-bg"></div>
                </div>
              </li>

              <li className="i-c-4-2 i-c-block">
                <div className="a-block" onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <h3 className="i-c-tit">테이블</h3>
                  <div className="i-c-bg i-c-bg"></div>
                </div>
              </li>
            </ul>
            <ul className="i-c-half">
              <li className="i-c-4-3 i-c-block">
                <div className="a-block" onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <h3 className="i-c-tit">TV</h3>
                  <div className="i-c-bg i-c-bg"></div>
                </div>
              </li>

              <li className="i-c-4-4 i-c-block">
                <div className="a-block" onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <h3 className="i-c-tit">수납장</h3>
                  <div className="i-c-bg i-c-bg"></div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="social-media">
          <div className="display-flex">
            <h1>Social Media</h1>
            <a href="/youtube">VIEW MORE +</a>
          </div>
          <div className="display-flex-flow">
            <section className="social-media-up">
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_1.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="media-con">
                <p>Youtube</p>
                <p>새로운 느낌의 캠핑카</p>
                <p>가죽과 패브릭, 원목의 조합으로 완성된 캠핑카!</p>
              </div>
            </section>
            <section className="social-media-down">
              <div className="media-con">
                <p>Youtube</p>
                <p>달라진 2열 시트</p>
                <p>새로운 방식의 가죽형 캠핑카가 어떻게 진행될까요?</p>
              </div>
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_2.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </section>
            <section className="social-media-up">
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_3.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="media-con">
                <p>Youtube</p>
                <p>
                  스타렉스 2종
                  <br />& 스타리아 2종
                </p>
                <p>인기 많은 캠핑카를 돌아보는 시간!</p>
              </div>
            </section>
            <section className="social-media-down">
              <div className="media-con">
                <p>Youtube</p>
                <p>지금껏 보지 못한 새로운 캠핑카</p>
                <p>넓고 높은 다마스 캠핑카</p>
              </div>
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_4.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </section>
            <section className="social-media-up">
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_5.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="media-con">
                <p>Youtube</p>
                <p>고객 안심 프로젝트</p>
                <p>방음, 단열, 트리밍을 어떻게 작업할까요?</p>
              </div>
            </section>
            <section className="social-media-down">
              <div className="media-con">
                <p>Youtube</p>
                <p>스타리아 캠핑카</p>
                <p>패브릭 감성을 더한 스타리아 캠핑카</p>
              </div>
              <div className="media-image">
                <div style={{ width: '30px', maxWidth: '40px' }}>
                  <Image src="/icons/icon_video.png" alt="비디오 아이콘" width={30} height={30} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: '100%%', maxWidth: '240px' }}>
                  <Image
                    src="/images/social_media_6.png"
                    alt="새로운 느낌의 캠핑카" width={240} height={240} style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
