import { Google } from '../imports/api/google.js'

import './route.html';

Template.getRoute.events({
  'click button'(event, instance) {

    var addressesRooms = ["Brugge", "Gent", "Hasselt"];
    var addressesParticipants = ["Antwerpen", "Brussel"];

    var test = Meteor.call('getRoute', 10221939, addressesRooms, addressesParticipants, function(err, result){
        if (err) {
          window.alert("Error: " + err.reason);
        } else {
          console.log("help");

          Session.set("routeOptions", result);
        }
    });
  },
});

Template.route.routeOptions = function () {
  return Session.get("routeOptions") || [];
};
