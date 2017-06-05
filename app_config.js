/**
 * Created by Rodrigo on 04/06/2017.
 */
// rotas
var express = require ('express');

// configurando header garantindo a seguran�a e que as requisi��es s� venham de um certo dominio
var allowCors = function (req,res,next) {
    res.header('Access-Control-Allow-Origin','127.0.0.1:5000');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

// vari�vel app deixando global
var  app = module.exports = express();

// convertendo para json
var bodyParser = require ('body-parser');

// porta localhost:5000
app.listen(5000);


app.use(allowCors);

// convers�o para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
