import React from 'react'

const styleCircle1 = {
    backgroundColor:  '#75cff1',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'fixed',
    right: '100px',
    top: '-50px',
    zIndex: '-10',
}

const styleCircle2 = {
    backgroundColor:  '#218ffe',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    display: 'inline-block',
    position: 'fixed',
    right: '-70px',
    bottom: '-50px',
    zIndex: '-10',
}

export default function Background() {
    
    return (
        <>
            <div style={styleCircle1}></div>
            <div style={styleCircle2}></div>
        </>
    )
}
