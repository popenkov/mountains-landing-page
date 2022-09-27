ymaps.ready(init);
function init(){
    
    var myMap = new ymaps.Map("map", {
      
        center: [55.75181156899639,37.599291499999936],
       
        zoom: 16 ,
        controls: []
    });


myMap.geoObjects.add(new ymaps.Placemark([55.75181156899639,37.599291499999936],{},    
    {
   preset: 'islands#redDotIcon'
}));
}