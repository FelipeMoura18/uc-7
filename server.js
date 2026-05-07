// Estamos importando a função createServer do módulo http do Node
const{createServer} = require('node:http')
 
 
const hostname ="127.0.0.1";//endereço dop servidor
 
const port = 3000; //porta onde o servidor vai roda
 
 
//Criando o servidor
const server = createServer((req, res)=>{
    res.statusCode=200;//ok
 
    //Define o tipo de conteúdo da resposta
    //Aqui estamos dizendo que é um texto simples
     
    res.setHeader('content-type','text/plain');
 
    res.end("hello, node!");
 
});
 
 
// faz o servidor "escutar" na porta e no endereço que definimos.
//Quando o servidor iniciar, executa essa função.
 
server.listen(port, hostname, ()=>{
console.log(`server running at http://${hostname}:${port}/`);
 
});
