import React,{useState,useEffect} from 'react'
import Search from '../Components/Search'
import Card from '../Components/Card'
import {getData} from '../Helpers/querys'
import { FcLike } from "react-icons/fc"
import {handleFavs, checkLS, getFavs} from '../Helpers/favs'
const Home = () => {

  const [search,setSearch] = useState('affenpinscher')
  const [data, setData] = useState([])
  const [fav, setFav] = useState([])
  const [like, setLike] = useState([])
  const handleSearch = (ref) => setSearch(ref.current.value)


  const updateFavs= ()=> {
    const res = getFavs()
    setFav(res)
  }

  useEffect(() => {
    updateFavs()
  },[setFav])

  useEffect(()=>{
    getData(search)
      .then(res=> res.status && setData(res.res))
      .catch(err => setData([]))
  },[search])


  return (
    <>
      <header className="search">
        <h1 className="title">Razas de perros</h1>
        <Search fn={handleSearch} placeholder={search}/>
      </header>
      <section className="section-main">
        {data.length > 0
          ? data?.map( (dog,index) => <Card key={index} url={dog} raza={search} style="card" handle={handleFavs} check={checkLS} updateFavs={updateFavs} test={like}/>)
          : <h3 className="text-center">No hay resultados</h3>
        }
      </section>
      <section className="section-fav">
        <div className="header-fav">
          <FcLike className="icon-fav" />
          <h2>Favoritos</h2>
        </div>
        <div className="container-fav">
          {fav.length > 0
            ? fav?.map( (dog,index) => <Card key={index} url={dog} raza={search} handle={handleFavs} check={checkLS} updateFavs={updateFavs} style="card-fav"/>)
            : <h3 className="mx-auto">No hay resultados</h3>
          }
        </div>
      </section>
    </>
  )
}

export default Home