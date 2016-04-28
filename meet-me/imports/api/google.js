import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getRoute': function(callback){
          Meteor.http.call( 'GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Brugge|Gent&destinations=Leuven&key=AIzaSyB2LZ7QHgblMmotbJzvzKk9Eo6rKWfty5k', function(error, response) {

              console.log(response.statusCode);

              if (response.statusCode == 200) {
                console.log("resultReceived");
                console.log(response);
                return response;
              }

              else {
                console.log("Response issue!" + response.statusCode);
                throw new Meteor.Error("API call failed");
              }

            });
        },
});
