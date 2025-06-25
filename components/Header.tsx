'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(prev => !prev);
    };

    return (
        <header>
            <div className="display-flex">
                <Link href="/">
                    <Image src="/icons/logo.png" alt="홈" />
                </Link>
                <div className="display-flex">
                    <ul className="pc display-flex">
                        <li><Link href="/product" onClick={() => setNavOpen(false)}>제품</Link></li>
                        <li><Link href="blog" onClick={() => setNavOpen(false)}>블로그</Link></li>
                        <li><Link href="youtube" onClick={() => setNavOpen(false)}>유튜브</Link></li>
                        <li><Link href="inquiry" onClick={() => setNavOpen(false)}>견적 및 문의</Link></li>
                        <li><Link href="directions" onClick={() => setNavOpen(false)}>오시는길</Link></li>
                    </ul>
                    <div className="nav-button" onClick={toggleNav}>
                        <div className={`nav-line1 ${navOpen ? 'effect' : ''}`}></div>
                        <div className={`nav-line2 ${navOpen ? 'effect' : ''}`}></div>
                        <div className={`nav-line3 ${navOpen ? 'effect' : ''}`}></div>
                        <div className={`nav-line4 ${navOpen ? 'effect' : ''}`}></div>
                    </div>
                </div>
            </div>
            <nav className={navOpen ? 'nav-open' : ''}>
                <ul className="display-flex-flow">
                    <li>
                        <p>HOME</p>
                        <Link href="/" onClick={() => setNavOpen(false)}>홈</Link>
                    </li>
                    <li>
                        <p>PRODUCT</p>
                        <Link href="/product" onClick={() => setNavOpen(false)}>제품</Link>
                    </li>
                    <li>
                        <p>BLOG</p>
                        <Link href="/blog" onClick={() => setNavOpen(false)}>블로그</Link>
                    </li>
                    <li>
                        <p>YOUTUBE</p>
                        <Link href="/youtube" onClick={() => setNavOpen(false)}>유튜브</Link>
                    </li>
                    <li>
                        <p>INQUIRY</p>
                        <Link href="/inquiry" onClick={() => setNavOpen(false)}>견적 및 문의</Link>
                    </li>
                    <li>
                        <p>DIRECTIONS</p>
                        <Link href="/directions" onClick={() => setNavOpen(false)}>오시는길</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}