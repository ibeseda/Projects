function showCity(e){var t,n=document.querySelector(".search > input"),a=n.nextElementSibling,o="";e.value.length>2?(ajax=new XMLHttpRequest,ajax.open("GET","data/city.json"),ajax.onreadystatechange=function(){4==ajax.readyState&&200==ajax.status&&(t=JSON.parse(ajax.responseText),t.forEach(function(t){t.toLowerCase().indexOf(e.value.toLowerCase())||(o+="<li>"+t+"</li>")}),o?(a.innerHTML=o,a.style.display="block"):a.style.display="none",a.onclick=function(e){e=e||window.event,e=e.target||e.srcElement,"LI"==e.tagName&&(n.value=e.textContent,this.style.display="none")})},ajax.send(null)):e.value.length<=2&&(a.style.display="none")}function radioGroupValue(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t].value}var searchView=document.getElementById("search");searchView.addEventListener("keyup",function(e){showCity(e.target)});var button=document.querySelector(".menu-toggle"),menuTop=document.querySelector(".menu");button.onclick=function(){menuTop.style.display="block"==menuTop.style.display?"none":"block"};var clickCategory=document.querySelector(".change > span"),menuCategory=document.querySelector(".change > .category"),nameCategory=document.querySelectorAll(".category > input");clickCategory.onclick=function(){menuCategory.style.display="block"==menuCategory.style.display?"none":"block",clickCategory.classList.contains("action")?clickCategory.classList.remove("action"):clickCategory.classList.add("action")},document.getElementById("rb1").checked=!0,menuCategory.onclick=function(){var e=radioGroupValue(menuCategory);clickCategory.innerHTML=e,menuCategory.style.display="none",clickCategory.classList.remove("action")};