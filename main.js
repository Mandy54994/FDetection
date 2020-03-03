function runDot() {
    console.log('running');
    setTimeout(function () {
        $('div span:nth-child(1)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 1500);
    setTimeout(function () {
        $('div span:nth-child(2)').css("background-color", "#6c63ff");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        $('div span:nth-child(3)').css("background-color", "#e5e5e5");
    }, 3000);
    setTimeout(function () {
        $('div span:nth-child(3)').css("background-color", "#6c63ff");
        $('div span:nth-child(2)').css("background-color", "#e5e5e5");
        $('div span:nth-child(1)').css("background-color", "#e5e5e5");
    }, 4500);
}

function runDiv() {
    setTimeout(function () {
        $('.rectangle10').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 1500);
    setTimeout(function () {
        $('.rectangle11').css("background-color", "#6c63ff");
        $('.rectangle10').css("background-color", "#e5e5e5");
        $('.rectangle12').css("background-color", "#e5e5e5");
    }, 3000);
    setTimeout(function () {
        $('.rectangle12').css("background-color", "#6c63ff");
        $('.rectangle11').css("background-color", "#e5e5e5");
        $('.rectangle10').css("background-color", "#e5e5e5");
    }, 4500);
}
$(document).ready(function () {
    $('.collapsible').collapsible();
    console.log("Ready!");
    runDot();
    runDiv();
    var myDOt = setInterval("runDot()", 4500);
    var myDiv = setInterval("runDiv()", 4500);
    $('.vom').click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('div span:nth-child(1)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 1000);
        setTimeout(function () {
            $('div span:nth-child(2)').css("background-color", "#6c63ff");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
            $('div span:nth-child(3)').css("background-color", "#e5e5e5");
        }, 2000);
        setTimeout(function () {
            $('div span:nth-child(3)').css("background-color", "#6c63ff");
            $('div span:nth-child(2)').css("background-color", "#e5e5e5");
            $('div span:nth-child(1)').css("background-color", "#e5e5e5");
        }, 3000);

    });
    // $('div span:nth-child(2)').css("background-color", "#6c63ff");
});

google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // disable UI
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(28.5102, 77.0716), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.5108, 77.0716),
        map: map,
        title: 'Snazzy!'
    });
}