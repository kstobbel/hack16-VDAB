import { Template } from 'meteor/templating';
import './rooms.html'

import { Mongo } from 'meteor/mongo';

 import { Rooms } from '../imports/api/rooms.js';

Template.rooms.helpers({
  rooms() {
    return Rooms.find({});
  },
});
