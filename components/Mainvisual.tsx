import Image from "next/image";

export default function MainVisual() {
    return (
        <div className="mv_out">
            <div className="main_visual">
                <Image src="/images/main/mv_wrap.png" alt="v-img" />
                <div className="hold_type">
                    <Image src="/images/main/lhold_img.png" alt="v-img" />
                </div>
                <div className="hold_type no02">
                    <Image src="/images/main/rhold_img.png" alt="v-img" />
                </div>
                <div className="inner">
                    <div className="in01">
                        <Image src="/images/main/mls01_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls01_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls01_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls01_base.png" alt="v-img" />
                    </div>
                    <div className="in02">
                        <Image src="/images/main/mls02_img04.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls02_img03.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls02_img02.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls02_img01.png" className="ps no04" alt="v-img" />
                        <Image src="/images/main/mls02_base.png" alt="v-img" />
                    </div>
                    <div className="in03">
                        <Image src="/images/main/mls03_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls03_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls03_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls03_base.png" alt="v-img" />
                    </div>
                    <div className="in04">
                        <Image src="/images/main/mls04_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls04_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls04_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls04_base.png" alt="v-img" />
                    </div>
                    <div className="in05">
                        <Image src="/images/main/mls05_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls05_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls05_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls05_base.png" alt="v-img" />
                    </div>
                    <div className="in06">
                        <Image src="/images/main/mls06_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls06_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls06_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls06_base.png" alt="v-img" />
                    </div>
                    <div className="in07">
                        <Image src="/images/main/mls07_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls07_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls07_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls07_base.png" alt="v-img" />
                    </div>
                    <div className="in08">
                        <Image src="/images/main/mls08_img01.png" className="ps no01" alt="v-img" />
                        <Image src="/images/main/mls08_img02.png" className="ps no02" alt="v-img" />
                        <Image src="/images/main/mls08_img03.png" className="ps no03" alt="v-img" />
                        <Image src="/images/main/mls08_base.png" alt="v-img" />
                    </div>
                    {["01", "02", "03", "04"].map(num => (
                        <div key={num} className={`icle ic_type ic${num}`}>
                            <Image src={`/images/main/mcs${num}_img01.png`} className="ps no01" alt="v-img" />
                            <Image src={`/images/main/mcs${num}_img02.png`} className="ps no02" alt="v-img" />
                            <Image src={`/images/main/mcs${num}_img03.png`} className="ps no03" alt="v-img" />
                            <Image src={`/images/main/mcs${num}_base.png`} alt="v-img" />
                        </div>
                    ))}
                    <div className="r_hold rh_01">
                        <Image src="/images/main/ri_hold.png" alt="v-img" />
                    </div>
                    <div className="r_hold rh_02">
                        <Image src="/images/main/ri_hold02.png" alt="v-img" />
                    </div>
                    <div className="l_hold lh_01">
                        <Image src="/images/main/le_hold02.png" alt="v-img" />
                    </div>
                    {[...Array(8)].map((_, i) => {
                        const num = String(i + 1).padStart(2, "0");
                        return (
                            <div key={num} className={`ir${num}`}>
                                <Image src={`/images/main/mrs${num}_img01.png`} className="ps no01" alt="v-img" />
                                <Image src={`/images/main/mrs${num}_img02.png`} className="ps no02" alt="v-img" />
                                <Image src={`/images/main/mrs${num}_img03.png`} className="ps no03" alt="v-img" />
                                {num === "06" && (
                                    <Image src={`/images/main/mrs${num}_img04.png`} className="ps no04" alt="v-img" />
                                )}
                                <Image src={`/images/main/mrs${num}_base.png`} alt="v-img" />
                            </div>
                        );
                    })}
                    <div className="rh_03">
                        <Image src="/images/main/ri_hold03.png" alt="v-img" />
                    </div>
                    <div className="rh_04">
                        <Image src="/images/main/ri_hold04.png" alt="v-img" />
                    </div>
                </div>
            </div>
            <div className="main-title">
                <Image src="images/main_banner_title.png" alt="타이틀"/>
            </div>
        </div>
    )
}
