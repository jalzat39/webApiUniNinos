const express = require('express')
const app = express()

//Se dan permisos origin para sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Middleware para servir archivos estaticos
app.use(express.static('../webApiUniNinos-SPA/dist/webApiUniNinos-SPA'));
//Un get solicitando '/' directory
app.get ('/', (requests, response) => {

response.send('Hello World!, from node!');
response.render(index);

})

//Diciendole a la app el puerto donde va a escuchar.
app.listen(5000, () =>{

    console.log('Works!')

})