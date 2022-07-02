import React, { useContext } from 'react'
import Search from '../Search'
import Download from '../Download'
import BrandsData from '../BrandsData'
import ManinContext from '../ManinContext/ManinContext'
import "./content.scss"
import { getContrastYIQ } from '../helpers'

const Content = () => {

    const { selectedBrands } = useContext(ManinContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
                <Download />

            </header>
            <section className='brands'>
                <BrandsData getContrastYIQ={getContrastYIQ} />
            </section>
        </main>
    )
}

export default Content