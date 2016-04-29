import './make-reservation.html';

Session.set("firstStep", true);

Template.makereservation.firstStep = function () {
  return Session.get("firstStep") || [];
};

Template.makereservation.secondStep = function () {
  return Session.get("secondStep") || [];
};

Template.makereservation.thirdStep = function () {
  return Session.get("thirdStep") || [];
};

Template.makereservation.events({
  "click #stepOneButton": function(event){
    Session.set("firstStep", null);
    Session.set("secondStep", true);
  },
  "click #stepTwoButton": function(event){
    Session.set("secondStep", null);
    Session.set("thirdStep", true);
  }
});
