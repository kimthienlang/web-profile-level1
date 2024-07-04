import React from 'react'

const style = {
    divider: {
        display: 'flex',
        margin: '10px 0px 10px 0px'
    },
    p: {
        color: '#c4c4c4',
        fontFamily: 'monospace',
        fontSize: '10px',
        fontWeight: '1000',
        letterSpacing: '1px',
    },
    dividerDiv : {
        position: 'relative',
        borderBottom: '1px solid #c4c4c4', 
        flex: '1',
        margin: '0px 10px 0px 5px',
        top: '-4px'
    }
}

export default function Divider({title = 'settings'}) {
  return (
    <div className="divider" style={style.divider}>
        <p style={style.p}>{title.toUpperCase()}</p>
        <div style={style.dividerDiv}></div>
    </div>
  )
}
