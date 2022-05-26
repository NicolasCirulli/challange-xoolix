
export const handleFavs = (fav) =>{
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if(!favs.includes(fav)){
        favs.push(fav)
        localStorage.setItem('favs', JSON.stringify(favs))
        return true
    }else{
        favs.splice(favs.indexOf(fav), 1);
        localStorage.setItem('favs', JSON.stringify(favs))
        return false
    }
}
export const checkLS = (fav) =>{
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if(favs.includes(fav)){
        return true;
    }else{
        return false;
    }
}
export const getFavs = () =>{
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    return favs;
}