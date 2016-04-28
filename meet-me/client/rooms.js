
import { Template } from 'meteor/templating';
import './rooms.html'

import { Mongo } from 'meteor/mongo';
 
export const Rooms = new Mongo.Collection('rooms');

Template.rooms.helpers({
  rooms() {
    return Rooms.find({});
  },
});