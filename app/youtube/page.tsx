'use client';
import Layout from "@/components/Layout";
import YoutubeItem from "@/components/YoutubeItem";
import { youtubeList } from "@/data/youtubeList";
import { useState } from "react";

export default function YoutubePage() {
    const [youtubeCount, setYoutubeCount] = useState(10);
    
        const youtubeMoreClick = () => {
            setYoutubeCount(youtubeList.length); 
        };
    return (
        <Layout title="YOUTUBE" backgroundText="YOUTUBE" span="캠핑메이커의 소식" content="을 유튜브에서 확인해보세요.">
            <div className="youtube">
                <div className="display-flex-flow">
                    {youtubeList.slice(0, youtubeCount).map((item) => <YoutubeItem key={item.id}
                        title={item.title}
                        img={item.img}
                        link={item.link}
                    />)}
                </div>
                {youtubeCount < youtubeList.length && (
                    <div className="button-wrapper">
                        <button className="contents-more" onClick={youtubeMoreClick}>
                            <img src="/icons/more_button.png" />
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    )
}