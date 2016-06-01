declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import {lessonsData} from "./src/services-intro/lessons";



var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const lessons = lessonsData;


app.route('/lessons')
    .get((req, res) => {
        res.status(200).json(lessons);
    })
    .delete((req,res) => {
        console.log("deleting lesson ...");
        var lesson = req.body;
        const index = lessons.indexOf(lesson);
        lessons.splice(index, 1);
        res.status(200).send();
    })
    .post((req, res) => {
        lessons.push(req.body);
        res.status(200).send();
    });

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

