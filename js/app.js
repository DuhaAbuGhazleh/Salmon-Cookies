


const hours = ['6am' , '7am' ,'8pm','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle={
  name : 'Seattle',
  cookiesperh :[],
  total : 0,
  max : 65,
  min : 23	,
  avg :6.3 ,

  gitCookies: function() {
    for (let i=0 ; i<=hours.length ; i++){
      let randomAvgCus = Math.ceil((randomNumber(this.min, this.max))*this.avg);
      this.cookiesperh.push(randomAvgCus);
      this.total += randomAvgCus;
    }
  },

  render: function(){

    const infoElement = document.getElementById('info');
    console.log(infoElement);

    const h2Element =document.createElement('h2');
    h2Element.textContent= this.name;
    infoElement.appendChild(h2Element);

    const ulElement =document.createElement('ul');
    infoElement.appendChild(ulElement);

    for(let i=0 ; i <hours.length ;i++){

      const liElement = document.createElement('li');
      liElement.textContent= `${hours[i]}  :  ${this.cookiesperh[i]} cookies`;
      ulElement.appendChild(liElement);

    }
    const totalLi = document.createElement('li');
    totalLi.textContent= `TOTAL : ${this.total} cookies`;
    ulElement.appendChild(totalLi);
  },


};

Seattle.gitCookies();
Seattle.render();

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



const Tokyo={
  name : 'Tokyo',
  cookiesperh :[],
  total : 0,
  max : 65,
  min : 23	,
  avg :6.3 ,

  gitCookies: function() {
    for (let i=0 ; i<=hours.length ; i++){
      let randomAvgCus = Math.ceil((randomNumber(this.min, this.max))*this.avg);
      this.cookiesperh.push(randomAvgCus);
      this.total += randomAvgCus;
    }
  },

  render: function(){

    const infoElement = document.getElementById('info');
    console.log(infoElement);

    const h2Element =document.createElement('h2');
    h2Element.textContent= this.name;
    infoElement.appendChild(h2Element);

    const ulElement =document.createElement('ul');
    infoElement.appendChild(ulElement);

    for(let i=0 ; i <hours.length ;i++){

      const liElement = document.createElement('li');
      liElement.textContent= `${hours[i]}  :  ${this.cookiesperh[i]} cookies`;
      ulElement.appendChild(liElement);

    }
    const totalLi = document.createElement('li');
    totalLi.textContent= `TOTAL : ${this.total} cookies`;
    ulElement.appendChild(totalLi);
  },


};

Tokyo.gitCookies();
Tokyo.render();




const Dubai={
  name : 'Dubai',
  cookiesperh :[],
  total : 0,
  max : 65,
  min : 23	,
  avg :6.3 ,

  gitCookies: function() {
    for (let i=0 ; i<=hours.length ; i++){
      let randomAvgCus = Math.ceil((randomNumber(this.min, this.max))*this.avg);
      this.cookiesperh.push(randomAvgCus);
      this.total += randomAvgCus;
    }
  },

  render: function(){

    const infoElement = document.getElementById('info');
    console.log(infoElement);

    const h2Element =document.createElement('h2');
    h2Element.textContent= this.name;
    infoElement.appendChild(h2Element);

    const ulElement =document.createElement('ul');
    infoElement.appendChild(ulElement);

    for(let i=0 ; i <hours.length ;i++){

      const liElement = document.createElement('li');
      liElement.textContent= `${hours[i]}  :  ${this.cookiesperh[i]} cookies`;
      ulElement.appendChild(liElement);

    }
    const totalLi = document.createElement('li');
    totalLi.textContent= `TOTAL : ${this.total} cookies`;
    ulElement.appendChild(totalLi);
  },


};

Dubai.gitCookies();
Dubai.render();





const Paris={
  name : 'Paris',
  cookiesperh :[],
  total : 0,
  max : 65,
  min : 23	,
  avg :6.3 ,

  gitCookies: function() {
    for (let i=0 ; i<=hours.length ; i++){
      let randomAvgCus = Math.ceil((randomNumber(this.min, this.max))*this.avg);
      this.cookiesperh.push(randomAvgCus);
      this.total += randomAvgCus;
    }
  },

  render: function(){

    const infoElement = document.getElementById('info');
    console.log(infoElement);

    const h2Element =document.createElement('h2');
    h2Element.textContent= this.name;
    infoElement.appendChild(h2Element);

    const ulElement =document.createElement('ul');
    infoElement.appendChild(ulElement);

    for(let i=0 ; i <hours.length ;i++){

      const liElement = document.createElement('li');
      liElement.textContent= `${hours[i]}  :  ${this.cookiesperh[i]} cookies`;
      ulElement.appendChild(liElement);

    }
    const totalLi = document.createElement('li');
    totalLi.textContent= `TOTAL : ${this.total} cookies`;
    ulElement.appendChild(totalLi);
  },


};

