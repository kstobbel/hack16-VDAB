
import { Template } from 'meteor/templating';
import './results.html'

import { Mongo } from 'meteor/mongo';

import { Rooms } from '../imports/api/rooms.js';

Template.results.helpers({
  rooms() {
    return Rooms.find({});
  },
});
