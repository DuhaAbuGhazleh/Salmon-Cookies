// calculate the number of cookies each location must make every day
// The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) 14hr
//constant hour =
//{
// time : ["6am" , "7 am", "8am" , "9am", "10am", "11am", "12am ", "1pm", "2pm","3pm", "4pm", "5pm", "6pm ", "7pm ", "8pm "],
//}

/*
const Seattle ={
  time : ['6am' , '7 am', '8am' , '9am', '10am', '11am', '12am ', '1pm', '2pm','3pm', '4pm', '5pm', '6pm ', '7pm ', '8pm '],
  name : 'Seattle',
  min :23,
  max : 65,
  avg : 6.3 ,
  saels:[] ,
  saelsPerh:[] ,
  total : 0 ,



  //randomcus: function(min, max) {
  // this.saels = Math.floor(Math.random() * (max - min + 1) + min);
  //return this.saels;
  //}



  // multiple: function (){
  //   this.multi = avg * randomcus,
  //  this.multi;
  // }

  random : function() {
    for (let i=0 ; i <= this.time.length ; i++){
      this.saels[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.saelsPerh[i]= (this.saels[i]* this.avg);
      this.total += this.saelsPerh[i];
      this.result[i]= this.time[i] +':' + this.saelsPerh[i]+ 'cookis';


    }
    return this.saels, this.saelsPerh , this.total, this.result;

  },

};
console.log(Seattle);


let sdivElement = document.getElementById('sdiv');
console.log(sdivElement);
let createH2 =  document.createElement('h2');
createH2.textContent=Seattle.name;
sdivElement.appendChild(createH2);

let createul =document.createElement('ul');
sdivElement.appendChild(createul);

for(let li=0 ; li <time.length ;li++){

  let createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Seattle.result[li];

}
let createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

// multi : function(){

//for(let j=0 ; j<=this.time.length; j++){
//  this.saelsPerh[j]= this.saels * this.avg;
// return this.saelsPerh[j];

// }
// console.log (this.saelsPerh);

//},


*/

/*
console.log(Seattle);
Seattle.random();

//Seattle.multi();

render: function() {
  let articleElement = document.createElement('article');



}
*/


const hours = ['6am' , '7am' ,'8pm','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle={
  name : 'Seattle',
  numCookies : [],
  cookiesperh :[],
  result : [],
  total : 0,
  max : 65,
  min :23	,
  avarege :6.3 ,
  random : function() {
    for (let i=0 ; i<=hours.length ; i++){
      this.numCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ;
    }
    return this.numCookies;

  },
  avgrandom : function(){
    for (let i=0 ; i<hours.length ; i++){

      this.cookiesperh[i]= Math.floor(this.numCookies[i] * this.avarege) ;
      this.total +=this.cookiesperh[i];


    }
    return this.cookiesperh ;

  },
  finalresult : function(){
    for (let i=0 ; i<hours.length ; i++){
      this.result[i]= hours[i]+ ' : ' + this.cookiesperh[i] + 'cookies';
    }
    return this.result;
  }
};
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total);

let sdivElement = document.getElementById('sdiv');
console.log(sdivElement);
let createH2 =  document.createElement('h2');
createH2.textContent=Seattle.name;
sdivElement.appendChild(createH2);

let createul =document.createElement('ul');
sdivElement.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

  let createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Seattle.result[li];

}
let createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;




//////////////////////////////////////////


//const hours = ['6am' , '7am' ,'8pm','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Tokyo={
  name : 'Tokyo',
  numCookies : [],
  cookiesperh :[],
  result : [],
  total : 0,
  max : 65,
  min :23	,
  avarege :6.3 ,
  random : function() {
    for (let i=0 ; i<=hours.length ; i++){
      this.numCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ;
    }
    return this.numCookies;

  },
  avgrandom : function(){
    for (let i=0 ; i<hours.length ; i++){

      this.cookiesperh[i]= Math.floor(this.numCookies[i] * this.avarege) ;
      this.total +=this.cookiesperh[i];


    }
    return this.cookiesperh ;

  },
  finalresult : function(){
    for (let i=0 ; i<hours.length ; i++){
      this.result[i]= hours[i]+ ' : ' + this.cookiesperh[i] + 'cookies';
    }
    return this.result;
  }
};
console.log(Tokyo.random());
console.log(Tokyo.avgrandom());
console.log(Tokyo.finalresult());
console.log('the total' +Tokyo.total);

