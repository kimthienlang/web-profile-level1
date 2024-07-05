import React from 'react'
import '../css/UserInfo.css'

export default function UserInfo({fullName, career, location}) {
  function handleClickLocation() {
    const url = 'https://www.google.com/maps/place/%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0721196,107.4186095,9z/data=!3m1!4b1!4m6!3m5!1s0x314219c792252a13:0x1df0cb4b86727e06!8m2!3d16.0544563!4d108.0717219!16zL20vMDI2eXFm?hl=vi-VN&entry=ttu'
    window.open(url, '_blank')
  }
  
  return (
    <div className='user-container'>
        <div className="user-info">
            <div>
                <div className="user-name">{fullName}</div>
                <div className="user-job">{career}</div>
            </div>
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span onClick={handleClickLocation}>{location}</span>
            </div>
        </div>
        <div className="bookmark">
          <i className="fa-solid fa-bookmark"></i>
          <span>Bookmark</span>
        </div>
    </div>
  )
}
