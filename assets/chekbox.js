const Checkbox = document.getElementById('ckConvertir');

Checkbox.addEventListener('click', e => {
  if(e.target.checked === true) {
    document.getElementById('ckCalculadora').checked=false
    
  }

});

const Checkbox1 = document.getElementById('ckCalculadora');

Checkbox1.addEventListener('click', e => {
  if(e.target.checked === true) {
    document.getElementById('ckConvertir').checked=false
  }

});