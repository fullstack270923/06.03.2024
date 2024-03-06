const http = require('http');
const port = 3000

// this function will run everytime a browser 
// or a POSTMAN tries to connect to my server ...
const server = http.createServer( () => {
    console.log('Someone browsed my server');
})

server.listen(port, () => {
    // this will run when my server is up ....
    console.log(`Server running at http://localhost:${port}`);
})



const html_page = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HELLO nodejs!</title>
</head>
<body>
    <h1>Hello nodejs!</h1>
</body>
</html>
`