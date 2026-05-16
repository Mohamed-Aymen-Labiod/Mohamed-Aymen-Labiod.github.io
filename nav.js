// Mobile hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  if (!nav) return;

  // Create hamburger button
  var btn = document.createElement('button');
  btn.className = 'nav-burger';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(btn);

  // Create mobile menu overlay
  var menu = document.createElement('div');
  menu.className = 'nav-mobile-menu';

  // Clone all nav links (not name, not lang-switch)
  var links = nav.querySelectorAll('a:not(.nav-name):not(.lang-btn)');
  links.forEach(function (a) {
    var clone = a.cloneNode(true);
    menu.appendChild(clone);
  });

  // Clone lang switch
  var langSwitch = nav.querySelector('.lang-switch');
  if (langSwitch) {
    var lClone = langSwitch.cloneNode(true);
    lClone.className = 'lang-switch lang-switch-mobile';
    menu.appendChild(lClone);
  }

  document.body.appendChild(menu);

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
});
