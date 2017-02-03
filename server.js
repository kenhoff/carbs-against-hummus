const express = require("express");

let app = express();

app.use(express.static(__dirname + "/public"))

const port = process.env.PORT || 1234;

app.listen(port, function() {
	console.log(`Listening on ${port}...`);
})
