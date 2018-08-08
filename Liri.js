const env = require('dotenv').config();
var command1 = process.argv[2];
var Spotify = require('node-spotify-api');
 var keys = require("./Keys.js");
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
var spotify = new Spotify(keys.spotify);

spotify.search({
  type: 'track',
  query: process.argv[3],
}, function(err, data){
  if (!err) {
    // throw err;
    for (var i =0; i < 2; i++){
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[1].artists);
      console.log(data.tracks.items[2].album)}
    
    
  }
 
// console.log(JSON.stringify(data))}

}); 


