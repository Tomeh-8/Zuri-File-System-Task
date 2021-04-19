const fetch = require("node-fetch");
var fs = require("fs");

var jsonPosts;

fetch("http://jsonplaceholder.typicode.com/posts")
.then(res => res.text())
.then(data => jsonPosts = data)
.then(() => {
    fs.writeFile("./result/posts.txt", jsonPosts, (err) => {
        if (err) throw err;
        console.log("file created successfully!");
    })
});