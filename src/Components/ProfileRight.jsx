import React from 'react'
import UserInfo from './UserInfo'
import Rankings from './Rankings'
import Divider from './Divider'
import '../css/ProfileRight.css'
import About from './About'

export default function ProfileRight() {
  return (
    <div className="profile-right">
        <UserInfo 
          fullName={'Le Anh Tuan'}
          location={'Da Nang City, DNC'}
          career={'Software Engineer'}
        />
        <Rankings />
        <Divider title=''/>
        <About />
    </div>
  )
}
