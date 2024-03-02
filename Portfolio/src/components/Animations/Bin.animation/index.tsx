import React from 'react';


type TBinAnimation = {
  children: string;
}
function Index({ children }: Readonly<TBinAnimation>) {
  const res = children.split('').map((el) => el.charCodeAt(0).toString(2));

  return (
    <div>{ res.map((el, index) => <span>{ el }</span>) }</div>
  );
}

export default Index;
