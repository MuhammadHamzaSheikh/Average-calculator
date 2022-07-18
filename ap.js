var islamiyat = document.querySelector('#islamiyat');
var Urdu = document.querySelector('#Urdu');
var English = document.querySelector('#English');
var Math = document.querySelector('#Math');
console.log(islamiyat);
var resultscreen = document.querySelector('#Result');

function Calculate() {
  var result = +islamiyat.value + +Urdu.value + +English.value + +Math.value;
  console.log(result);
  var finalresult = result / 4;
  resultscreen.innerHTML = finalresult;
  // Swal.fire(finalresult.toString());
  Swal.fire({
    icon: 'success',
    title: 'Avarage.',
    text: finalresult.toString(),
    footer:
      '<a href="https://twitter.com/Hamza_Sheikh17">Follow me on instagram!</a>',
  });
}

function resetvalu() {
  resultscreen.innerHTML = '';

  islamiyat.value = '';
  Urdu.value = '';
  English.value = '';
  Math.value = '';
}
