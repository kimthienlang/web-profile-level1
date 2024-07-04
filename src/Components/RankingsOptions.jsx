import React from 'react'
import '../css/Rankings.css'

const style = {
    icon: {
        margin: '0px 8px 0px 0px'
    }
}

export default function RankingsOptions() {
  return (
    <div className="rankings-option">
        <div className="option">
            <i style={style.icon} className="fa-solid fa-message"></i>Send message
        </div>
        <div className="option">
            <i style={style.icon} className="fa-solid fa-check"></i>Contacts
        </div>
        <div className="option">
            <i style={style.icon} className="fa-solid fa-flag"></i>Report user
        </div>
    </div>
  )
}
