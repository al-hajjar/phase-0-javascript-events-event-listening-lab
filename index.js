const btn = document.getElementById('input');
function clickAlert() {
    alert('I was clicked!');
  }

function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}

addingEventListener();