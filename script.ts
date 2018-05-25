 class sight {
  constructor(public name, public city, public zipcode, public address, public image){
  }
 let karlskirche = new sight ("St. Charles Church", "Vienna", 1010, "Karslplatz 1", "img/karlskirche.jpg");
  let zoo = new sight ("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
  
  let places = [];
  places.push(karlskirche, zoo);

 function render(){
    for(i=0; i<places.length; i++){ 
    var row = document.getElementById("row1"); 
    var dummy = document.createElement("div");
    dummy.classList.add("col-lg-3");
    dummy.classList.add("col-md-6");
    dummy.classList.add("col-sm-12");
    dummy.classList.add("col-xs-12");
    row.appendChild(dummy);
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", places[i].image);
    $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(dummy).append(imgdiv);
    var name = document.createElement("h4");
    $(name).text(places[i].name);
    $(dummy).append(name);
    $(dummy).append(`<p> ${places[i].address} </p>`);
    $(dummy).append(`<p> ${places[i].zipcode} ${places[i].city} </p>`);
}

};

 render ();
};



 class restaurant extends sight {

  constructor(name, city, zipcode, address, image, telephone, type, web){
    super(name, city, zipcode, address, image);
    this.telephone = telephone;
    this.type = type;
    this.web = web;
  }

  let lemonleaf = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/thai.png", "+43(1)5812308", "Thai Restaurant", "www.lemonleaf.at");
  let sixta = new restaurant ("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43 1 58 528 56", "Viennese Restaurant", "http://www.sixta-restaurant.at/");

  let restaurants = [];
  restaurants.push(lemonleaf, sixta);


 function renderrestaurants(){
    for(i=0; i<restaurants.length; i++){ 
    var row = document.getElementById("row1"); 
    var dummy = document.createElement("div");
    dummy.classList.add("col-lg-3");
    dummy.classList.add("col-md-6");
    dummy.classList.add("col-sm-12");
    dummy.classList.add("col-xs-12");
    row.appendChild(dummy);
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", restaurants[i].image);
   $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(dummy).append(imgdiv);
    var name = document.createElement("h4");
    $(name).text(restaurants[i].name);
    $(dummy).append(name);
    $(dummy).append(`<p> ${restaurants[i].type} </p>`);
    $(dummy).append(`<p> ${restaurants[i].address} </p>`);
    $(dummy).append(`<p> ${restaurants[i].zipcode} ${restaurants[i].city} </p>`);
    $(dummy).append(`<p> Phonenumber: ${restaurants[i].telephone} </p>`);
    $(dummy).append(`<p> Webaddress: ${restaurants[i].web} </p>`);

}

};

 renderrestaurants ();

};



  class event extends sight {
    constructor(name, city, zipcode, address, image, date, time, ticket){
       super(name, city, zipcode, address, image);
       this.date = date;
       this.time = time;
       this.ticket = ticket;
    }
  let kristofferson = new event ("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kristofferson.jpeg", "Fr., 15. Jun.", "20:00", "58,50 EUR");
  let kravitz = new event ("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/kravitz.jpg", "Sat, 09.06.2018", "19:30", "47,80 EUR");

 let events = [];
  events.push(kristofferson, kravitz);

 function renderevents(){
    for(i=0; i< events.length; i++){ 
    var row = document.getElementById("row1"); 
    var dummy = document.createElement("div");
    dummy.classList.add("col-lg-3");
    dummy.classList.add("col-md-6");
    dummy.classList.add("col-sm-12");
    dummy.classList.add("col-xs-12");
    row.appendChild(dummy);
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    imgdiv.append(img);
    $(img).attr("src", events[i].image);
    $(imgdiv).addClass("d-none").addClass("d-md-block");
    $(dummy).append(imgdiv);
    var name = document.createElement("h4");
    $(name).text(events[i].name);
    $(dummy).append(name);
    $(dummy).append(`<p> ${events[i].date} ${events[i].time} </p>`);
    $(dummy).append(`<p> ${events[i].address} </p>`);
    $(dummy).append(`<p> ${events[i].zipcode} ${places[i].city} </p>`);
    $(dummy).append(`<p> Price: ${events[i].ticket} </p>`);
  };
};
renderevents();

  };

 





//   let karlskirche = new sight ("St. Charles Church", "Vienna", 1010, "Karslplatz 1", "img/karlskirche.jpg");
//   let zoo = new sight ("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
//   let lemonleaf = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/thai.png", "+43(1)5812308", "thai", "www.lemonleaf.at");
//   let sixta = new restaurant ("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43 1 58 528 56", "thai", "http://www.sixta-restaurant.at/");
//   let kristofferson = new event ("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kristofferson.jpeg", "Fr., 15. Jun.", "20:00", "58,50 EUR");
//   let kravitz = new event ("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/kravitz.jpg", "Sat, 09.06.2018", "19:30", "47,80 EUR");
  
//   let places = []
//   places.push(karlskirche, zoo, lemonleaf, sixta, kristofferson, kravitz);


 



 
