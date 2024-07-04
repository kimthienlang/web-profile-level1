import React from 'react'
import Divider from './Divider'
import CardWork from './CardWork'
import Skill from './Skill'
import '../css/ProfileLeft.css'

const imagePth = ""

export default function ProfileLeft() {
  return (
    <div className='profile-left'>
        <div className="image"></div>
        <Divider title='work' />
        <CardWork />
        <CardWork 
          nameCompany='Metropolitan Museum'
          location='New York, 525 E 68th Street'
          during='2019-2023'  
          level='Secondary'
        />
        <Divider title='skills' />
        <Skill />
    </div>
  )
}
