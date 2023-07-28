window.onscroll = () => {

    // scroll sections
    
    Let sections = document.querySelectorAll('section");
    
    Let navLinks = document.querySelectorAll('header nav a');

    
    window.onscroll = () => {
    
       sections.forEach(sec => {
    
           Let top = window.scrolly;
           Let offset sec.offsetTop 100;
           Let height = sec.offsetHeight;
           Let id = sec.getAttribute('id');
    
    
          if(top >= offset && top < offset + height) {
    
        // active navbar Links
    
             navlinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href=' + id + ']').classList.add('active');
    
    
            });
    
        }
      
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}