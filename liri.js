js
// read and set environment variables
require("dotenv").config();

// required packages for LIRI application
const Spotify = require("node-spotify-api");
const Twitter = require("twitter");
const request = require("request");
const fs = require("fs");
const keys = require("./liri-api-keys/keys");
var liriArg = process.argv[2];


	
	switch(liriArg) {
        case "my-tweets": 
        myTweets(); 
        break;

        case "spotify-this-song": 
        spotifyThisSong(); 
        break;

        case "movie-this": 
        movieThis(); 
        break;

        case "do-what-it-says": 
        doWhatItSays(); 
        break;
    };

