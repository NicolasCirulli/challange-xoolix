import React,{useState,useEffect} from 'react'
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
const Card = ({url,raza,style,handle,check,updateFavs}) => {

  const handleLike = () =>{
    handle(url)
    updateFavs()
  }
  return (
    <article className={style}>
      <img src={url} alt={`imagen de ${raza}`} className="card-img" />
      {
        !check(url)
        ? <FcLikePlaceholder className="card-icon" onClick={handleLike}/>
        : <FcLike className="card-icon" onClick={handleLike}/>
      }
    </article>
  )
}

export default Card