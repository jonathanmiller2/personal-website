const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+ '/public'));

const Init = async () =>
{
	console.log('Init server');
}


app.get('/', (req, res) =>
{
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, () =>
{
	console.log(`Listening on ${port}!`)
})