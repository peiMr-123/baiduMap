var map = new BMap.Map('maps');
var mapStyleV2 = {
  styleJson: [
    {
      "featureType": "land",
      "elementType": "geometry",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": {
        "color": "#4487D8ff"
      }
    },
    {
      "featureType": "green",
      "elementType": "geometry",
      "stylers": {
        "color": "#042656ff"
      }
    },
    {
      "featureType": "highway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "highway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "nationalway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "provincialway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "cityhighway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "nationalway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "provincialway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "cityhighway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "building",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#042656ff"
      }
    },
    {
      "featureType": "building",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "tertiaryway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "tertiaryway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "fourlevelway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "fourlevelway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "local",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "local",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "scenicspotsway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#031b3bff"
      }
    },
    {
      "featureType": "scenicspotsway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#275a8fff"
      }
    },
    {
      "featureType": "universityway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#dfe4ebff"
      }
    },
    {
      "featureType": "universityway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#ffffffff"
      }
    },
    {
      "featureType": "vacationway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#dfe4ebff"
      }
    },
    {
      "featureType": "vacationway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#ffffffff"
      }
    },
    {
      "featureType": "town",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 18
      }
    },
    {
      "featureType": "highway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "nationalway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "provincialway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "cityhighway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c0792dff"
      }
    },
    {
      "featureType": "cityhighway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c0792dff"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "cityhighway",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "provincialway",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "nationalway",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "highway",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "companylabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "companylabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "companylabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "lifeservicelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "lifeservicelabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "lifeservicelabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "carservicelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "carservicelabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "carservicelabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "financelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "financelabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "financelabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "tertiaryway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "tertiaryway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "tertiaryway",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "fourlevelway",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "fourlevelway",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "fourlevelway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "local",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "local",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "local",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "companylabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "lifeservicelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "carservicelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "financelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "geometry",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "subway",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "12"
      }
    },
    {
      "featureType": "subway",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "13"
      }
    },
    {
      "featureType": "subway",
      "elementType": "geometry",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "12"
      }
    },
    {
      "featureType": "subway",
      "elementType": "geometry",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "13"
      }
    },
    {
      "featureType": "subwaylabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,13",
        "level": "13"
      }
    },
    {
      "featureType": "subwaylabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,13",
        "level": "13"
      }
    },
    {
      "featureType": "subwaylabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,13",
        "level": "13"
      }
    },
    {
      "featureType": "railway",
      "elementType": "geometry",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "10"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "11"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "12"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "13"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "14"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "15"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "10"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "11"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "12"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "13"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "14"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "15"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "10"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "11"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "12"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "13"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "14"
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "10,15",
        "level": "15"
      }
    },
    {
      "featureType": "city",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "continent",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "medicallabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "medicallabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "medicallabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "medicallabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "12"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "13"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "14"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "15"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "16"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "17"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "12"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "13"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "14"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "15"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "16"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "17"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "12"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "13"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "14"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "15"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "16"
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,17",
        "level": "17"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "estatelabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "estatelabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "estatelabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "estatelabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "13"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "14"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "15"
      }
    },
    {
      "featureType": "estatelabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,16",
        "level": "16"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "businesstowerlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "12"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "13"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "14"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "15"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "16"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "12"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "13"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "14"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "15"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "16"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "12"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "13"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "14"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "15"
      }
    },
    {
      "featureType": "businesstowerlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,16",
        "level": "16"
      }
    },
    {
      "featureType": "governmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "13"
      }
    },
    {
      "featureType": "governmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "14"
      }
    },
    {
      "featureType": "governmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "15"
      }
    },
    {
      "featureType": "governmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "16"
      }
    },
    {
      "featureType": "governmentlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "17"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "13"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "14"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "15"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "16"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "17"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "13"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "14"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "15"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "16"
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,17",
        "level": "17"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "13"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "14"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "15"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "16"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "17"
      }
    },
    {
      "featureType": "restaurantlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "18"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "13"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "14"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "15"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "16"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "17"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "18"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "13"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "14"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "15"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "16"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "17"
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,18",
        "level": "18"
      }
    },
    {
      "featureType": "hotellabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "14"
      }
    },
    {
      "featureType": "hotellabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "15"
      }
    },
    {
      "featureType": "hotellabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "16"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 22,
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "14"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 22,
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "15"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 22,
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "16"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "14"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "15"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "16"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "14"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "15"
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "14,16",
        "level": "16"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "11"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "12"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "13"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "14"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "15"
      }
    },
    {
      "featureType": "shoppinglabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "16"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "11"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "12"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "13"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "14"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "15"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "16"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "11"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "12"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "13"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "14"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "15"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,16",
        "level": "16"
      }
    },
    {
      "featureType": "shoppinglabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "hotellabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "restaurantlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "governmentlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "companylabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "entertainmentlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "medicallabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "scenicspotslabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "airportlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "education",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "transportationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "12"
      }
    },
    {
      "featureType": "transportationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "13"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "12"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "13"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "12"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,13",
        "level": "13"
      }
    },
    {
      "featureType": "educationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "11"
      }
    },
    {
      "featureType": "educationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "12"
      }
    },
    {
      "featureType": "educationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "13"
      }
    },
    {
      "featureType": "educationlabel",
      "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "14"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "11"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "12"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "13"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "14"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "11"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "12"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "13"
      }
    },
    {
      "featureType": "educationlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,14",
        "level": "14"
      }
    },
    {
      "featureType": "transportationlabel",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "manmade",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "scenicspots",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#ab76b6ff"
      }
    },
    {
      "featureType": "scenicspots",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 23
      }
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "districtlabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "districtlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#c6e8ff00"
      }
    },
    {
      "featureType": "districtlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "districtlabel",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "continent",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "city",
      "elementType": "labels",
      "stylers": {
        "visibility": "on"
      }
    },
    {
      "featureType": "city",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "city",
      "elementType": "labels.text.stroke",
      "stylers": {
        "weight": 0,
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "city",
      "elementType": "labels.text",
      "stylers": {
        "fontsize": 24
      }
    },
    {
      "featureType": "country",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "country",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "district",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "district",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "town",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "town",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "village",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "village",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "poilabel",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#c6e8ffff"
      }
    },
    {
      "featureType": "scenicspots",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "scenicspots",
      "elementType": "geometry",
      "stylers": {
        "color": "#042656ff"
      }
    },
    {
      "featureType": "provincialway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "education",
      "elementType": "geometry",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "education",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "medical",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "transportation",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff00"
      }
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "highway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffffff"
      }
    },
    {
      "featureType": "medical",
      "elementType": "geometry",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "transportation",
      "elementType": "geometry",
      "stylers": {
        "color": "#04316cff"
      }
    },
    {
      "featureType": "airportlabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "nationalway",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffffff"
      }
    },
    {
      "featureType": "poilabel",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#ffffff0"
      }
    },
    {
      "featureType": "airportlabel",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "on"
      }
    }
  ]
};
var point = new BMap.Point(120.49226, 36.15661); //经纬度
var marker = new BMap.Marker(point)   // 创建标注  
// let icon1 = new BMap.Icon('./2.png', new BMap.Size(30, 23))
// let marker = new BMap.Marker(point, {
//   icon: icon1
// })
map.addOverlay(marker)   // 将标注添加到地图中
map.centerAndZoom(point, 17);    //初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(); //开启鼠标滚轮缩放

