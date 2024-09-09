import React from 'react';
import { NewsCard } from './newscard';
import newscardImg from '../assets/images/newscardImg.png';

const newscardlist = [
    {
        img: newscardImg,
        title: 'Latest publication on the website'
    },
    {
        img: newscardImg,
        title: 'Latest publication on the website 2'
    },
    {
        img: newscardImg,
        title: 'Latest publication on the website 3'
    },
]

export const SimilarPost = () => {
    return(
        <section className='sec2 blog-lightbgsection mb-5'>
                <div className='container'>
                    <div className="row mb-3">
                        <div className="col-lg-12">
                            <div className="b-secTitle text-center">Similar posts</div>
                        </div>
                    </div>
                    <div className='row'>
                        {newscardlist.map((item)=> (
                            <div className='col-lg-4 col-md-4 col-sm-6'>
                                <NewsCard NcardImg={item.img} NcardTitle={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
    </section>
    )
}