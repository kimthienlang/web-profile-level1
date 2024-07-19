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
        <CardWork 
          nameCompany='FPT University'
          location='FPT Da Nang Urban Area, 
          Hoa Hai Ward, Ngu Hanh Son District, 
          Da Nang City'
          during='2022 - Now'
          level='Secondary'
        />
        <CardWork 
          nameCompany='Freelance'
          location='Ngu Hanh Son District, 
          Da Nang City'
          
        />
        <Divider title='skills' />
        <Skill />
    </div>
  )
}
