
import { Template } from 'meteor/templating';
import './reservations.html'

import { Mongo } from 'meteor/mongo';

export const Reservations = new Mongo.Collection('reservations');

Template.reservations.helpers({
  reservations() {
    return Reservations.find({ });
  },
});

