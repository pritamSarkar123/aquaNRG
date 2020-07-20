var mapLink=document.querySelector('.map-link');
var homeLink=document.querySelector('.home-link');
var mapdiv=document.querySelector('.mapdiv');


mapLink.addEventListener('click',(e)=>{
  if(homeLink.classList.contains('active')){
    homeLink.classList.remove('active');
  }
  mapLink.classList.add('active');
  if(mapdiv.classList.contains('mystyle')){
    mapdiv.classList.remove('mystyle');
  }
});
homeLink.addEventListener('click',(e)=>{
  if(mapLink.classList.contains('active')){
    mapLink.classList.remove('active');
  }
  homeLink.classList.add('active');
  if(!mapdiv.classList.contains('mystyle')){
    mapdiv.classList.add('mystyle');
  }
});
