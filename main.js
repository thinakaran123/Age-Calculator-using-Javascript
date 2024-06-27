document.getElementsByTagName("img")[0].addEventListener("click", function () {
  valueofdaybox = document.getElementById("daybox");
  valueofmonthbox = document.getElementById("monthbox");
  valueofyearbox = document.getElementById("yearbox");

  currentyear = new Date().getFullYear();

  //condition to chk the given date
  givendate =
    valueofdaybox.value +
    "/" +
    valueofmonthbox.value +
    "/" +
    valueofyearbox.value;
  chkdate = new Date(givendate);

  if (chkdate == "Invalid Date") {
    document.getElementById(
      "daybox"
    ).nextElementSibling.nextElementSibling.style.display = "block";
    document.getElementById("daybox").previousElementSibling.style.color =
      lightred;
    document.getElementById("daybox").style.borderColor = lightred;

    document.getElementById(
      "monthbox"
    ).nextElementSibling.nextElementSibling.style.display = "block";
    document.getElementById("monthbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("monthbox").style.borderColor = lightred;

    document.getElementById(
      "yearbox"
    ).nextElementSibling.nextElementSibling.style.display = "block";
    document.getElementById("yearbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("yearbox").style.borderColor = lightred;
  }

  //day box cond

  if (valueofdaybox.value == "") {
    document.getElementById("daybox").nextElementSibling.style.display =
      "block";
    document.getElementById("validmsg").style.display = "none";

    document.getElementById("daybox").previousElementSibling.style.color =
      lightred;
    document.getElementById("daybox").style.borderColor = lightred;
  }
  if (valueofdaybox.value > 31) {
    document.getElementById(
      "daybox"
    ).nextElementSibling.nextElementSibling.style.display = "block";
    document.getElementById("daybox").previousElementSibling.style.color =
      lightred;
    document.getElementById("daybox").style.borderColor = lightred;
  }

  //month box cond
  if (valueofmonthbox.value > 12) {
    document.getElementById(
      "monthbox"
    ).nextElementSibling.nextElementSibling.style.display = "block";
    document.getElementById("monthbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("monthbox").style.borderColor = lightred;
  }
  if (valueofmonthbox.value == "") {
    document.getElementById(
      "monthbox"
    ).nextElementSibling.nextElementSibling.style.display = "none";

    document.getElementById("monthbox").nextElementSibling.style.display =
      "block";
    document.getElementById("monthbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("monthbox").style.borderColor = lightred;
  }

  //year box cond
  if (valueofyearbox.value > currentyear) {
    document.getElementById(
      "yearbox"
    ).nextElementSibling.nextElementSibling.style.display = "block";

    document.getElementById("yearbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("yearbox").style.borderColor = lightred;
  }
  if (valueofyearbox.value == "") {
    document.getElementById(
      "yearbox"
    ).nextElementSibling.nextElementSibling.style.display = "none";

    document.getElementById("yearbox").nextElementSibling.style.display =
      "block";
    document.getElementById("yearbox").previousElementSibling.style.color =
      lightred;
    document.getElementById("yearbox").style.borderColor = lightred;
  }

  //output to display
  //---------------------------------------------

  event.preventDefault();
  givendate = document.getElementById("daybox").value;
  givenmonth = document.getElementById("monthbox").value;
  givenyear = document.getElementById("yearbox").value;
  date = new Date();
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (givendate > day) {
    day = day + months[month - 1];
    month = month - 1;
  }
  if (givenmonth > month) {
    month = month + 12;
    year = year - 1;
  }
  opday = day - givendate;
  opmonth = month - givenmonth;
  opyear = year - givenyear;
  lastdisplaysection = document.getElementById("lastdisplaysection");
  lastdisplaysection.querySelectorAll("span")[0].innerHTML = opyear;
  lastdisplaysection.querySelectorAll("span")[1].innerHTML = opmonth;
  lastdisplaysection.querySelectorAll("span")[2].innerHTML = opday;
});
