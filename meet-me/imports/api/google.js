import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getRoute': function(arrivalTime, addressesParticipants, addressesRooms ){

          var results = [];

          addressesRooms.forEach(function (addressRoom){
            var participantsInfoForRoom = [];
            var maximalDuration = 0;
            addressesParticipants.forEach(function (addressParticipant){
              var response = calculateDistanceBetweenTwoAddresses(addressParticipant, addressRoom);
              response.data.rows.forEach(function(row){
                var participantInfoForRoom = {"distance": row.elements[0].distance.text, "duration": row.elements[0].duration.text, "participant": addressParticipant, "room": addressRoom};
                participantsInfoForRoom.push(participantInfoForRoom);
                if (maximalDuration < participantInfoForRoom.duration){
                  maximalDuration = participantInfoForRoom.duration;
                }
              });
            });
            results.push({"content": participantsInfoForRoom, "room": addressRoom, "maximalDuration": maximalDuration});
          });

          results = results.sort(function (a,b){
            console.log(a.maximalDuration);
            return a.maximalDuration - b.maximalDuration;
          });

          console.log(results);
          return results;

        },
});

function calculateDistanceBetweenTwoAddresses(addressA, addressB){
  var response = HTTP.call( 'GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + addressA + '&destinations=' + addressB + '&arrival_time=1463295600000&key=AIzaSyB2LZ7QHgblMmotbJzvzKk9Eo6rKWfty5k', {timeout:30000});
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
