import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
 
import './body.html';
import { Rooms } from '../api/rooms.js';
 
Template.body.helpers({
  rooms() {
    return Rooms.find({});
  },
});