Paris.gitCookies();
Paris.render();



const Lima={
  name : 'Lima',
  cookiesperh :[],
  total : 0,
  max : 65,
  min : 23	,
  avg :6.3 ,

  gitCookies: function() {
    for (let i=0 ; i<=hours.length ; i++){
      let randomAvgCus = Math.ceil((randomNumber(this.min, this.max))*this.avg);
      this.cookiesperh.push(randomAvgCus);
      this.total += randomAvgCus;
    }
  },

  render: function(){

    const infoElement = document.getElementById('info');
    console.log(infoElement);

    const h2Element =document.createElement('h2');
    h2Element.textContent= this.name;
    infoElement.appendChild(h2Element);

    const ulElement =document.createElement('ul');
    infoElement.appendChild(ulElement);

    for(let i=0 ; i <hours.length ;i++){

      const liElement = document.createElement('li');
      liElement.textContent= `${hours[i]}  :  ${this.cookiesperh[i]} cookies`;
      ulElement.appendChild(liElement);

    }
    const totalLi = document.createElement('li');
    totalLi.textContent= `TOTAL : ${this.total} cookies`;
    ulElement.appendChild(totalLi);
  },


};

Lima.gitCookies();
Lima.render();
=======

let finalColumnArray =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const hours = [' Region      ', '6am' , '7am' ,'8pm' , '9am' , '10am' , '11am ','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',' daily total'];

let cookiesInfo = document.getElementById('info');

let articleElement = document.createElement('article');
cookiesInfo.appendChild(articleElement);
let tableelement = document.createElement('table');
articleElement.appendChild(tableelement);
tableelement.setAttribute('border','2');
let trHead=document.createElement('tr');

tableelement.appendChild(trHead);

for(let i=0 ; i<hours.length; i++){

  let th1 =document.createElement('th');

  th1.textContent= hours[i];
  trHead.appendChild(th1);

}


function SalmonCookies (name , max , min , avg){
  this.name = name;
  this.cookiesperh =[];
  this.total = 0;
  this.max = max;
  this.min = min	;
  this.avg =avg ;
  this.sales=0;
}


SalmonCookies.prototype.gitCookies= function() {
  for (let i=0 ; i<=hours.length ; i++){
    this.sales = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
    this.total += this.sales;

    this.cookiesperh.push(this.sales);

  }



};



SalmonCookies.prototype.render= function(){
  let totalrow=0;
  let trRow = document.createElement('tr');
  tableelement.appendChild(trRow);

  let column1 = document.createElement('th');
  column1.textContent = this.name;
  trRow.appendChild(column1);
  for(let i=0 ; i <14 ;i++){
    let contant = document.createElement('td');
    contant.textContent=this.cookiesperh[i];
    trRow.appendChild(contant);
    totalrow+= this.cookiesperh[i];
    finalColumnArray[i]+= this.cookiesperh[i];
    console.log(totalrow);

  }
  let columnTotal = document.createElement('td');
  columnTotal.textContent=totalrow;
  trRow.appendChild(columnTotal);

};



let Seattle= new SalmonCookies('Seatlle ',65 , 23 , 6.3);
let Tokyo= new SalmonCookies('TOKYO ',24 , 3 , 1.2);
let Dubai= new SalmonCookies('DUBAI ',38 ,11 , 3.7);
let Paris= new SalmonCookies('PARIS ',38 , 20 , 2.3);
let Lima= new SalmonCookies('LIMA ',16 ,2 , 4.6);


let city =[Seattle,Tokyo, Dubai,Paris,Lima];
for (let n=0; n<city.length ; n++){
  city[n].gitCookies();
  city[n].render();
}



function footer (){
  let trRow =document.createElement('tr');
  tableelement.appendChild(trRow);
  let column1 = document.createElement('th');
  column1.textContent='Total';
  trRow.appendChild(column1);

  //let total2 = 0;
  let allTotal=0;
  for (let j=0; j<city.length; j++){

    allTotal +=city[j].total;


  }
  for( let i =0 ; i< finalColumnArray.length ; i++){



    let td = document.createElement('th');
    td.textContent = finalColumnArray[i];
    trRow.appendChild(td);

  }
  let tdt = document.createElement('th');
  tdt.textContent = allTotal;
  trRow.appendChild(tdt);
}


footer();


