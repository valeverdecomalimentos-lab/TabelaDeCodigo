// Vale Verde — comportamento compartilhado das páginas de tabela de código

document.addEventListener('DOMContentLoaded', function () {
  var logo = document.querySelector('.logo');
  if (!logo) return;

  logo.addEventListener('error', function () {
    logo.style.display = 'none';
    var fallback = document.querySelector('.brand-fallback');
    if (fallback) fallback.style.display = 'block';
  });
});
