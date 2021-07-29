const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();


app.use(cors());/*Usar o Cors, para conversar entre Front e Back */

app.get('/', async (req, res) => {
    /*Duas formas de consumir o dado com o AXIOS , 
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const data = response.data

    OU usar a desestruturação do Javascript
    Obs: Axios e fetch possuem a diferença que o Axios tem o data dentro do response,
    Já no Fetch temos que tratar o dado para json EX:

    const response = await fetch('http://localhost:3333/')

        const data = await response.json()
        
    */
   try {
       const { data } = await axios('https://jsonplaceholder.typicode.com/users')

       console.log("Salve get")
       return res.json(data)
   } catch (error) {
       console.error(error)
   }
    
})
/*Posso escrever esse get dessa forma antiga tmb {    app.get('/', function(req,res){   }   } */
    
app.listen(3333, () => {
    console.log('Salve')
})