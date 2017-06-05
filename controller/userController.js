/**
 * Created by Rodrigo on 04/06/2017.
 */
// importando modulos do banco de dados
//*acrescentar na db na frente do meu model User
var db = require('../db_config');

exports.list = function(callback){
    db.User.find({},function(error,users){

        if (error) {
            callback({error:'Não foi possivél retorner uma lista de usuários'});
        } else {
            callback(users);
        }

    });
};
exports.update = function(id,fullname,email,password,callback){

    db.User.findById(id, function (error, user) {

        if (fullname) {
            user.fullname = fullname;
        }
        if (email) {
            user.email = email;
        }
        if (password) {
            user.password = password;
        }

        user.save(function (error, user) {
            if (error) {
                callback({error: 'Não foi possivél atualizar o usuário'});
            } else {
                callback(user);
            }
        });
    });

};
exports.save = function(fullname,email,password,callback){

    new db.User({
        'fullname': fullname,
        'email': email,
        'password': password,
        created_at: new Date()
    }).save( function(error,user){
            if (error) {
                callback({error:'Não foi possivél salvar o usuário'});
            } else {
                callback(user);
            }
        });
};
exports.user = function(id,callback){

    db.User.findById(id,function(error,user){

        if (error) {
            callback({error:'Não foi possivél retorner o usuário'});
        } else {
            callback(user);
        }

    });

};
exports.delete = function(id, callback){
    db.User.findById(id,function(error,user){

        if (error) {
            callback({error:'Não foi possivél retorner o usuário'});
        } else {
            user.remove(function(error){
                if (!error) {
                    callback({response:'usuário foi excluido com sucesso'});
                }
            });
        }
    });
};