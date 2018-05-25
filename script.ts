class sight {
  constructor(public name, public city, public zipcode, public address, public image){
  }

 render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    row.appendChild(containerDiv);

    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(containerDiv).append(imgdiv);

    var nameHeader = document.createElement("h4");
    $(nameHeader).text(this.name);
    $(containerDiv).append(nameHeader);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
  }

}

 
 class restaurant extends sight {

  constructor(name, city, zipcode, address, image, telephone, cuisine, web){
    super(name, city, zipcode, address, image);
    this.telephone = telephone;
    this.cuisine = cuisine;
    this.web = web;
  }

  render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    row.appendChild(containerDiv);
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(containerDiv).append(imgdiv);
    var nameHeader = document.createElement("h4");
    $(nameHeader).text(this.name);
    $(containerDiv).append(nameHeader);
    $(containerDiv).append(`<p> ${this.cuisine} </p>`);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
    $(containerDiv).append(`<p> Phonenumber: ${this.telephone} </p>`);
    $(containerDiv).append(`<p> Webaddress: ${this.web} </p>`);
  }
}



  class event extends sight {
    constructor(name, city, zipcode, address, image, date, time, ticket){
       super(name, city, zipcode, address, image);
       this.date = date;
       this.time = time;
       this.ticket = ticket;
    }

 render(){
    var row = document.getElementById("row1"); 
    var containerDiv = document.createElement("div");
    containerDiv.classList.add("col-lg-3");
    containerDiv.classList.add("col-md-6");
    containerDiv.classList.add("col-sm-12");
    containerDiv.classList.add("col-xs-12");
    row.appendChild(containerDiv);
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", this.image);
    $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(containerDiv).append(imgdiv);
    var nameHeader = document.createElement("h4");
    $(nameHeader).text(this.name);
    $(containerDiv).append(nameHeader);
    $(containerDiv).append(`<p> ${this.date} ${this.time} </p>`);
    $(containerDiv).append(`<p> ${this.address} </p>`);
    $(containerDiv).append(`<p> ${this.zipcode} ${this.city} </p>`);
    $(containerDiv).append(`<p> Price: ${this.ticket} </p>`);
  }
}

 
  let karlskirche = new sight ("St. Charles Church", "Vienna", 1010, "Karslplatz 1", "img/karlskirche.jpg");
  let zoo = new sight ("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
  let lemonleaf = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/thai.png", "+43(1)5812308", "Thai Cuisine", "www.lemonleaf.at");
  let sixta = new restaurant ("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43 1 58 528 56", "Viennese Cuisine", "http://www.sixta-restaurant.at/");
  let kristofferson = new event ("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kristofferson.jpeg", "Fr., 15. Jun.", "20:00", "58,50 EUR");
  let kravitz = new event ("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/kravitz.jpg", "Sat, 09.06.2018", "19:30", "47,80 EUR");
  
  let places = [];
  places.push(karlskirche, zoo, lemonleaf, sixta, kristofferson, kravitz);

  for(i=0;i<places.length; i++){
    places[i].render();
  };


 



 
