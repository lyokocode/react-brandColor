import React from 'react'
import "./copied.scss"
import { getContrastYIQ } from '../helpers'

const Copied = ({ color }) => {
    return (
        <div className='copied' style={{ "--bgColor": `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
            Copied to #{color} clipboard
        </div>
    )
}

export default Copied