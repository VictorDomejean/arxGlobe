
// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
let CartoAttribution = 'Map tiles by <a href="https://carto.com">Carto</a>, under CC BY 3.0. Data by <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.'
var imageryViewModels = [];

imageryViewModels.push(new Cesium.ProviderViewModel({
name: 'Positron without labels',
tooltip: 'CartoDB Positron without labels basemap',
iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/light_nolabels/5/15/12.png',
creationFunction: function() {
  return new Cesium.UrlTemplateImageryProvider({
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png',
    credit: CartoAttribution,
    minimumLevel: 0,
    maximumLevel: 18
  });
}
}));
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    timeline: false,
    animation: false,
    baseLayerPicker: true,
    fullscreenButton: false,
    geocoder: false,
    selectionIndicator: false,
    infoBox: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    geocoder: false,
    creditContainer: document.createElement("none"),
    skyAtmosphere: false,
    imageryProviderViewModels: imageryViewModels,
    imageryProvider:imageryViewModels[0],
    selectedImageryProviderViewModel: imageryViewModels[0]
});

viewer.scene.backgroundColor = Cesium.Color.WHITE;
viewer.scene.fog.enabled = false;
viewer.scene.globe.showGroundAtmosphere = false;
viewer.scene.screenSpaceCameraController.enableTilt   = false;
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 2000000;
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;


viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(6.131846,46.186421, 20000000),

});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.131846, 46.186421),
    billboard: {
      image: "logo.png",
      sacle: 0.5, width:60, height:60,eyeOffset: new Cesium.Cartesian3(0.0, 0.0, -100000)
    },
  });
viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.876122,45.763146),
    billboard: {
      image: "logo.png",
      sacle: 0.5, width:60, height:60,eyeOffset: new Cesium.Cartesian3(0.0, 0.0, -100000)
    },
  });
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.157905,46.139970),
    billboard: {
      image: "logo.png",
      sacle: 0.5, width:60, height:60,eyeOffset: new Cesium.Cartesian3(0.0, 0.0, -100000)
    },
  });


  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(7.417975,43.731130),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.8414,45.7589),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.6808,48.1142),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.0214,47.2422),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.9444,49.4178),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(3.6989,43.6489),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.3764,43.2967),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.9664,45.7444),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.1342,48.8047),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.5539,47.2172),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.5986,48.8592),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.9306,43.1250),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(3.0575,50.6319),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.2036,48.8906),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.3897,45.4339),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.7700,48.0728),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(1.9042,47.9022),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(8.7364,41.9256),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.6808,48.1142),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.0325,48.7706),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.0419,47.3231),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(7.5320,46.2918),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(102.6000,17.9667),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(45.2317,-12.7814),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.6333,46.5333),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(166.4500,-22.2667),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.1500,46.2000),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.1500,46.2000),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.1500,46.2000),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.4167,6.3667),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.8414,45.7589),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.4622,46.3250),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.5794,44.8378),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(0.3353,46.5811),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.6344,45.7453),
    billboard: {
      image: "pin2.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.359722222,43.83833333),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.352222222,48.85666667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(7.268333333,43.70194444),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-52.335,4.938611111),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.920833333,45.56638889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.352222222,48.85666667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.021388889,47.24222222),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(23.72805556,37.98416667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(0.159444444,45.64944444),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(6.266666667,46.41666667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-4.015753,5.319239),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.553888889,47.21722222),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.841388889,45.75888889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(3.877230556,43.61091944),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.151388889,46.15944444),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.841388889,45.75888889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.352222222,48.85666667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.395555556,47.08361111),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-4.600555556,48.38),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-2.9825,47.66777778),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.841388889,45.75888889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.579444444,44.83777778),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.395555556,47.08361111),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.841388889,45.75888889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-1.310833333,46.14972222),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(5.59,45.36333333),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(4.841388889,45.75888889),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(2.352222222,48.85666667),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-0.966944444,45.94194444),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-2.761666667,47.655),
    billboard: {
      image: "pin.png",
      sacle: 0.5, width:15, height:15*1.46
    },
  });

viewer.scene.skyBox.destroy();
viewer.scene.skyBox = undefined;
viewer.scene.sun.destroy();
viewer.scene.sun = undefined;
viewer.scene.moon.destroy();
viewer.scene.moon = undefined;
viewer.scene.globe.depthTestAgainstTerrain = false;


toolbar = document.getElementsByClassName('cesium-viewer-toolbar')[0]
console.log(toolbar)
toolbar.style.display = 'none'