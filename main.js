// open mobile menu
var nav = document.getElementById('nav')
function openMenu(id){
    if(nav.className.indexOf('open')==-1){
        nav.className += (' open')
    }else{
        nav.className = nav.className.replace('open','')
    }


}
// close item mobile menu
var menuItems = document.querySelectorAll('#nav li a[href *="#"]')
  for(var i=0; i<menuItems.length; i++){
      var menuItem = menuItems[i]
        menuItem.onclick = function(){
            nav.className = nav.className.replace('open','')
            }
 }
