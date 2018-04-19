var http = require("http");
var ip = require("ip")
// Define a port to listen for incoming requests
var PORT7000 = 7000;
var PORT7500 = 7500

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Server 1 Good job you got it!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT7000, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT7000);
  console.log("Server listening on: http://" +ip.address()+":" + PORT7000);
});

function handleRequest2(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    
    response.end("Server 2 You have bad breath!");
  }
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  var server2 = http.createServer(handleRequest2);
  
  // Start our server so that it can begin listening to client requests.
  server2.listen(PORT7500, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT7500);
    console.log("Server listening on: http://" +ip.address()+":" + PORT7500);
  });