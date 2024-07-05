import React from 'react'
import '../css/CardContactInfo.css'

export default function CardContactInfo({ title, info }) {
    const list = []
    for (let key in info) 
    {
        let name = key
        name = name[0].toUpperCase() + name.slice(1)
        list.push(
            <div className="row-ci" key={Math.random()}>
                <div className="name-ci">{name}:</div>
                <div className="value-ci">{info[key]}</div>
            </div>
        )
    }
    return (
        <div className="contact-info">
            <p className="ci-title">{title.toUpperCase()}</p>
            {list}
        </div>
    )
}
