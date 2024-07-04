import React from 'react'

const skills = ['Branding', 'UI/UX', 'Web-Design', 'Packaging', 'Print & Editorial']

export default function Skill() {
    return (
        <ul className='skills'>
            {skills.map((skill, idx) => 
                <li key={idx}>{skill}</li>    
            )}
        </ul>
    )
}
