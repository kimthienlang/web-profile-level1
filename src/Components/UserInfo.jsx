import React from 'react'
import '../css/UserInfo.css'

export default function UserInfo() {
  return (
    <div className='user-container'>
        <div className="user-info">
            <div>
                <div className="user-name">Jeremy Rose</div>
                <div className="user-job">Product Designer</div>
            </div>
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span>New York, NY</span>
            </div>
        </div>
        <div className="bookmark">
          <i className="fa-solid fa-bookmark"></i>
          <span>Bookmark</span>
        </div>
    </div>
  )
}
