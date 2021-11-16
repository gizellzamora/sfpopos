import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'
import './POPOSList.css'

function POPOSList() {

  const spaces = data.map((s,index) => {
    return (
      <div className="POPOSList">
        <POPOSSpace
          id={index}
          key={s.title}
          name={s.title}
          address={s.address}
          image={s.images[0]}
          hours={s.hours}
        />
      </div>
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList
