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

    var participantsOwners = Session.get("selectedUsers");
    var participants = [];

    participantsOwners.forEach(function (participantOwner){
      var user = Users.findOne({"owner": participantOwner});
      participants.push(user);
    });

    var strangeRooms = Rooms.find({});
    var rooms = [];

    strangeRooms.forEach(function (strangeRoom){
      console.log(strangeRoom.address);
      rooms.push(strangeRoom);
    });

    var test = Meteor.call('getRoute', 10221939, participants, rooms, function(err, result){
        if (err) {
          window.alert("Error: " + err.reason);
        } else {
          console.log("help");

          Session.set("routeOptions", result);
        }
    });

  }
});
