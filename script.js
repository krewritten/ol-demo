///////////////////////////
// 1. Basic Boilerplate Map 
//
// - ol.layer
// - ol.proj
///////////////////////////

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-93.41, 45.82]),
        zoom: 7
    })
});



/////////////////////////
// 2. Add a Feature Service
/////////////////////////
// const esriFeatureService = 'https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/TrailsRegional/FeatureServer'
// var basemap = new ol.layer.Tile({
//     source: new ol.source.OSM({})
// })

// var trails = new ol.layer.Vector({
//     format: new ol.format.GeoJSON(),
//     source: new ol.source.Vector({
//         loader: function (extent, resolution, projection, success, failure) {
//             var url = 'https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/TrailsRegional/FeatureServer/0'
//             var xhr = new XMLHttpRequest();
//             xhr.open('GET', url);
//             xhr.onload = function() {
                
//                 if (xhr.status == 200) {
//                     var features = trails.GeoJSON
//                     trails.addFeatures(features)
//                     success(features);
//                 } else {
//                     this.onerror();
//                 }
//             }
//             xhr.send();
//         }
//     })
// })


// var map = new ol.Map({
//     target: 'map',
//     layers: [ basemap, trails],
//     view: new ol.View({
//         center: ol.proj.fromLonLat([-93.41, 45.82]),
//         zoom: 7
//     })
// });