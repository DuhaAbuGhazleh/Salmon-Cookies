


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
