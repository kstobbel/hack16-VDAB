import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getRoute': function(arrivalTime, addressesParticipants, addressesRooms ){

          var results = [];

          addressesParticipants.forEach(function (addressParticipant){
            addressesRooms.forEach(function (addressRoom){
              var response = calculateDistanceBetweenTwoAddresses(addressParticipant, addressRoom);
              response.data.rows.forEach(function(row){
                results.push({"distance": row.elements[0].distance.text, "duration": row.elements[0].duration.text, "participant": addressParticipant, "room": addressRoom});
              });
            });
          });

          return results;

        },
});

function calculateDistanceBetweenTwoAddresses(addressA, addressB){
  const response = HTTP.call( 'GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + addressA + '&destinations=' + addressB + '&arrival_time=1463295600000&key=AIzaSyB2LZ7QHgblMmotbJzvzKk9Eo6rKWfty5k', {timeout:30000});
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
}
