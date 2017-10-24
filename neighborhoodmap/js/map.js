var places = [
	{
		title: "Coimbatore International Airport",
		location: {lat : 11.031511 , lng : 77.043610},
		url: "https://en.wikipedia.org/wiki/Coimbatore_International_Airport",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coimbatore_International_Airport_at_Night.jpg/220px-Coimbatore_International_Airport_at_Night.jpg" 
	},
	{
		title: "Nehru stadium",
		location: {lat : 11.006553 , lng : 76.969548},
		url: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru_Stadium,_Coimbatore",
		image: "http://www.worldstadiums.com/stadium_pictures/asia/india/coimbatore_nehru.jpg" 
	},
	{
		title: "TNAU",
		location: {lat : 11.014762 , lng : 76.931568},
		url: "http://coimbatore.nic.in/tnaubotanic.htm",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0179707,76.9359931&fov=120&heading=188&pitch=1&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Brookfields mall",
		location: {lat : 11.0096846 , lng : 76.9592265},
		url: "https://en.wikipedia.org/wiki/Brookefields_Mall",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0087727,76.9594834&fov=120&heading=295&pitch=1&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Fun mall" ,
		location: {lat : 11.0243833 , lng : 77.0107771},
		url: "https://en.wikipedia.org/wiki/Fun_Republic_Mall_(Coimbatore)",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.025185,77.0108014&fov=60&heading=170&pitch=20&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Prozone mall",
		location: {lat : 11.0555162 , lng : 76.994820},
		url: "http://www.prozoneintu.com/prozone_coimbatore_retail",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.055122,76.9941616&fov=120&heading=76&pitch=1&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Barbeque Nations",
		location: {lat : 10.994363 , lng: 76.963330},
		url: "http://www.barbequenation.com/",
		image: "https://images-grouptable.netdna-ssl.com/system/photos/photos/000/016/256/original/Barbeque-Nation.jpg?1470277613" 
	},
	{
		title: "Jenny Residency",
		location: {lat : 11.030558 , lng: 77.027372},
		url: "http://jenneyresidency.in/",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0307769,77.0265624&fov=30&heading=30&pitch=1&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Le Meridien",
		location: {lat : 11.059575 , lng: 77.074833},
		url: "http://www.lemeridien-coimbatore.in/",
		image: "http://tnoacon2017.com/images/728.png" 
	},
	{
		title: "Codissa trade fair complex",
		location: {lat : 11.0425949 , lng : 77.0262888},
		url: "https://www.codissiacomplex.com/",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.042487,77.0264366&fov=70&heading=30&pitch=-5&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Maharaja theme park",
		location: {lat : 11.0595944 , lng : 77.0953808},
		url: "http://maharajamultiplex.in/",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0595944,77.0953808&fov=90&heading=235&pitch=10&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	},
	{
		title: "Decathlon",
		location: {lat: 11.057205 , lng: 77.079554},
		url: "https://www.decathlon.in/c/187-decathlon-coimbatore",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0576958,77.0795467&fov=60&heading=188&pitch=-5&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA"
	},
	{
		title: "Hotel Heritage Inn",
		location: {lat : 11.010492 , lng : 76.966873},
		url: "http://www.hotelheritageinn.in/",
		image: "https://maps.googleapis.com/maps/api/streetview?size=250x150&location=11.0109318,76.9673568&fov=30&heading=252&pitch=12&key=AIzaSyAb-7SWeuMIrYFKcK8w165XCGcTVI3y0NA" 
	}
];

//variable to store markers
var markers = [];

var map, clientId, clientSecret;
//function to iniitialize the map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center : {lat : 11.0243833 , lng : 77.0107771},
		zoom : 12,
		styles: [
	   		{
	        "featureType": "all",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    	}
		]
	});
	
	mapMarkers(places); //calling the function with arguement places to generate markers in map

	//apply bindings to the viewmodel
	ko.applyBindings(new viewModel());
}

