import React from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'
import Header from './Header'

export default function Board() {
  return (
    <div className="main-board">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  )
}
