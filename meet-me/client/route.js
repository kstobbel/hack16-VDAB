import { Google } from '../imports/api/google.js'

import './route.html';

Template.getRoute.events({
  'click button'(event, instance) {
    const test = Meteor.call('getRoute', function(err, result){
        if (err) {
          window.alert("Error: " + err.reason);
        } else {
          console.log("help");
          console.log("resultJson: " + result);
        }
    });
  },
});
