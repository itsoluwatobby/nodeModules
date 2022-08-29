const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
   if(req.url === '/') {
      res.end('Welcome to the Home Page')
   }
   if(req.url === '/about'){
      res.end('Here is the About page')
   }
   res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back to home page</a>
   `)
})

server.listen(PORT)