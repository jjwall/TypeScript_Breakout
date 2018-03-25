var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/public/game.html"));
});

app.listen(PORT, function () {
	console.log(`app listening on port ${PORT}`);
});