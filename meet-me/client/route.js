import { Google } from '../imports/api/google.js'

import './route.html';

Template.getRoute.events({
  'click button'(event, instance) {
    const test = Meteor.call('getRoute', function(err, result){
        if (err) {
          window.alert("Error: " + err.reason);
        } else {
          console.log("help");
          console.log("resultJson: " + result.data.destination_addresses);

          const tijden = [];
          result.data.rows.forEach(function(row){
            tijden.push({"text": row.elements[0].distance.text});
            tijden.push({"text": row.elements[0].duration.text});
          });

          Session.set("routeOptions", tijden);
        }
    });
  },
});

Template.route.routeOptions = function () {
  return Session.get("routeOptions") || [];
};
