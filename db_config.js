/**
 * Created by Rodrigo on 04/06/2017.
 */
// banco de dados
var bancoString = 'mongodb://127.0.0.1/banco_mongo';
var mongoose = require ('mongoose').connect(bancoString);
var db = mongoose.connection;

// erro
db.on('error',console.error.bind(console,'Error ão conectar no banco'));

// entrou
db.once('open',function(){
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        created_at: Date
    });
    // deixando a variavél global *(acrescentar o db)
    exports.User = mongoose.model('User', userSchema);
});
