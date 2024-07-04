import React from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'

export default function Board() {
  return (
    <div className="main-board">
      <div className="top">

      </div>
      <div className="bottom">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  )
}
