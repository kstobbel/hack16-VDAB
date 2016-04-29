import { Google } from '../imports/api/google.js'
import { Session } from 'meteor/session';

import { Mongo } from 'meteor/mongo';

import { Users } from '../imports/api/users.js';
import { Rooms } from '../imports/api/rooms.js';

import './make-reservation.html';
import './user.js'

Session.set("firstStep", true);

Template.makereservation.helpers({
  firstStep: function(){
    return Session.get("firstStep") || [];
  },

  secondStep: function () {
    return Session.get("secondStep") || [];
  },

  thirdStep: function () {
    return Session.get("thirdStep") || [];
  },

  routeOptions: function () {
    return Session.get("routeOptions") || [];
  },
});

Template.makereservation.events({
  "click #stepOneButton": function(event){
    Session.set("firstStep", null);
    Session.set("secondStep", true);
  },
  "click #stepTwoButton": function(event){
    Session.set("secondStep", null);
    Session.set("thirdStep", true);

    var participants = Session.get("selectedUsers");
    var addressesParticipants = [];

    participants.forEach(function (participant){
      var user = Users.findOne({"owner": participant});
      addressesParticipants.push(user.address);
    });

    var addressesRooms = [];
    var rooms = Rooms.find({});

    rooms.forEach(function (room){
      addressesRooms.push(room.address);
    });


    var test = Meteor.call('getRoute', 10221939, addressesParticipants, addressesRooms, function(err, result){
        if (err) {
          window.alert("Error: " + err.reason);
        } else {
          console.log("help");

          Session.set("routeOptions", result);
        }
    });

  }
});
