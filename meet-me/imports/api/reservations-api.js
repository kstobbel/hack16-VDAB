import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Reservations = new Mongo.Collection('reservations');

Meteor.methods({
  'reservations.insert'(date, time, useridList, loc, remarks) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Reservations.insert({
  		time: time,
  		date: date,
  		remarks:remarks,
  		owner: Meteor.userId(),
  		attendees: useridList,
  		location: loc,
    });
  },

  'reservations.remove'(reservationId) {
      check(reservationId, String);
      console.log('reached the api');
      Reservations.remove(reservationId);
    },

    'reservations.removeAttendee'(reservationId, attendeeId) {
        check(attendeeId, String);
        check(reservationId, String);
        console.log(reservationId, attendeeId);
        console.log(Reservations.find({}).fetch());
          console.log(Reservations.findOne({_id: reservationId}));
        var reserv = Reservations.findOne({_id: reservationId});
        console.log(reserv);
        var attendees = reserv.attendees;
        console.log(attendees);
        //reserv.update({}, {$unset: {attendeeId: attendeeId}});

      var updatedAttendees = [];
        _(reserv.attendees).forEach(att=> {
          if(att.attendeeId != attendeeId){
            updatedAttendees.push(att);
            console.log("Added attendee to keep list:"+att);
          }
        });

        Reservations.update({_id: reserv._id}, {$set:
          { time: reserv.time,
        		date: reserv.date,
        		remarks:reserv.remarks,
        		owner:reserv.owner,
        		attendees: updatedAttendees,
        		location: reserv.location,
          }});

    },
});