// 个性化
// map.setMapStyleV2(mapStyleV2); 
// map.setMapStyleV2({style:'grassgreen'});
// 个性化地图控件 mapStyleV2：通过样式JSON调用个性化地图样式
//模板
//默认地图样式(normal)
//清新蓝风格(light)
//黑夜风格(dark)
//清新蓝绿风格(bluish)
//高端灰风格(grayscale)
//强边界风格(hardedge)//青春绿风格(darkgreen)//浪漫粉风格(pink)
//午夜蓝风格(midnight)
//自然绿风格(grassgreen)
//精简风格(googlelite)
//红色警戒风格(redalert)




//设置地图类型
//BMAP_NORMAL_MAP 此地图类型展示普通街道视图
//BMAP_SATELLITE_MAP此地图类型展示卫星视图
//BMAP_HYBRID_MAP此地图类型展示卫星和路网的混合视图
const mapTypes = ['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP'].map(k => window[k]).filter(Boolean);  //混合
const control = new BMap.MapTypeControl({ //地图类型控件，默认位于地图右上方(地图，卫星，三维)。
  anchor: window.BMAP_ANCHOR_TOP_RIGHT, //右上
  mapTypes  //类型
});

// 两秒后平滑移动
// window.setTimeout(function () {

//   map.panTo(new BMap.Point(116.409, 39.918));

// }, 2000);
var opts = {
  width: 350,     // 信息窗口宽度
  height: 100,    // 信息窗口高度
}

var info = '<div class="wrap"><div class="left"><span></span><img src="https://bat100-sys.oss-cn-beijing.aliyuncs.com/Admin/ImageGallery/166141903563073e1b5b7c2.png"></div><div class="right"><p class="title">百辐网络科技集团有限公司</p><p class="location">青岛市崂山区海信创智谷</p></div></div>'
var infoWindow = new BMap.InfoWindow(info, opts);  // 创建信息窗口对象
map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口
// map.addOverlay(Circle)

// 点击事件
marker.addEventListener("click", function () {
  map.openInfoWindow(infoWindow, point);        // 打开信息窗口
});

var circle = new BMap.Circle(point, 50, { strokeColor: "#1284e6", fillColor:'rgba(18, 132, 230,.3)',strokeWeight: 2, strokeOpacity: 0.5 }); //创建圆
circle.getFillColor('red')
map.addOverlay(circle);
// 设置圆可编辑拖拽
// circle.enableEditing()




map.addControl(control); //添加控件

map.reset(); //重置
map.addEventListener("zoomend", function () {
  console.log(map.getZoom()) //当前缩放级别
});
