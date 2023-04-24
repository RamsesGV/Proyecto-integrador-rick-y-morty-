//const axios = require("axios")


//const getCharById = (res,id) => { 
//axios(`https://rickandmortyapi.com/api/character/${id}`)
//.then(response => response.data)
//.then(({name,gender,species,origin,image,status}) => { 
//const character = { 
    //id,
    //name,
    //gender,
    //species,
    //origin,
    //status,
    //image
   // }
   //// return res
    //.writeHead(200, {"content-type": "application/json"})
    //.end(JSON.stringify(character))
//}) 
//.catch(error => { 
    //return res
    //.writeHead(500,{"content-type": "text/plain"})
    //.end(error.message)
//})

//}

//module.exports = { getCharById }



/******************************************************************** */



//const axios = require('axios')
//const URL = 'https://rickandmortyapi.com/api/character/' 

//const getCharById = (req,res) => { 

//const {id} = req.params

//axios 
//.get(`${URL}/character/${id}`)
//.then(({data}) => {
    //if(data)  { 
    //return res.status(200).json({ 
       // id: data.id,
       // status: data.status,
       // name: data.name,
      //  species: data.species,
       // origin: data.origin,
       // image: data.image,
       // gender: data.gender,
   // })
//} else { 
//return res.status(404).send('Not found')    
//}
//})
//.catch( (error) => { 
   // return res.status(500).json(error.message)
//})
//}

const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios')




const getCharById = (req,res) => { 
const {id} = req.params 


axios(`${URL}/${id}`)
.then(res => res.data)
.then(({status,name,species,origin,image,gender}) => { 
    if(name){
        const character = { 
            id,
            name,
            species,
            origin,
            image,
            gender,
            status,
        }
        return res.status(200).json(character)
        }
        return res.status(404).send('Not found')
    })
        .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
};
















module.exports = {getCharById}