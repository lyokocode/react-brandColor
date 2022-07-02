import { useEffect, useState } from "react";
import brandsData from "./brands.json"
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import ManinContext from "./components/ManinContext/ManinContext";
import Copied from "./components/Copied";

function App() {

  const brandsArray = []
  Object.keys(brandsData).map(key => {
    brandsArray.push(brandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(setBrands);
  }, [selectedBrands]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())))
    // || setBrands(brandsArray.filter(brand => brand.colors.includes(search)))

  }, [search])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }
  return (
    <>
      <ManinContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </ManinContext.Provider>
    </>
  );
}

export default App;
