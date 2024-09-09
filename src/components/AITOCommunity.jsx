import React from 'react';
import { Link } from 'react-router-dom';

export const AITOcommunity = () => {
    return(
        <>
        <div className="communityWizard mb-4">
            <Link to={''}>
                <img src={require('../assets/images/facebook.png')} alt='facebook' />
            </Link>
            <Link to={''}>
                <img src={require('../assets/images/discord.png')} alt='discord' />
            </Link>
            <Link to={''}>
                <img src={require('../assets/images/telegram.png')} alt='telegram' />
            </Link>
        </div>
        <div className='text-center'>
            <Link to={''} className='fs-20 fw-700 text-primary'>Join $AITO community</Link>
        </div>
        </>
    )
}