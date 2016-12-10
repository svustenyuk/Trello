var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(cors());

var lists = [
	{
		id: 1,
		listName: 'Todo'
	},
	{
		id: 2,
		listName: 'Doing'
	},
	{
		id: 3,
		listName: 'Done'
	}
];

app.get('/lists', function(req, res){
	res.send(lists);
});
app.post('/lists', function(req, res){
	lists.push({
		id: _.uniqueId('list_'),
		listName: req.body.listName
	});
	res.send(200);
});

var server = app.listen(3001, function(){
	console.log('backand started');
});

