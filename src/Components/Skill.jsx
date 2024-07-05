import React from 'react'

const skills = [
    'Algorithm', 'React', 'Web-Design', 
    'Front-end', 'GitHub', 'HTML, CSS, JS'
]

export default function Skill() {
    return (
        <ul className='skills'>
            {skills.map((skill, idx) => 
                <li key={idx}>{skill}</li>    
            )}
        </ul>
    )
}
