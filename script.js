const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', e => {
  burger.dataset.state === 'closed' ? burger.dataset.state = "open" : burger.dataset.state = "closed";
  nav.dataset.state === "closed" ? nav.dataset.state = "open" : nav.dataset.state = "closed";
  nav.dataset.state === "open" ? nav.style.boxShadow = "0 0 15px #000" : nav.style.boxShadow = "0 0 0 #000";
});

const darkmode = document.querySelector('.switch input[type="checkbox"]');
function switchTheme(e) {
  if (e.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    setCookie("dark mode", "dark", 365);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    setCookie("dark mode", "light", 365);
    if(getCookie("Alert") == "no"){
    } else {
      window.alert("Eww Gross. Light Mode");
    }
  }
}
darkmode.addEventListener('change', switchTheme, false);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var dark = getCookie("dark mode");
  if (dark == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("dark-mode").checked = true;
  } else if(dark == "light"){
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("dark-mode").checked = false;
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("dark-mode").checked = true;
  }
}
checkCookie();
setCookie("i be watching u", true, 365);
