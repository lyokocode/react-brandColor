import React, { useContext } from 'react'
import "./search.scss"
import ManinContext from '../ManinContext/ManinContext'
import { GrSearch, GrClose } from 'react-icons/gr'


const Search = () => {

    const { search, setSearch } = useContext(ManinContext)

    return (
        <div className='search'>
            <div className='icon'>
                <GrSearch />
            </div>
            <input placeholder='Search brands' value={search} onChange={(e) => setSearch(e.target.value)} />
            {search && <GrClose onClick={() => setSearch('')} className='closeIcon' />}
        </div>
    )
}

export default Search

// onChange={(e) => setSearch(e.target.value)}