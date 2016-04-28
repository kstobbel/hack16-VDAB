
import { Template } from 'meteor/templating';
import './reservations.html'

import { Mongo } from 'meteor/mongo';

import { Reservations } from '../imports/api/reservations-api.js';

Template.reservations.helpers({
  reservations() {
    return Reservations.find({ });
  },
});

