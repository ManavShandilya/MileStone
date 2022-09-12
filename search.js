searchBtn.addEventListener('click', () => {
 input = input.value;
 input = input.toLowerCase();
 console.log(input);
 for(i = 0; i<authors.length(); i++){
  if(authors[i].innerHTML.toLowerCase().includes(input)){
   blogs[i].style.display = "flex";
  }
  else{
   blogs[i].style.display = "none";
  }
 }
})