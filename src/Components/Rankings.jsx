import React from 'react'
import RankingsOptions from './RankingsOptions'

export default function Rankings() {
  const renderDivs = () => {
    const divs = [];
    for (let i = 0; i < 4; i++) {
      divs.push(<div key={Math.random()} className='star'><i className="fa-solid fa-star"></i></div>);
    }
    divs.push(<div key={Math.random()} className='star'><i className="fa-regular fa-star"></i></div>);
    return divs;
  };
  return (
    <div className='rankings'>
        <div className='title'>RANKINGS</div>
        <div className='rate'>
            <div className='point'>8,6</div>
            {renderDivs()}
        </div>
        <RankingsOptions />
    </div>
  )
}
