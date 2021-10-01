const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/', function(req, res) {
        res.send("Please visit http://67.205.173.54:3000/say?keyword=hello for the response from AWS Function");
});

app.get('/say', function(req,res) {
        resp = "Hello World" + req.query.keyword ;
        axios.get('https://pq23k35vre.execute-api.us-east-2.amazonaws.com/default/myFunction?keyword='+req.query.keyword)
        .then(response =>{
                res.statusCode = response.data.statusCode;
                res.send(response.data.body);
        })
        .catch(err=>{
                res.statusCode = 400;
                res.send(err);
        });
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});