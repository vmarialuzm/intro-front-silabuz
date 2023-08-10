const form = document.querySelector('#form');

form.onsubmit = function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('input');
  const body = {};
  inputs.forEach((input) => (body[input.name] = input.value));
  console.log('normal', body);
  console.log('convertido', JSON.stringify(body));
  Swal.fire({
    text: 'Data enviada',
    icon: 'success',
  });
};