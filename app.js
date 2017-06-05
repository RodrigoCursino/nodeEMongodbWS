/**
 * Created by Rodrigo on 02/06/2017.
 */
    // importando modulos de config da app rotas etc
    var app = require('./app_config');

   //importando meu controller
   var userController = require('./controller/userController');

// validação segurança
var validador = require ('validator');


app.get('/users', function (req, res) {
    userController.list(function(resp){
        // retorno do meu callback
        res.json(resp);
    });
});

app.get('/users/:id', function (req, res) {
    // validado uma requisção contra ataques trim contra espaços em branco e escape contra ataques sql
    var id = validador.trim(validador.escape(req.param('id')));
      userController.user(id,function(resp){
          // retorno do meu callback
          res.json(resp);
      });
});

app.post('/users', function (req, res) {
    // visualizar minha requisição;
    //res.json(req.body);

    var fullname = validador.trim(validador.escape(req.param('fullname')));
    var email = validador.trim(validador.escape(req.param('email')));
    var password = validador.trim(validador.escape(req.param('password')));

    userController.save(fullname,email,password,function(resp){
        // retorno do meu callback
        res.json(resp);
    });
});

app.put('/users/:id', function (req, res) {

    var id = validador.trim(validador.escape(req.param('id')));
    var fullname = validador.trim(validador.escape(req.param('fullname')));
    var email = validador.trim(validador.escape(req.param('email')));
    var password = validador.trim(validador.escape(req.param('password')));

    userController.update(id,fullname,email,password,function(resp){
        // retorno do meu callback
        res.json(resp);
    });
});


app.delete('/users/:id', function (req, res) {
    var id = validador.trim(validador.escape(req.param('id')));
    userController.delete(id,function(resp){
        // retorno do meu callback
        res.json(resp);
    });

});