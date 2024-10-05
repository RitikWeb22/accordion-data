import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    // State to manage the active/inactive state of the accordion
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="main-card">
    
            <div className='accordion-card'>
            {/* Accordion title bar */}
            <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                {/* Toggle icon based on active state */}
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {/* Accordion content */}
            <div className={`content ${isActive ? 'active' : ''}`}>
                {content}
            </div>
        </div>
        </div>
    )
}

export default Accordion