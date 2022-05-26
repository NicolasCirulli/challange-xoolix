import React,{useRef} from 'react'
import { BsSearch } from "react-icons/bs";

const Search = ({fn,placeholder}) => {
  const referencia = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    fn(referencia)
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="form">
      <input type="text" ref={referencia} placeholder={placeholder}/>
      <div className="btn-search">
        <BsSearch className="icon-search"/>
        <input type="submit" value="Buscar"/> 
      </div>
    </form>
    </>
  )
}

export default Search