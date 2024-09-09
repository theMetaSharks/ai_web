import React from 'react';

export const BlockchainDetailRow = () => {
  return (
    <div className="singleRowScroller">
      <div className="bcDetailsMain">
        <div className="row flex-nowrap no-gutters">
          <div className="col-xl col-auto">
            <div className="pr-lg-5 pr-4 mr-4 bcDetails text-center text-xl-left" style={{ fontSize: '24px' }}>
              Blockchain:{' '}
              <span className="value" style={{ fontSize: '22px' }}>
                SOLONA
              </span>
            </div>
          </div>
          <div className="col-auto text-center">
            <div className="bordercenter bcDetails px-lg-5 px-4 mx-n3" style={{ fontSize: '24px' }}>
              Price:{' '}
              <span className="value" style={{ fontSize: '22px' }}>
                0.0000 SOL
              </span>{' '}
              <span className="smalltxt" style={{ fontSize: '12px' }}>
                ~ 0.0000 USDT
              </span>
            </div>
          </div>
          <div className="col-xl col-auto text-right ml-4">
            <div className="bcDetails" style={{ fontSize: '24px' }}>
              Token supply:{' '}
              <span className="value" style={{ fontSize: '22px' }}>
                500,000,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
