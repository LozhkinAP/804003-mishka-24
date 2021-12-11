ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [59.938635, 30.323118],
      zoom: 19
  });
  var myPlacemark = new ymaps.Placemark([59.938635, 30.323118]);
  myMap.geoObjects.add(myPlacemark);
}
