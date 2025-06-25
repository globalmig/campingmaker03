import { ReactNode } from 'react';
import ConditionalButtons from './ConditionalButtons';

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
            <img className='mo' src="/images/common_banner_mo.png" alt='배너'/>
            <img className='pc' src="/images/common_banner.png" alt='배너' />
            <div>
                <h1>{backgroundText}</h1>
                <div>
                    <h2>{title}</h2>
                    <div className='display-flex-flow'>
                        <p><span>{span}</span>{content}</p>
                        <ConditionalButtons/>
                    </div>
                </div>
                {children}
            </div>
        </article>
    )

}