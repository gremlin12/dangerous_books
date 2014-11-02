var captainUnderpants = {
	rank : 1,
	author : "Dav Pilkey",
	title :"Captain Underpants (series)",
	ageGroup : "Middle grades", 
	description : "Two middle school boys hypnotize their principal into thinking that he is the superhero Captain Underpants.",
	remarks : "Books in Series: <i>'The Adventures of Captain Underpants', 'Captain Underpants and the Tyrannical Retaliation of the Turbo Toilet 2000'</i>", 
	reasons :"offensive language, unsuitability for age-group, and violence", 
	cover : "images/Captainunderpantscover.jpg", 
	catalogURL : "https://www.worldcat.org/title/adventures-of-captain-underpants-an-epic-novel/oclc/36011524&referer=brief_results"
};

captainUnderpants.display = function() {
	$("#content").append(HTMLbookStart);
	var formattedBookCover = HTMLbookCover.replace("%data", captainUnderpants.cover);
	$(".book-tile").append(formattedBookCover);
	var formattedBookTitle = HTMLbookTitle.replace("%data%", captainUnderpants.title);
	$(".book-tile").append(formattedBookTitle);
	var formattedDescription = HTMLdescription.replace("%data%", captainUnderpants.description);
	var formattedRemarks = HTMLremarks.replace("%data%", captainUnderpants.remarks);
	var formattedReasons = HTMLreasons.replace("%data%", captainUnderpants.reasons);
	var formattedCatalog = HTMLcatalog.replace("%data%", captainUnderpants.catalogURL);
	var bookInfo = formattedDescription + formattedRemarks + formattedReasons + formattedCatalog;
	$(".book-tile").append(bookInfo);
}

captainUnderpants.display();

var bluestEye = {
	rank : 2,
	author : "Toni Morrison",
	title : "The Bluest Eye",
	ageGroup : "Adult",
	description : "A young African-American girl struggles for beauty and acceptance.",
	remarks : "Winner of the Nobel Prize for Literature.",
	reasons: "offensive language, sexuality, unsuitability for age group, and violence",
	cover : "images/the-bluest-eye.jpg",
	catalogURL : "https://www.worldcat.org/title/bluest-eye/oclc/30110136&referer=brief_results"
};


bluestEye.display = function() {
	$("#content").append(HTMLbookStart);
	var formattedBookCover = HTMLbookCover.replace("%data", bluestEye.cover);
	$(".book-tile:last").append(formattedBookCover);
	var formattedBookTitle = HTMLbookTitle.replace("%data%", bluestEye.title);
	$(".book-tile:last").append(formattedBookTitle);
	var formattedDescription = HTMLdescription.replace("%data%", bluestEye.description);
	var formattedRemarks = HTMLremarks.replace("%data%", bluestEye.remarks);
	var formattedReasons = HTMLreasons.replace("%data%", bluestEye.reasons);
	var formattedCatalog = HTMLcatalog.replace("%data%", bluestEye.catalogURL);
	var bookInfo = formattedDescription + formattedRemarks + formattedReasons + formattedCatalog;
	$(".book-tile:last").append(bookInfo);
}

bluestEye.display();

var partTimeIndian = {
	rank : 3,
	author : "Sherman Alexie",
	title : "The Absolutely True Diary of a Part-Time Indian",
	ageGroup : "Young Adult",
	description : "A boy leaves his troubled school on the Spokane Indian Reservation to attend an all-white school",
	remarks : "",
	reasons : "drugs/alcohol/smoking, offensive language, racism, sexuality, and unsuitability for age group",
	cover : "images/Part-Time_Indian.jpg",
	catalogURL : "http://www.worldcat.org/title/absolutely-true-diary-of-a-part-time-indian/oclc/154698238"
};

partTimeIndian.display = function() {
	$("#content").append(HTMLbookStart);
	var formattedBookCover = HTMLbookCover.replace("%data", partTimeIndian.cover);
	$(".book-tile:last").append(formattedBookCover);
	var formattedBookTitle = HTMLbookTitle.replace("%data%", partTimeIndian.title);
	$(".book-tile:last").append(formattedBookTitle);
	var formattedDescription = HTMLdescription.replace("%data%", partTimeIndian.description);
	var formattedRemarks = HTMLremarks.replace("%data%", partTimeIndian.remarks);
	var formattedReasons = HTMLreasons.replace("%data%", partTimeIndian.reasons);
	var formattedCatalog = HTMLcatalog.replace("%data%", partTimeIndian.catalogURL);
	var bookInfo = formattedDescription + formattedRemarks + formattedReasons + formattedCatalog;
	$(".book-tile:last").append(bookInfo);
}

partTimeIndian.display();

// Locations Section //


var locations = [
	['Queens, NY', 
	40.742054, -73.769417, 
	'Removed as required reading in a Queens, NY, middle school (20013) becuase the book included excerpts on masturbation.'
	],
	['Billings, MT',
	45.787636, -108.489304,
	'Challenged on the tenth-grade required reading list at Skyview High School (2013) because "this book is, shockingly, written by a Native American who reinforces all the negative stereotypes of his people and does it from the crude, obscene, and unfiltered viewpoint of a ninth-grader growing up on the reservation.'
	],
	['Jefferspm County, WV',
	39.284167, -77.856111,
	"Pulled from the Jefferson County, WV, schools (2013) because a parent complained about the novel's graphic nature."
	]
];

var mapOptions = {
    zoom: 4,
    center: {lat: 39.828, lng: -98.579},
};

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map
	});

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][3]);
          infowindow.open(map, marker);
        }
    })(marker, i));    
}