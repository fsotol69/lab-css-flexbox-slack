let burguer = document.getElementById('burguer');
let menu = document.getElementById('menu');

function resetBurguer() {
  if (burguer.classList.contains('close')) {
    burguer.classList.replace('close', 'open');
  }
}

function toggleBurguer() {
  if (burguer.classList.contains('open')) {
    burguer.classList.replace('open', 'close');
  } else {
    burguer.classList.replace('close', 'open');
  }
}

function resetMenuVisiblility() {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
}

function toggleMenuVisiblility() {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

function showMenu() {
  toggleMenuVisiblility();
  toggleBurguer();
}

function resetMenu() {
  resetMenuVisiblility();
  resetBurguer();
}
