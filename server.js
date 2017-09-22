var express  = require('express');
var dateformat = require('dateformat');
var bodyParser  = require('body-parser');
var app = express();
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/filmes');
var Filme = mongoose.model('Filme',mongoose.Schema({
	nome: String,
	ano: String,
	categoria: String,
	diretor: String,
	sinopse: String
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));

app.get('/api/filmes',function(req,res){
	Filme.find(function(err,filmes){
		if(err)
			res.send(err);
		res.json(filmes);
	});

});

app.get('/api/filmes/:id',function(req,res){
	Filme.findOne({_id:req.params.id}, function(err,filme){
		if(err)
			res.send(err);
		res.json(filme);
	});

});

app.post('/api/filmes',function(req,res){
	Filme.create(req.body,function(err,filmes){
		if(err)
			res.send(err);
		res.json(filmes);
	});

});

app.delete('/api/filmes/:id',function(req,res){
	Filme.findOneAndRemove({_id:req.params.id}, function(err,filme){
		if(err)
			res.send(err);
		res.json(filme);
	});

});

app.put('/api/filmes/:id',function(req,res){
		var dataAtual = new Date();
		var dataMod = dateformat(dataAtual,'yyyy-mm-dd h:MM:ss');
		
	var query = {
		nome:req.body.nome,
		ano:req.body.ano,
		categoria:req.body.categoria,
		diretor:req.body.diretor,
		sinopse:req.body.sinopse
	};

	Filme.findOneAndUpdate({_id:req.params.id}, query ,function(err,filme){
		if(err)
			res.send(err);
		res.json(filme);
	});

});


app.listen(3000,function(){
	console.log('server 3000');
});