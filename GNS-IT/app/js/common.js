var searchView = document.getElementById('search');
searchView.addEventListener("keyup", function(evt) {
  showCity(evt.target);
});

// input search
function showCity(obj) {
  var resultResponse,
    input = document.querySelector('.search > input'),
    list = input.nextElementSibling,
    li = '';
  if (obj.value.length > 2) {
    ajax = new XMLHttpRequest();
    ajax.open('GET', 'data/city.json');
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
        resultResponse = JSON.parse(ajax.responseText);
        resultResponse.forEach(function(i) {
          if (!i.toLowerCase().indexOf(obj.value.toLowerCase())) li += '<li>' + i + '</li>';
        });

        if (li) {
          list.innerHTML = li;
          list.style.display = 'block';
        } else list.style.display = 'none';

        list.onclick = function(e) {
          e = e || window.event;
          e = e.target || e.srcElement;
          if (e.tagName == 'LI') {
            input.value = e.textContent;
            this.style.display = 'none';
          }
        }
      }
    }
    ajax.send(null);
  } else if (obj.value.length <= 2) {
    list.style.display = 'none';
  }
}

// mobile menu button
var button = document.querySelector('.menu-toggle'),
  menuTop = document.querySelector('.menu');
button.onclick = function() {
  menuTop.style.display = menuTop.style.display == 'block' ? 'none' : 'block';
}

// change category
var clickCategory = document.querySelector('.change > span'),
  menuCategory = document.querySelector('.change > .category'),
  nameCategory = document.querySelectorAll('.category > input');
clickCategory.onclick = function() {
  menuCategory.style.display = menuCategory.style.display == 'block' ? 'none' : 'block';
  if (clickCategory.classList.contains('action')) {
    clickCategory.classList.remove('action')
  } else {
    clickCategory.classList.add('action')
  }
}

function radioGroupValue(radioGroupObj) {
  for (var i = 0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked) return radioGroupObj[i].value;
}
document.getElementById('rb1').checked = true;
menuCategory.onclick = function() {
  var valueRadioButtons = radioGroupValue(menuCategory);
  clickCategory.innerHTML = valueRadioButtons;
  menuCategory.style.display = 'none';
  clickCategory.classList.remove('action');
}
