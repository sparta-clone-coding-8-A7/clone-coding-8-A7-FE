import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_HOST;
// axios.defaults.baseURL = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"

let pokemon = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";

export const getTest = async () => {
  try {
    const resp = await axios.get(pokemon, {});
    // console.log(resp.data)
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const getCard = async () => {
//     let lastpostId = 1
//     let size = 1
//     try{
//         const resp = await axios.get(`/api/jobPost?lastpostId=${lastpostId}&size=${size}`,{
//     })
//     console.log(resp.data)
//     }catch(error){
//         console.log(error);
//     }
// }
