

const hours = ['       ', '6am' , '7am' ,'8pm' , '9am' , '10am' , '11am ','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',' daily total'];

let cookiesInfo = document.getElementById('info');

let articleElement = document.createElement('article');
cookiesInfo.appendChild(articleElement);
let tableelement = document.createElement('table');
articleElement.appendChild(tableelement);
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
  let trRow = document.createElement('tr');
  tableelement.appendChild(trRow);

  let column1 = document.createElement('th');
  column1.textContent = this.name;
  trRow.appendChild(column1);
  for(let i=1 ; i <hours.length ;i++){
    let contant = document.createElement('td');
    contant.textContent=this.cookiesperh[i];
    trRow.appendChild(contant);

  }
  let columnTotal = document.createElement('td');
  columnTotal.textContent=this.total;
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
  let column1 = document.createElement('td');
  column1.textContent='total';
  trRow.appendChild(column1);

  let total2 = [0];
  let allTotal=0;
  for (let j=0; j<city.length; j++){

    allTotal +=city[j].total;


  }
  for( let i =0 ; i< hours.length ; i++){


    for (let j=0 ; j< city.length ; j++){
      total2 += city[j].sales[i];


    }
    let td = document.createElement('td');
    td.textContent = total2;
    trRow.appendChild(td);

  }
  let tdt = document.createElement('td');
  tdt.textContent = allTotal;
  trRow.appendChild(tdt);
}


footer();

