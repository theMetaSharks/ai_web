import React from 'react';
import { RoadmapPage } from '../views/pages/Roadmap/roadmap';

const goaldataList = [
    {
        title: 'Accelerate 300+ Startups:',
        text: 'Our goal is to incubate and launch over 300 tech startups, equipping them with the resources, guidance, and support necessary to achieve remarkable success.'
    },
    {
        title: 'Build a Robust Digital Economy ',
        text: 'By embedding AITO into all member businesses, we aim to cultivate a thriving digital economy that drives innovation, collaboration, and mutual growth. '
    },
    {
        title: 'Forge Strategic Alliances',
        text: 'Establish key partnerships with leading tech companies, financial institutions, and global markets to support our startups’ expansion and enhance their market reach.'
    }
]

export const GoalmapSection = () => {
    return (
        <div className='row'>
            <div className="col-xl-12">
                <div className="d-xl-block d-none">

                    <svg width="1218" height="665" viewBox="0 0 1218 665" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M215 494C306.679 494 381 419.455 381 327.5C381 235.545 306.679 161 215 161C123.321 161 49 235.545 49 327.5C49 419.455 123.321 494 215 494Z" fill="url(#paint0_linear_2005_45)" />
                        <path d="M628 319H422V330H628V319Z" fill="#9649FD" />
                        <path d="M523.7 545.622L370.432 464.918L365.307 474.651L518.575 555.355L523.7 545.622Z" fill="url(#paint1_linear_2005_45)" />
                        <path d="M518.338 104L364 182.639L368.994 192.44L523.332 113.801L518.338 104Z" fill="url(#paint2_linear_2005_45)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M215 124.563C326.804 124.563 417.437 215.196 417.437 327C417.437 438.804 326.804 529.437 215 529.437C103.196 529.437 12.563 438.804 12.563 327C12.563 215.196 103.196 124.563 215 124.563ZM215 112C333.742 112 430 208.258 430 327C430 445.742 333.742 542 215 542C96.2579 542 0 445.742 0 327C0 208.258 96.2582 112 215 112Z" fill="#9649FD" />
                        <path d="M1200.31 234H699.693C689.921 234 682 246.645 682 262.244V390.756C682 406.355 689.921 419 699.693 419H1200.31C1210.08 419 1218 406.355 1218 390.756V262.244C1218 246.645 1210.08 234 1200.31 234Z" fill="#BD91F8" />
                        {/* <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="20" letterSpacing="0em"><tspan x="826" y="277.336">By embedding AITO into all member </tspan><tspan x="826" y="308.336">businesses, we aim to cultivate a thriving </tspan><tspan x="826" y="339.336">digital economy that drives innovation, </tspan><tspan x="826" y="370.336">collaboration, and mutual growth. </tspan></text> */}
                        <g filter="url(#filter0_d_2005_45)">
                            <path d="M708.5 426C763.452 426 808 381.452 808 326.5C808 271.548 763.452 227 708.5 227C653.548 227 609 271.548 609 326.5C609 381.452 653.548 426 708.5 426Z" fill="#9649FD" />
                        </g>
                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="23" fontWeight="bold" letterSpacing="0em"><tspan x="631.319" y="319.361">Build a Robust &#10;</tspan><tspan x="625.367" y="350.361">Digital Economy </tspan></text>
                        <path d="M1064.31 462H563.693C553.921 462 546 474.645 546 490.244V618.756C546 634.355 553.921 647 563.693 647H1064.31C1074.08 647 1082 634.355 1082 618.756V490.244C1082 474.645 1074.08 462 1064.31 462Z" fill="#9649FD" />
                        {/* <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="20" letterSpacing="0em"><tspan x="690" y="505.336">Establish key partnerships with leading </tspan><tspan x="690" y="536.336">tech companies, financial institutions, </tspan><tspan x="690" y="567.336">and global markets to support our </tspan><tspan x="690" y="598.336">startups&#x2019; expansion and enhance their </tspan><tspan x="690" y="629.336">market reach.        </tspan></text> */}
                        <g filter="url(#filter1_d_2005_45)">
                            <path d="M572.5 654C627.452 654 672 609.452 672 554.5C672 499.548 627.452 455 572.5 455C517.548 455 473 499.548 473 554.5C473 609.452 517.548 654 572.5 654Z" fill="#BD91F8" />
                        </g>
                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="23" fontWeight="bold" letterSpacing="0em"><tspan x="540.578" y="531.361">Forge &#10;</tspan><tspan x="523.26" y="562.361">Strategic &#10;</tspan><tspan x="525.428" y="593.361">Alliances</tspan></text>
                        <path d="M1064.31 7H563.693C553.921 7 546 19.6452 546 35.2439V163.756C546 179.355 553.921 192 563.693 192H1064.31C1074.08 192 1082 179.355 1082 163.756V35.2439C1082 19.6452 1074.08 7 1064.31 7Z" fill="#9649FD" />
                        <g filter="url(#filter2_d_2005_45)">
                            <path d="M572.5 199C627.452 199 672 154.452 672 99.5C672 44.5477 627.452 0 572.5 0C517.548 0 473 44.5477 473 99.5C473 154.452 517.548 199 572.5 199Z" fill="#BD91F8" />
                        </g>
                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="23" fontWeight="bold" letterSpacing="0em"><tspan x="514.169" y="76.3613">Accelerate &#10;</tspan><tspan x="543.559" y="107.361">300+ &#10;</tspan><tspan x="524.905" y="138.361">Startups:</tspan></text>
                        {/* <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="20" letterSpacing="0em"><tspan x="690" y="50.3359">Our goal is to incubate and launch over &#10;</tspan><tspan x="690" y="81.3359">300 tech startups, equipping them with &#10;</tspan><tspan x="690" y="112.336">the resources, guidance, and support &#10;</tspan><tspan x="690" y="143.336">necessary to achieve remarkable &#10;</tspan><tspan x="690" y="174.336">success.</tspan></text> */}
                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="45" fontWeight="bold" letterSpacing="0em"><tspan x="190" y="322.381">Year &#10;</tspan><tspan x="190" y="370.381">Goals</tspan></text>
                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Roboto" fontSize="128" fontWeight="bold" letterSpacing="0em"><tspan x="119" y="372.75">1</tspan></text>
                        <defs>
                            <filter id="filter0_d_2005_45" x="609" y="227" width="207" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="4" dy="7" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_45" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_45" result="shape" />
                            </filter>
                            <filter id="filter1_d_2005_45" x="473" y="455" width="207" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="4" dy="7" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_45" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_45" result="shape" />
                            </filter>
                            <filter id="filter2_d_2005_45" x="473" y="0" width="207" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="4" dy="7" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_45" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_45" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_2005_45" x1="215" y1="161" x2="215" y2="494" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#BD91F8" />
                                <stop offset="1" stopColor="#9649FD" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2005_45" x1="367.869" y1="469.785" x2="482" y2="531.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9649FD" />
                                <stop offset="1" stopColor="#BD91F8" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2005_45" x1="366.497" y1="187.54" x2="487.5" y2="125" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9649FD" />
                                <stop offset="1" stopColor="#BD91F8" />
                            </linearGradient>

                        </defs>
                        <foreignObject x="690" y="25.3359" height="150" width="350px">
                            <div className="forObjTxt">
                                Our goal is to incubate and launch over 300 tech startups, equipping them with the resources, guidance, and support necessary to achieve remarkable success.
                            </div>
                        </foreignObject>
                        <foreignObject x="826" y="252" height="150" width="350px">
                            <div className="forObjTxt">By embedding AITO into all member businesses, we aim to cultivate a thriving digital economy that drives innovation, collaboration, and mutual growth. </div>
                        </foreignObject>

                        <foreignObject x="690" y="480.336" height="150" width="350px">
                            <div className='forObjTxt'>Establish key partnerships with leading tech companies, financial institutions, and global markets to support our startups’ expansion and enhance their market reach.</div>
                        </foreignObject>
                    </svg>
                </div>
                <div className='d-xl-none'>
                    <div className='text-center mx-3 mb-4'>
                        <img src={require('../assets/images/nexusGoal.svg').default} alt='nexusGoal' className='img-fluid' />
                    </div>
                    <div className='goalSetList'>
                        {
                            goaldataList.map((item, i) => (
                                <div className='goalbx'>
                                    <div className='title'>{item.title}</div>
                                    <div className='desc'>{item.text}</div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}