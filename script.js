"use strict"



// work experience

/* .on() used in case there is ajax loaded content. */
// #toggleMessage
$("body").on("click", "#toggleMessage", function() {
  $("#box").slideToggle("slow"); /*shows or hides #box*/
  
  /*$(this) refers to the targeted element: #toggleMessage*/
  let text = $(this).text();
  
  if (text=="Show") { /*if text inside #toggleMessage is Show...*/
    $(this).text(); /*Change button text to Hide*/
  }
  else {
    $(this).text(); /*Change button text to Show*/
  }
});

// #toggleMessage1
$("body").on("click", "#toggleMessage1", function() {
  $("#box1").slideToggle("slow"); /*shows or hides #box1*/
  
  /*$(this) refers to the targeted element: #toggleMessage*/
  let text = $(this).text();
  
  if (text=="Show") { /*if text inside #toggleMessage is Show...*/
    $(this).text(); /*Change button text to Hide*/
  }
  else {
    $(this).text(); /*Change button text to Show*/
  }
});

// #toggleMessage2
$("body").on("click", "#toggleMessage2", function() {
  $("#box2").slideToggle("slow"); /*shows or hides #box2*/
  
  /*$(this) refers to the targeted element: #toggleMessage*/
  let text = $(this).text();
  
  if (text=="Show") { /*if text inside #toggleMessage is Show...*/
    $(this).text(); /*Change button text to Hide*/
  }
  else {
    $(this).text(); /*Change button text to Show*/
  }
});

// #toggleMessage3
$("body").on("click", "#toggleMessage3", function() {
  $("#box3").slideToggle("slow"); /*shows or hides #box3*/
  
  /*$(this) refers to the targeted element: #toggleMessage*/
  let text = $(this).text();
  
  if (text=="Show") { /*if text inside #toggleMessage is Show...*/
    $(this).text(); /*Change button text to Hide*/
  }
  else {
    $(this).text(); /*Change button text to Show*/
  }
});



// counter


function CountUp(initDate, id) {
  this.beginDate = new Date(initDate);
  this.countainer = document.getElementById(id);
  this.numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
  this.hours = 0, this.minutes = 0, this.seconds = 0;
  this.milliseconds = 0;
  this.updateNumOfDays();
  this.updateCounter();
}

CountUp.prototype.updateNumOfDays = function() {
  let dateNow = new Date();
  let currYear = dateNow.getFullYear();
  if ((currYear % 4 == 0 && currYear % 100 != 0) || currYear % 400 == 0) {
    this.numOfDays[1] = 29;
  }
  let self = this;
  setTimeout(function() {
    self.updateNumOfDays();
  }, (new Date((currYear + 1), 1, 2) - dateNow));
}

CountUp.prototype.datePartDiff = function(then, now, MAX) {
  let diff = now - then - this.borrowed;
  this.borrowed = 0;
  if (diff > -1) return diff;
  this.borrowed = 1;
  return (MAX + diff);
}

CountUp.prototype.calculate = function() {
  let currDate = new Date();
  let prevDate = this.beginDate;
  this.milliseconds = this.datePartDiff(prevDate.getMilliseconds(), currDate.getMilliseconds(), 1000);
  this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
  this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
  this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
  this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
  this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
  this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(), 0);
}

CountUp.prototype.addLeadingZero = function(value) {
  return value < 10 ? ("0" + value) : value;
}

CountUp.prototype.addLeadingZeroMillisecond = function(value) {
  if (value < 10) return ("00" + value);
  else if (value < 100) return ("0" + value);
  else return value;
}

CountUp.prototype.formatTime = function() {
  this.milliseconds = this.addLeadingZeroMillisecond(this.milliseconds);
  this.seconds = this.addLeadingZero(this.seconds);
  this.minutes = this.addLeadingZero(this.minutes);
  this.hours = this.addLeadingZero(this.hours);
}

CountUp.prototype.updateCounter = function() {
  this.calculate();
  this.formatTime();
  this.countainer.innerHTML =
    "<span class='years'>" + this.years + " " + (this.years == 1 ? "" : "") + "</span>" +
    "<span class='months'>" + this.months + " " + (this.months == 1 ? "" : "") + "</span>" +
    "<span class='days'>" + this.days + " " + (this.days == 1 ? "" : "") + "</span>" +
    "<span class='hours'>" + this.hours + " " + (this.hours == 1 ? "" : "") + "</span>" +
    "<span class='minutes'>" + this.minutes + " " + (this.minutes == 1 ? "" : "") + "</span>" +
    "<span class='seconds'>" + this.seconds + " " + (this.seconds == 1 ? "" : "")
  let self = this;
  setTimeout(function() {
    self.updateCounter();
  }, 1);
}

window.onload = function() {
  new CountUp ('September 1, 2017 11:00:00', 'counter');
}


// top btn


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}