let tdivElement = document.getElementById('tdiv');
console.log(tdivElement);
createH2 = document.createElement('h2');
createH2.textContent=Tokyo.name;
tdivElement.appendChild(createH2);

createul =document.createElement('ul');
tdivElement.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

  createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Tokyo.result[li];

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Tokyo.total + 'cookies' ;


////////////////////////////////


const Dubai={
  name : 'Dubai',
  numCookies : [],
  cookiesperh :[],
  result : [],
  total : 0,
  max : 65,
  min :23	,
  avarege :6.3 ,
  random : function() {
    for (let i=0 ; i<=hours.length ; i++){
      this.numCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ;
    }
    return this.numCookies;

  },
  avgrandom : function(){
    for (let i=0 ; i<hours.length ; i++){

      this.cookiesperh[i]= Math.floor(this.numCookies[i] * this.avarege) ;
      this.total +=this.cookiesperh[i];


    }
    return this.cookiesperh ;

  },
  finalresult : function(){
    for (let i=0 ; i<hours.length ; i++){
      this.result[i]= hours[i]+ ' : ' + this.cookiesperh[i] + 'cookies';
    }
    return this.result;
  }
};
console.log(Dubai.random());
console.log(Dubai.avgrandom());
console.log(Dubai.finalresult());
console.log('the total' +Dubai.total);

let ddivElement = document.getElementById('sdiv');
console.log(ddivElement);
createH2 = document.createElement('h2');
createH2.textContent=Dubai.name;
ddivElement.appendChild(createH2);

createul =document.createElement('ul');
ddivElement.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

  let createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Dubai.result[li];

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Dubai.total + 'cookies' ;

/////////////////////////////


const Paris={
  name : 'Paris',
  numCookies : [],
  cookiesperh :[],
  result : [],
  total : 0,
  max : 65,
  min :23	,
  avarege :6.3 ,
  random : function() {
    for (let i=0 ; i<=hours.length ; i++){
      this.numCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ;
    }
    return this.numCookies;

  },
  avgrandom : function(){
    for (let i=0 ; i<hours.length ; i++){

      this.cookiesperh[i]= Math.floor(this.numCookies[i] * this.avarege) ;
      this.total +=this.cookiesperh[i];


    }
    return this.cookiesperh ;

  },
  finalresult : function(){
    for (let i=0 ; i<hours.length ; i++){
      this.result[i]= hours[i]+ ' : ' + this.cookiesperh[i] + 'cookies';
    }
    return this.result;
  }
};
console.log(Paris.random());
console.log(Paris.avgrandom());
console.log(Paris.finalresult());
console.log('the total' +Paris.total);

let pdivElement = document.getElementById('sdiv');
console.log(pdivElement);
createH2 = document.createElement('h2');
createH2.textContent=Paris.name;
pdivElement.appendChild(createH2);

createul =document.createElement('ul');
pdivElement.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

  let createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Paris.result[li];

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Paris.total + 'cookies' ;

////////////////////////



const Lima={
  name : 'Lima',
  numCookies : [],
  cookiesperh :[],
  result : [],
  total : 0,
  max : 65,
  min :23	,
  avarege :6.3 ,
  random : function() {
    for (let i=0 ; i<=hours.length ; i++){
      this.numCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ;
    }
    return this.numCookies;

  },
  avgrandom : function(){
    for (let i=0 ; i<hours.length ; i++){

      this.cookiesperh[i]= Math.floor(this.numCookies[i] * this.avarege) ;
      this.total +=this.cookiesperh[i];


    }
    return this.cookiesperh ;

  },
  finalresult : function(){
    for (let i=0 ; i<hours.length ; i++){
      this.result[i]= hours[i]+ ' : ' + this.cookiesperh[i] + 'cookies';
    }
    return this.result;
  }
};
console.log(Lima.random());
console.log(Lima.avgrandom());
console.log(Lima.finalresult());
console.log('the total' +Lima.total);

let ldivElement = document.getElementById('ldiv');
console.log(pdivElement);
createH2 = document.createElement('h2');
createH2.textContent=Lima.name;
ldivElement.appendChild(createH2);

createul =document.createElement('ul');
ldivElement.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

  let createli = document.createElement('li');
  createul.appendChild(createli);
  createli.textContent = Lima.result[li];

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Lima.total + 'cookies' ;
