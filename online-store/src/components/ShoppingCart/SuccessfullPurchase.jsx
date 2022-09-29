import React from 'react';

const SuccessfullPurchase = ({data}) => {

  return (
    <div className="italic font-semibold text-center text-2xl text-slate-100 bg-green-600 m-5">
      Successful Purchase
      <p>
        {data}
      </p>
    </div>
  );
};

export default SuccessfullPurchase;
