function changeColor(element) {
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    element.classList.add('active');
  }