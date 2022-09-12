

openSigninBtn1.addEventListener('click', ()=>{
 signIn.classList.add('active');
 overlay.classList.add('active');
});

openLoginBtn.addEventListener('click', ()=>{
 login.classList.add('active');
 overlay.classList.add('active');
 signIn.classList.remove('active');
});

opensigninBtn.addEventListener('click', ()=>{
 signIn.classList.add('active');
 overlay.classList.add('active');
 login.classList.remove('active');
})

closeSigninBtn.addEventListener('click', ()=>{
 signIn.classList.remove('active');
 overlay.classList.remove('active');
});

closeSigninBtn2.addEventListener('click', ()=>{
 login.classList.remove('active');
 overlay.classList.remove('active');
});

$(document).ready(function(){
 $(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $(".navContainer").css("background" , "white");
  }

  else{
   $(".navContainer").css("background" , "#ffc017");  	
  }
 })
})

// Searching js algo..............

const blogs = [
  {
   AuthorName: 'Danielle Moodale',
  },
  {
   AuthorName: 'Susan Orlean',
  },
  {
   AuthorName: 'Brad Stullberg',
  },
  {
   AuthorName: 'Stevan C. Heyas',
  },
  {
   AuthorName: 'Ayala Laufer',
  },
  {
   AuthorName: 'Ed Ergenzinger',
  },
  {
   AuthorName: 'Edward Slingerland',
  },
  {
   AuthorName: 'Giddeon M-K',
  },
  {
   AuthorName: 'Indi.ca',
  },
  {
   AuthorName: 'Savala Nolan'
  }
 ];
