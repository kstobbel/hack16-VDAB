import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getRoute': function(){
        this.unblock();
          HTTP.call( 'GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Brugge|Gent&destinations=Leuven&key=AIzaSyB2LZ7QHgblMmotbJzvzKk9Eo6rKWfty5k', {}, function(error, response) {
              if (error) {
                console.log(error);
              } else {
                console.log(response);
                return (response.data.rows);
              }
            });
        },
});
