var express = require('express');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/breakout.db');

var app = express();
var PORT = process.env.PORT || 8080;

// CREATE TABLE

// db.serialize(function() {
// 	console.log("creating table")
// 	db.run("CREATE TABLE Highscores (Name TEXT, Score INTEGER, Level INTEGER)", function(error) {
// 		if (error.message.indexOf("already exists") != -1) {
// 			console.log(error);
// 		}
// 	});
// });


// POST

// db.serialize(function() {
// 	var stmt = db.prepare("INSERT INTO Highscores (Name, Score, Level) VALUES (?, ?, ?)");
// 	stmt.run("Jakey", 5000, 5);
// 	stmt.finalize();
// });

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
		console.log(scoreArray);
		res.send(scoreArray);
	});
});

app.listen(PORT, function () {
	console.log(`app listening on port ${PORT}`);
});