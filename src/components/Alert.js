import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alertText && <div className={`alert alert-${props.alertText.type} position-absolute`} style={{width:"99vw", display:"flex", justifyContent:"center"}} role="alert">
            <strong>{capitalize(props.alertText.type)}</strong>: {props.alertText.message}
        </div>
    )
}
