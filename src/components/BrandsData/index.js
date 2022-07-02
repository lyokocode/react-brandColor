import React, { useContext } from 'react'
import "./brandsData.scss"
import Brand from '../Brand'
import ManinContext from '../ManinContext/ManinContext'


const BrandsData = ({ getContrastYIQ }) => {

    const { brands } = useContext(ManinContext)
    return (
        <div>
            {brands.map((brand, index) => (
                <Brand getContrastYIQ={getContrastYIQ} key={index} brand={brand} />
            ))}
        </div>
    )
}

export default BrandsData