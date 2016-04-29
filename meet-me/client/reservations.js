import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Reservations } from '../imports/api/reservations-api.js';
import { Users } from '../imports/api/users.js';
import { Rooms } from '../imports/api/rooms.js';

import './reservations.html'



Template.reservations.helpers({
  reservations() {
	 console.log(Reservations.find({}).count());
    return Reservations.find({});
  },
});

Template.reservations.events({
  'submit form': function(event) {
    event.preventDefault();

    var date = event.target.date.value;
    var time = event.target.time.value;
    var attendee1Name = event.target.attendee1.value;
    var attendee2Name = event.target.attendee2.value;
    var attendee3Name = event.target.attendee3.value;
    var remarks = event.target.remarks.value;
    var locationName= event.target.location.value;

    var attendee1Id= Users.findOne({name: attendee1Name}).owner;
    var locationId= Rooms.findOne({name: locationName}).id;

    // Insert a task into the collection
    Meteor.call('reservations.insert', date, time, attendee1Id, locationId, remarks);

     //Clear form
     event.target.date.value = '';
     event.target.time.value = '';
     event.target.attendee1.value = '';
     event.target.attendee2.value = '';
     event.target.attendee3.value = '';
     event.target.remarks.value = '';
     event.target.location.value = '';

  },

});
