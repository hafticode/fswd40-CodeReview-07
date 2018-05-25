var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sight = /** @class */ (function () {
    function sight(name, city, zipcode, address, image) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
    }
    sight.prototype.render = function () {
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
        $(containerDiv).append("<p> " + this.address + " </p>");
        $(containerDiv).append("<p> " + this.zipcode + " " + this.city + " </p>");
    };
    return sight;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, zipcode, address, image, telephone, cuisine, web) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.telephone = telephone;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
    }
    restaurant.prototype.render = function () {
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
        $(containerDiv).append("<p> " + this.cuisine + " </p>");
        $(containerDiv).append("<p> " + this.address + " </p>");
        $(containerDiv).append("<p> " + this.zipcode + " " + this.city + " </p>");
        $(containerDiv).append("<p> Phonenumber: " + this.telephone + " </p>");
        $(containerDiv).append("<p> Webaddress: " + this.web + " </p>");
    };
    return restaurant;
}(sight));
var event = /** @class */ (function (_super) {
    __extends(event, _super);
    function event(name, city, zipcode, address, image, date, time, ticket) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.date = date;
        _this.time = time;
        _this.ticket = ticket;
        return _this;
    }
    event.prototype.render = function () {
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
        $(containerDiv).append("<p> " + this.date + " " + this.time + " </p>");
        $(containerDiv).append("<p> " + this.address + " </p>");
        $(containerDiv).append("<p> " + this.zipcode + " " + this.city + " </p>");
        $(containerDiv).append("<p> Price: " + this.ticket + " </p>");
    };
    return event;
}(sight));
var karlskirche = new sight("St. Charles Church", "Vienna", 1010, "Karslplatz 1", "img/karlskirche.jpg");
var zoo = new sight("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
var lemonleaf = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/thai.png", "+43(1)5812308", "Thai Cuisine", "www.lemonleaf.at");
var sixta = new restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43 1 58 528 56", "Viennese Cuisine", "http://www.sixta-restaurant.at/");
var kristofferson = new event("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kristofferson.jpeg", "Fr., 15. Jun.", "20:00", "58,50 EUR");
var kravitz = new event("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/kravitz.jpg", "Sat, 09.06.2018", "19:30", "47,80 EUR");
var places = [];
places.push(karlskirche, zoo, lemonleaf, sixta, kristofferson, kravitz);
for (i = 0; i < places.length; i++) {
    places[i].render();
}
;
