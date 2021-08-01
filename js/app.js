// calculate the number of cookies each location must make every day
// The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) 14hr

let Seattle ={
  name : 'Seattle',
  mincus :23,
  maxcus : 65,
  avg : 6.3 ,
  saels : 0 ,


  random: function(min, max) {
    this.saels = Math.floor(Math.random() * (max - min + 1) + min);
    return this.saels;
  },
};
console.log(Seattle);
Seattle.random(23,65);
