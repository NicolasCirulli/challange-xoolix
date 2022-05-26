import axios from "axios";

const random = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);


export const getData = async (search) => {
  const URL = `https://dog.ceo/api/breed/${search.toLowerCase()}/images`;
  try {
    const res = await axios.get(URL);
    if(res.data.status === 'success' && res.data.message.length > 0){
      const cont = res.data.message.length - 1 >= 10 ? 10 : res.data.message.length -1;
      const dataAux = new Array(cont).fill('').map(dog => res.data.message[random(0, res.data.message.length - 1)]);
      return {status: true, res: dataAux};
    }else{
      return {status: false, res: null};
    }
  } catch (e) {console.log('BAD_REQUEST');}
};