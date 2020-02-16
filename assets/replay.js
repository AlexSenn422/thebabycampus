
(function(w,d,n,u,o,t,m){w['SrecObject']=o;w[o]=w[o]||function(){
(w[o].q=w[o].q||[]).push(arguments)},w[o].l=1*new Date();t=d.createElement(n),
m=d.getElementsByTagName(n)[0];t.async=1;t.src=u;m.parentNode.insertBefore(t,m)
})(window,document,'script','https://replayapp.tk/collect/initialize.js','srec');
srec('init', 'e89dfe70-1da1-11ea-9364-d8c5fbbe1c8c');

function __brGetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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

window.__brCartToken = ""
function __brTokenSet(){
  var currCartToken = __brGetCookie('cart')
  
  if(currCartToken.length == 0) return;
  if(currCartToken == window.__brCartToken) return;

  window.__brCartToken = currCartToken;
  
  srec('tag', 'items_in_cart')
}

__brTokenSet()
window.setInterval(__brTokenSet, 1000)
    