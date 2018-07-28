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
    for (var i =0; i < 5; i++){
      console.log(data.tracks.items[i].name);}
    
    
  }
 
// console.log(JSON.stringify(data))}

}); 


