import React from 'react';

const SuccessfullPurchase = () => {
  let a = 3;
  let b = 3;

  return (
    <section className="italic font-semibold text-center text-2xl pt-4 pb-4 rounded text-slate-100 bg-green-600 m-5">
      Successfull Purchase
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="sum">{a + b}</span>
    </section>
  );
};

export default SuccessfullPurchase;
