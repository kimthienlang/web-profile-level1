import React from 'react'

const style = {
    cardWork: {
        fontFamily: 'Roboto',
        margin: '20px 0px 30px 0px',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h3: {
        marginBottom: '5px',
        color: '#586875',
    }
    ,
    span: {
        backgroundColor: '#e3f2fd',
        height: '25px',
        color: '#42a5f4',
        fontSize: '14px',
        fontWeight: '800',
        letterSpacing: '1px',
        padding: '5px 10px 5px 10px',
        borderRadius: '5px'
    },
    p: {
        color: '#c7c7c7',
        fontSize: '14px',
    }
}

export default function CardWork({
    nameCompany = 'Spotify New York', 
    location = '555 Mateo St, Los Angeles, CA 90013, US', 
    during =  '2020 - 2024',
    level = 'Primary',
}) {
  return (
    <div className='card-work' style={style.cardWork}>
        <div className='title' style={style.title}>
            <h3 style={style.h3}>{nameCompany}</h3>
            <span style={style.span}>{level}</span>
        </div>
        <p style={style.p}>{location}</p>
        <p style={style.p}>{during}</p>
    </div>
  )
}
