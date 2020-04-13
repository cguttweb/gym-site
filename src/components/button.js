import React from 'react'

const button = (props) => {
    return (
        <div style={{ clear: `both`, margin: `0 auto`, textAlign: `center` }}>
            <button style={{ backgroundColor: `#663399`, borderRadius: `10px`, color: `#ffffff`, margin: `1rem`, padding: `0.5rem` }}>{props.buttonText}</button>
        </div>
    )
}

export default button
