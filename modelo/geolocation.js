var geo = require('node-geocoder');

var options = {
    provider: 'google',
   
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyBil8XETYEYAWvv9WsT4potsdyZRQnpUt0', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };

  var geocoder = geo(options);
 
// Using callback
geocoder.geocode({address: '29 champs elysée', country: 'France'}, function(err, res) {
    console.log(res);
  });