import React from 'react';
import { AirdropSection } from '../components/ADcomingsoon';

export const InnerPageLayout = ({children }) => {
    return (
        <>
         <div className='mainContent'>
             <div className='innerpage'>
                {children}
             </div>
             <section className='secWhite mb-5'>
            <div className="container">
                <AirdropSection />
            </div>
            </section> 
         </div>
        </>
    )
}