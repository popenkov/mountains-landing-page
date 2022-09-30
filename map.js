ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [40.730491, -73.872456],

    zoom: 16,
    controls: [],
  });

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [40.730491, -73.872456],
      {},
      {
        preset: 'islands#redDotIcon',
      }
    )
  );
}
