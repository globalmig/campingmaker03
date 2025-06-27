import { ReactNode } from 'react';
import ConditionalButtons from './ConditionalButtons';
import Image from 'next/image';

type Props = {
    title: string;
    backgroundText: string;
    content: string;
    span: string;
    children: ReactNode;
};

export default function Layout({ title, backgroundText, content, span, children }: Props) {

    return (
        <article>
            <section style={{ width: '100%', maxWidth: "2000"}}>
                <Image className='mo' src="/images/common_banner_mo.png" alt='배너' width={1000} height={153} style={{ width: '100%', height: 'auto'}} />
                <Image className='pc' src="/images/common_banner.png" alt='배너' width={1920} height={400} style={{ width: '100%', height: 'auto'}} />
            </section>
            <div>
                <h1>{backgroundText}</h1>
                <div>
                    <h2>{title}</h2>
                    <div className='display-flex-flow'>
                        <p><span>{span}</span>{content}</p>
                        <ConditionalButtons />
                    </div>
                </div>
                {children}
            </div>
        </article>
    )

}