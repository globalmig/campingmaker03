'use client';
import { useState } from "react";
import BlogItem from "@/components/BlogItem";
import Layout from "@/components/Layout";
import { blogList } from "@/data/blogList";

export default function BlogPage() {
    const [blogCount, setBlogCount] = useState(10);

    const blogMoreClick = () => {
        setBlogCount(blogList.length);
    };

    return (
        <Layout title="BLOG" backgroundText="BLOG" span="캠핑메이커의 소식" content="을 블로그에서 확인해보세요.">
            <div className="blog">
                <div className="display-flex-flow">
                    {blogList.slice(0, blogCount).map((item) => (
                        <BlogItem
                            key={item.id}
                            title={item.title}
                            contents={item.contents}
                            img={item.img}
                            date={item.date}
                            link={item.link}
                        />
                    ))}
                </div>
                {blogCount < blogList.length && (
                    <div className="button-wrapper">
                        <button className="contents-more" onClick={blogMoreClick}>
                            <img src="/icons/more_button.png" />
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
}
