const observer= new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
          else{
              entry.target.classList.remove('show');
          }
});
});
const hiddenElements = document.querySelectorAll(".hiddenn");
hiddenElements.forEach((el) => observer.observe(el));



$(document).ready(function(){
    $('.carousel').carousel({
			padding: 200
	});
	autoplay();
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4500);
	}
  });
