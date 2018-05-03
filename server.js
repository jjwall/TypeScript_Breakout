var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/breakout.db');

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

app.use(express.static('./public'));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/public/game.html"));
});

app.get("/highscores", function(req, res) {
	var scoreArray = [];
	db.each("SELECT Name, Score, Level FROM Highscores ORDER BY Score DESC LIMIT 10", 
	function item(err, row) {
		scoreArray.push(row);
	},
	function complete(err, row) {
		res.send(scoreArray);
	});
});

app.post("/submitScore", function(req, res) {
	db.serialize(function() {
		var insert = db.prepare("INSERT INTO Highscores (Name, Score, Level) VALUES (?, ?, ?)");
		insert.run(req.body.Name, req.body.Score, req.body.Level);
		insert.finalize();
	});
});

// API to download SQLite database file binary
app.get("/api/breakout.db", function(req, res) {
	fs.readFile(path.join(__dirname, '/db/breakout.db'), function (err, data) {
		if (err) throw err;
		res.send(data);
	});
})

// API to view top 100 scores in JSON
app.get("/api/top100", function(req, res) {
	var scoreJSON = {};
	var rank = 1;
	db.each("SELECT Name, Score, Level FROM Highscores ORDER BY Score DESC LIMIT 100", 
	function item(err, row) {
		scoreJSON[`Rank_${rank}`] = row;
		rank++;
	},
	function complete(err, row) {
		res.json(scoreJSON);
	});
});

// CREATE TABLE

// db.serialize(function() {
// 	console.log("creating table")
// 	db.run("CREATE TABLE Highscores (Name TEXT, Score INTEGER, Level INTEGER)", function(error) {
// 		if (error.message.indexOf("already exists") != -1) {
// 			console.log(error);
// 		}
// 	});
// });

app.listen(PORT, function () {
	console.log(`app listening on port ${PORT}`);
});