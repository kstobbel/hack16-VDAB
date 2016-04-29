import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Reservations } from '../imports/api/reservations-api.js';
import { Users } from '../imports/api/users.js';
import { Rooms } from '../imports/api/rooms.js';

import './reservations.html'



Template.reservations.helpers({
  myReservations() {
    return Reservations.find({owner: Meteor.userId()});
  },
  attendReservations() {
    return Reservations.find({attendees: {attendeeId: Meteor.userId() }});
  },
  rooms(roomid) {
    return Rooms.findOne({id: roomid}).name;
  },
  findUser(attendeeId) {
    if (Users.findOne({owner: attendeeId}) != null) {
      return Users.findOne({owner: attendeeId}).name;
    }
    return "";
  },

});
