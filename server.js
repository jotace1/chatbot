const axios = require('axios').default
const express = require('express')
const app = express()
const bodyParser = require ('body-parser')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
let msg = []
app.post('/add',(req,res)=>{
   console.log(req.body.valor)
   txt = req.body.valor
   
   if(txt == "Olá" || txt == "ola" || txt == "oi" || txt == "Oi" || txt == "Eai" || txt == "eai" || txt == "Ou" || txt == "ou" || txt == "fala"){
      msg += `<strong>You send:</strong>${txt} <br> <br> <strong>BOT:</strong>Olá senhor(a), como vai? Espero que tudo bem!! <br><br>`
      res.send(msg)
   }else if(txt == "tudo bem?" || txt == "td bem?" || txt == "como vai?" || txt == "td certo?" || txt == "bem e vc?" || txt == "tudo bem e com vc?" || txt == "vc ta bem?" || txt == "mais ou menos e vc?" || txt == "fala ai e vc?"){
      msg += `<strong>You send:</strong>${txt} <br> <br> <strong>BOT:</strong>Não estou em um ótimo dia hoje, espero que seu dia esteja indo melhor que o meu!! rsrs <br><br>`
      res.send(msg)
   
}else if(txt == "julia"){
   msg += `<strong>You send:</strong>${txt} <br> <br> <strong>BOT:</strong>Julia é a mais chata que tem não existe ngm chata igual a ela pipipipopopo <br><br>`
   res.send(msg)

}})


app.listen(8000, ()=>console.log('Executando servidor...'))
