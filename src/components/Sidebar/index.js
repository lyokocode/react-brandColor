import React, { useState } from 'react'
import './sidebar.scss';
import Modal from "react-modal"
import { GrClose } from "react-icons/gr"

const Sidebar = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const toggleModal = () => {
        setmodalIsOpen(!modalIsOpen)
    }

    return (

        <>
            <aside className='sidebar'>
                <div className='logo'>
                    <img src='./logo.jpg' />
                    <a>  Brand<b>Colors</b></a>
                </div>
                <div className='description'>
                    The biggest collection of official brand color codes around. Curated by <a>@brandcolors</a> and friends.
                </div>
                <nav className='menu'>
                    <ul>
                        <li>
                            <a>
                                Suggest a Brand
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
                <div href="https://brandcolors.net" className='interaction'>
                    <div className='interaction-cont'>BrandColors + <b>DesignBombs</b></div>
                    <p> Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress.</p>
                </div>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <button className='modal-close-btn' onClick={toggleModal}>
                    <GrClose />
                </button>
                <h3>About BrandColors</h3>
                <p>
                    BrandColors was created by <a><b>DesignBombs</b></a>. The goal was to create a helpful reference for the brand color codes that are needed most often.
                </p>
                <p>
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.
                </p>
            </Modal>
        </>

    )
}

export default Sidebar