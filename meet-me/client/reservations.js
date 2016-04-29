import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Reservations } from '../imports/api/reservations-api.js';
import { Users } from '../imports/api/users.js';

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
    console.log("Event received");
console.log(event);
    console.log(event.target);
    console.log(event.target.date.value);

    var date = event.target.date.value;
    var time = event.target.time.value;
    var attendee1Name = event.target.attendee1.value;
    var attendee2Name = event.target.attendee2.value;
    var attendee3Name = event.target.attendee3.value;
    var remarks = event.target.remarks.value;
    var locationName= event.target.location.value;


    var attendeeList = Users.find({name: attendee1Name});
    console.log(attendeeList.count());
    console.log(attendee1Name);
  //  console.log(event);
    // Prevent default browser form submit
  //  event.preventDefault();

    // Get value from form element
  //  const target = event.target;



    // Insert a task into the collection
    // Meteor.call('tasks.insert', text);

    // Clear form
  //  target.text.value = '';
  },

});
