import React from 'react'
import CardContactInfo from './CardContactInfo'

export default function About() {
  return (
    <div className="about">
        
        <CardContactInfo 
          title={'contact information'}
          info={
            {
              phone: '+84 344 220 541',
              address: 'Hoa Hai, Da Nang City, 55200',
              email: 'kimthienlang@gmail.com',
              site: 'https://www.facebook.com/profile.php?id=100093984067173',
            }
          }
        />
        <CardContactInfo 
          title={'basic information'}
          info={
            {
              birthday: 'January 01, 2003',
              Gender: 'Male'
            }
          }
        />
    </div>
  )
}
