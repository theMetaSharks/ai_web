import React from 'react';
import { InnerPageLayout } from '../../layout/innderpageLayout';
import { SimilarPost } from '../../components/similarPost';
import liveintroduction from '../../assets/images/live-introduction.png';
import { ArrowCircleLeft } from '../../components/circle-arrow-left';
import { ArrowCircleRight } from '../../components/circle-arrow-right';

export const LiveIntroduction = () => {
    return (
        <InnerPageLayout>
            <div className='pageContent py-5'>
                <div className='container'>
                    <div className='bannerContent mb-5'>
                        <div className='row align-items-end form-row'>
                            <div className="col-lg-7">
                                <div className='hmrbannerCnt mt-lg-5'>
                                    <div className='bannerSmTxt'>Events</div>
                                    <h1 className='bannerTit'>Join us LIVE: Meet $AITO Team & Investors</h1>
                                    <p className='bannerPara mb-4'>
                                        AI TOREDA team is going to conduct a live session for potential coin investors. Goal of this live session is to have a public meetup of AITO team with potential clients and have an introduction followed by a Q/A session about AI TOREDA.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='text-center'>
                                    <img src={liveintroduction} alt='liveintroduction' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='mycard'>
                                <div className='cmspara'>
                                    <p>We’re excited to announce a live session where the AI TOREDA team will connect directly with potential investors. This event is a unique opportunity to meet the minds behind $AITO and get a closer look at what we’re building.</p>
                                </div>
                                <div className='cmstitle'>What to Expect:</div>
                                <div className='cmspara'>
                                    <ul>
                                        <li>Introduction: The session will kick off with a brief introduction of the AI TOREDA team, who will share insights into our journey, mission, and vision for $AITO.</li>
                                        <li>Q&A Session: After the introduction, we’ll open the floor to your questions. This is your chance to ask about AI TOREDA, the $AITO token, and how we’re positioning ourselves in the market.</li>
                                    </ul>
                                </div>
                                <div className='cmstitle'>Why should you attend this event?</div>
                                <div className='cmspara'>
                                    <p>Why Attend? If you’re considering investing in $AITO, this is the perfect opportunity to gather information directly from the source. Our team is eager to engage with you, address your queries, and build a transparent relationship from the start.</p>
                                </div>
                                <div className='cmstitle'>When is this event going to start?</div>
                                <div className='cmspara'>
                                    <p>Details about the date, time, and how to join the session will be provided soon. Stay tuned, and don’t miss out on this chance to connect with us live. </p>                                    
                                    <p>For more information about the event follow us on our Telegram/Discord or social media for regular updates of event like this and others.</p>
                                </div>

                            </div>
                            <div className='row mb-5'>
                                <div className='col-sm-6 '>
                                <button className='btn btnIcon sliderArrowIcon d-flex align-items-center text-left mb-4'>
                                    <ArrowCircleLeft />
                                    <div className='ml-3'>
                                        <div className='fs-20 fw-700'>Previous Post</div>
                                        <div className='fs-20 fw-400'>Post title of previous post is displayed here</div>
                                    </div>
                                  </button>
                                </div>
                                <div className='col-sm-6 text-right'>
                                <button className='btn btnIcon sliderArrowIcon d-inline-flex align-items-center text-right mb-4'>                                
                                <div className='mr-3'>
                                    <div className='fs-20 fw-700'>Next Post</div>
                                    <div className='fs-20 fw-400'>Post title of Next post is displayed here</div>
                                </div>
                                <ArrowCircleRight />
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <div className="mt-5">
            <SimilarPost />
        </div>
        </InnerPageLayout>
    )
}