import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Reservations = new Mongo.Collection('reservations');
console.log(Reservations.find({}).count());

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




});
