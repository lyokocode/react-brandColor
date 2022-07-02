import React, { useContext, useEffect, useState } from 'react'
import "./download.scss"
import ManinContext from '../ManinContext/ManinContext'
import { MdLink, MdClose, MdDownload } from "react-icons/md"

const Download = () => {

    const { selectedBrands, brands, setSelectedBrands } = useContext(ManinContext)

    const [downloadUrl, setDownloadUrl] = useState()
    const [cssMethod, setCssMethod] = useState("css")

    const getLink = () => {
        selectedBrands && prompt("Here's the URL to share", `http://localhost:3000/collection/${selectedBrands.join(',')}`)
    }

    const changeCSSMethod = () => {

    }

    useEffect(() => {
        if (selectedBrands.length > 1) {

            let output = ""

            switch (cssMethod) {

                case "css":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `--${slug}-{key}: #${color}`
                        })
                    })
                    break;

                case "scss":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-{key}: #${color}`
                        })
                    })
                    break;

                case "less":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `@${slug}-{key}: #${color}`
                        })
                    })
                    break;
            }


            const blob = new Blob([output])
            const url = (URL.createObjectURL(blob))
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    }, [selectedBrands, cssMethod])

    return (
        <div className='download'>

            <div className='actions'>
                <a download={`brands.${cssMethod}`} href={downloadUrl}><MdDownload /></a>
                {downloadUrl &&
                    <select onChange={(e) => setCssMethod(e.target.value)}>
                        <option value="css">css</option>
                        <option value="scss">scss</option>
                        <option value="less">less</option>
                    </select>}
                <button><MdLink onClick={getLink} /></button>
                <button onClick={() => setSelectedBrands('')}><MdClose /></button>
            </div>
            <div className='brands-lenght'>
                {selectedBrands.length} brands collected
            </div>

            <div className='all-brands-icon'>
                <MdDownload />
            </div>
            <span>
                All Brands

            </span>

        </div>
    )
}

export default Download