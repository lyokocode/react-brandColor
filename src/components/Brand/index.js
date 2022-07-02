import React, { useContext, useState } from 'react'
import "./brand.scss"
import ManinContext from '../ManinContext/ManinContext'
import { MdOutlineContentCopy } from "react-icons/md"
import Clipboard from 'react-clipboard.js';

const Brand = ({ brand, getContrastYIQ }) => {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(ManinContext)
    const [icon, setIcon] = useState(false)

    const setColor = (color) => {
        setCopied(color)
    }
    const toogleHover = () => {
        setIcon(true)
    }

    const toogleLeave = () => {
        setIcon(false)
    }

    const toogleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? "selected" : ""}`}>
            <div className='brand-title'>
                <h4 onClick={toogleSelected}>{brand.title}</h4>
            </div>
            <div className='brand-colors'>
                {brand.colors.map(color => (
                    <Clipboard data-clipboard-text={color} component="div" onSuccess={() => setColor(color)} >
                        <span onMouseEnter={toogleHover} onMouseLeave={toogleLeave} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
                            {icon && <MdOutlineContentCopy />}
                            {toogleSelected && icon ? `#${color}` : ""}
                        </span>
                    </Clipboard>
                ))}
            </div>
        </div >
    )
}

export default Brand