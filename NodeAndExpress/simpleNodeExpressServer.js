// A simple way to set up a Node server using express.

var fs=require('fs');
var express=require('express');
var app=express();

app.set('port', process.env.PORT || 3030);

app.use(express.static(__dirname));
//Add any other static directories you'd like to use here (e.g.: 'app.use(express.static(__dirname + 'NAME_OF_SUBFOLDER))')

var server=app.listen(app.get('port'), function() {
    console.log("We have started our server at", app.get('port'));
});
