// data-* atributos personalizados y accededidos

// Mostrar los atributos via JS.
var el = document.querySelector('#out');
el.setAttribute('data-foo', 'bar');

var html = [];
for (var key in el.dataset) {
  html.push(key, ': ', el.dataset[key], '<br>');
}

el.innerHTML = html.join('');
