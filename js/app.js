

const hours = ['6am' , '7am' ,'8pm' , '9am' , '10am' , '11am ','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let ALLtotal=[];

let counter = 0;
function SalmonCookies (name , max , min , avg){
  this.name = name;
  this.cookiesperh =[];
  this.total = 0;
  this.max = max;
  this.min = min	;
  this.avg =avg ;
  this.sales=0;
  ALLtotal.push(this);




}




SalmonCookies.prototype.gitCookies= function() {
  for (let i=0 ; i<=hours.length ; i++){
    this.sales = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
    this.total += this.sales;

    this.cookiesperh.push(this.sales);
  }

};
const infoElement = document.getElementById('info');

SalmonCookies.prototype.render= function(){
  infoElement.setAttribute('border','2');

  const trElement = document.createElement('tr');
  infoElement.appendChild(trElement);


  const thElement =document.createElement('th');
  thElement.textContent= this.name;
  trElement.appendChild(thElement);



  for(let i=0 ; i <hours.length ;i++){

    const tdElement = document.createElement('td');
    tdElement.textContent= this.cookiesperh[i];
    trElement.appendChild(tdElement);
  }
  const tdtotal = document.createElement('td');
  tdtotal.textContent= this.total;
  trElement.appendChild(tdtotal);

  counter++;

};

function headerOfTable (){

  const trElement = document.createElement('tr');
  infoElement.appendChild(trElement);


  const thElement =document.createElement('th');
  thElement.textContent= ('Areas');
  trElement.appendChild(thElement);

  for(let i=0 ; i <hours.length ;i++)
  {
    const thElement =document.createElement('th');
    thElement.textContent= hours[i];
    trElement.appendChild(thElement);
  }

  const totalElement =document.createElement('td');
  totalElement.textContent= ('Daily Sales');
  trElement.appendChild(totalElement);
}

function footerOfTable (){
  const trElement = document.createElement('tr');
  infoElement.appendChild(trElement);


  const thElement =document.createElement('th');
  thElement.textContent= ('Total');
  trElement.appendChild(thElement);


  for(let i=0 ; i <hours.length ;i++){
    let TotalOfHour =0;
    for(let j=0 ; j<ALLtotal.length ; j++){
      TotalOfHour += ALLtotal[j].cookiesperh[i];

    }
    const totalElement =document.createElement('td');
    totalElement.textContent= TotalOfHour;
    trElement.appendChild(totalElement);
  }
  let TotalOFtotal =0;
  for(let j=0 ; j<ALLtotal.length ; j++){
    TotalOFtotal += ALLtotal[j].total;
  }
  const totalElement =document.createElement('td');
  totalElement.textContent= TotalOFtotal;
  trElement.appendChild(totalElement);
}



let Seattle= new SalmonCookies('Seatlle ',65 , 23 , 6.3);
let Tokyo= new SalmonCookies('TOKYO ',24 , 3 , 1.2);
let Dubai= new SalmonCookies('DUBAI ',38 ,11 , 3.7);
let Paris= new SalmonCookies('PARIS ',38 , 20 , 2.3);
let Lima= new SalmonCookies('LIMA ',16 ,2 , 4.6);

headerOfTable();

let city =[Seattle,Tokyo, Dubai,Paris,Lima];
for (let n=0; n<city.length ; n++){
  city[n].gitCookies();
  city[n].render();
}

footerOfTable();




let NameOfAreaForm= document.getElementById('NameOfAreaForm');
NameOfAreaForm.addEventListener('submit', submitHandler);
function submitHandler(event) {

  event.preventDefault();

  let nameN = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  let newArea = new SalmonCookies(nameN , max , min , avg);


  newArea.gitCookies();
  newArea.render();
  console.log(newArea);
  footerOfTable2();

}





function footerOfTable2 (){
  infoElement.removeChild(infoElement.childNodes[counter]);
  const trElement = document.createElement('tr');
  infoElement.appendChild(trElement);


  const thElement =document.createElement('th');
  thElement.textContent= ('Total');
  trElement.appendChild(thElement);


  for(let i=0 ; i <hours.length ;i++){
    let TotalOfHour =0;
    for(let j=0 ; j<ALLtotal.length ; j++){
      TotalOfHour += ALLtotal[j].cookiesperh[i];

    }
    const totalElement =document.createElement('td');
    totalElement.textContent= TotalOfHour;
    trElement.appendChild(totalElement);
  }
  let TotalOFtotal =0;
  for(let j=0 ; j<ALLtotal.length ; j++){
    TotalOFtotal += ALLtotal[j].total;
  }
  const totalElement =document.createElement('td');
  totalElement.textContent= TotalOFtotal;
  trElement.appendChild(totalElement);
}