//functions to put markers in the map
function mapMarkers(locations) {
	//loop to create markers
	for( var i = 0; i < locations.length; i++) {
		var position = locations[i].location;
		var lat = locations[i].location.lat;
		var lng = locations[i].location.lng;
		var title = locations[i].title;
		var url = locations[i].url;
		var image = locations[i].image;
		var marker = new google.maps.Marker( {
		position: position,
		map: map,
		lat: lat,
		lng: lng,
		title: title,
		url: url,
		image: image,
		animation: google.maps.Animation.DROP,
		id: i
	});
	markers.push(marker);//stores marker in markers array
	//event listener to make info window appear on map when marker is clicked
	marker.addListener('click' , openInfo);
}

function openInfo() {
	var marker =this;
	populateInfoWindow(this , largeInfoWindow);//calling function for info window to appear
	setCenter(this.position, 15);//calling set center function to change center to that of marker
	}

var largeInfoWindow = new google.maps.InfoWindow({maxWidth: 300});

//function that makes info window to appear
function populateInfoWindow(marker , infoWindow) {
	infoWindow.marker = marker;
	var client_id = "FH2GFC24ZNP13JT2YB324JSV0R41D31XZD1EZTVL4NCCPEHU";
	var client_secret = "HARFLOBWOWNDS04X4O3FGB2J2000U0REJWYTUVYP2AWE0ORD";
	var apiUrl = "https://api.foursquare.com/v2/venues/search?ll=" + marker.lat + "," + marker.lng + "&query=" + marker.title + "&limit=1" + 
				"&client_id=" + client_id + "&client_secret=" + client_secret + "&v=20170708&m=foursquare";

	//ajax request
	$.getJSON(apiUrl).done(function(marker) {
		var address = marker.response.venues[0].location;
		self.line1 = address.formattedAddress[0];
		self.line2 = address.formattedAddress[1];
		self.line3 = address.formattedAddress[2];

		var apiInfo = '<div>' + self.line1 + '<br>'+ self.line2+'<br>'+ self.line3 + '</div>';
		
		infoWindow.setContent(modelInfo + apiInfo);

	}).fail(function() {
                // Send alert
                alert(
                    "There was an issue loading the API. Please check the data."
                );
            });

	//info window content from model
	var modelInfo = '<div>' + '<strong>'+ marker.title + '</strong>' + '<br>' + '<br>' + '<img src="' + marker.image + 
                                     '" alt="Street View Image of ' + marker.title + '"><br><hr style="margin-bottom: 5px">' + 
						   '<br>' + "latlng " + marker.position + '<br>' + '<a target="_blank" href =' + marker.url + '>' + marker.url + '</a>' + '</div>';
	
	infoWindow.open(map , marker);
	marker.setAnimation(google.maps.Animation.BOUNCE);//to animate marker when clicked
	//timeout function to stop bouncing of markers
	setTimeout(function() { 
		marker.setAnimation(null); 
	}, 1500);
	//event listener to change center and zoom to initial value
	infoWindow.addListener('closeclick', function() {
        infoWindow.marker = null;
        setCenter({lat : 11.0243833 , lng : 77.0107771});
    });
}

function setCenter(center, zoom = 12) {
	map.setCenter(center);//sets the center of the map
	map.setZoom(zoom);//sets the zoom level of the map
}
}

//viewmodel that connects view and model
var viewModel = function() {
	
	var self = this;
	//observable to toggle between nav bar
	self.showNav = ko.observable(true);
	//nav bar toggling function
	self.toggleNav = function() {
        self.showNav(!self.showNav());
    };

	self.list = ko.observableArray();
	//stores the user input query
	self.query = ko.observable('');
	//loop to store markers to observable array
	for(var i = 0; i < markers.length; i++) {
      self.list.push(markers[i]);
    }
    //when the list elements are clicked this function triggers the click event and makes info window to appear 
	self.openInfoWindow = function(list) {
	    google.maps.event.trigger(list, 'click');
	};
	//function to filter based on the user input query
	self.search = ko.computed(function(){
		return ko.utils.arrayFilter(self.list(), function(list){
		var filterList = list.title.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
		list.setVisible(filterList);//to show only the markers satisfied the input query
		return filterList;
	});
	});
};

//function to display alert when map api is broken
function error() {
	alert("Something went wrong. Please check the data.");
}
