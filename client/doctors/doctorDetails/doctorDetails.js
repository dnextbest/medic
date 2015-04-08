Template.doctorDetails.helpers({
  doctor: function(){
    return Doctors.findOne();
  }
});
