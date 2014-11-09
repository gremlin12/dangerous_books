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
	$("#content").append("<div class='book-tile active-tile'></div>");
	var formattedBookCover = HTMLbookCover.replace("%data", captainUnderpants.cover);
	$(".book-tile:last").append(formattedBookCover);
	var formattedBookTitle = HTMLbookTitle.replace("%data%", captainUnderpants.title);
	$(".book-tile:last").append(formattedBookTitle);
	var formattedDescription = HTMLdescription.replace("%data%", captainUnderpants.description);
	var formattedRemarks = HTMLremarks.replace("%data%", captainUnderpants.remarks);
	var formattedReasons = HTMLreasons.replace("%data%", captainUnderpants.reasons);
	var formattedCatalog = HTMLcatalog.replace("%data%", captainUnderpants.catalogURL);
	var bookInfo = formattedDescription + formattedRemarks + formattedReasons + formattedCatalog;
	$(".book-tile:last").append(bookInfo);
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
	["Illinois",
	41.871111,-88.063056,
	"Illinois<br><strong>The Perks of Being a Wallflower</strong><br>Removed from eighth-grade classrooms at Hadley Junior High School because of concerns about sexually explicit content and language. (Source: <a href='http://www.ila.org/BannedBooks/ALA016%20Short%20List%20L3c_low%20%281%29.pdf'> ALA</a>)<br><br><strong>The Glass Castle</strong> by Jeanette Walls<br><strong>To Kill a Mockingbird</strong> by Harper Lee<br> Parents asked that the books be removed from a Grade 10 Honors class because of 'language, sexual content and abuse.' (Source: <a href=http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter1FY2015.pdf'> NCTE</a>)<br><br><strong>Persepolis</strong> by Marjane Satrapi<br> Suspended from a 12th grade English class because of objections to the graphic novel's content and imagery.(Source: <a href='http://ncac.org/persepolis-suspended-from-curriculum-in-another-illinois-high-school/'> NCAC</a>)"
	],
	["Verona, NJ",
	40.834007, -74.242877,
	"Verona, New Jersey<br><strong>Looking for Alaska</strong><br>Challenged in the High School curriculum because a parent found the sexual nature of the story inappropriate."
	],

	["Oregon",
	44,-120.5,
	"Oregon<br><strong>Going Bovine</strong>, by Libba Bray<br>Challenged in the 10th Grade curriculum for language, drug reference, sex, and mockery of religion. (Source: <a href ='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'>NCTE</a>)<br><br><strong>Persepolis</strong> by Marjane Satrapi<br>The graphic novel's inclusion in high school library collections was challenged at a School Board meeting. Parents complained of the book's 'course language' and 'scenes of torture.' (Source: <a href='http://cbldf.org/2014/09/persepolis-challenged-in-oregon-school-district/'> CBLDF</a>)<br><br><strong>The Absolutely True Diary of a Part-Time Indian</strong>  by Sherman Alexie<br>Challenged in a Junior High English class because of concerns about 'the objectiication of women and young girls.'' (Source: <a href='http://www.ila.org/BannedBooks/ALA016%20Short%20List%20L3c_low%20%281%29.pdf'> ALA</a>)"
	],
	["North Carolina",
	35.5,-80,
	"North Carolina<br><strong>The House of the Spirits</strong>, by Isabelle Allende <br>Challenged in a 10th Grade Honors Class because of sexuality. The School Board voted to <a href='http://www.hcpress.com/news/watauga-county-board-of-education-votes-3-2-to-keep-the-house-of-the-spirits-in-the-whs-curriculum-thursday.html'>retain</a> the book in the curriculum. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'>NCTE</a>)<br><br><strong>The Absolutely True Diary of a Part-Time Indian </strong> by Sherman Alexie<br>Challenged because of content that might offend religious beliefs. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'>NCTE</a>)<br><br><strong>Almost, Maine</strong> by John Cariani<br> A high school production of the popular play was cancelled because of the presence of a sex-sex couple in the storyline. (Source: <a href='http://ncac.org/blog/student-production-of-almost-maine-cancelled-because-of-same-sex-storyline/'> NCAC</a>)"
	],
	["Louisiana",
	31,-92,
	"<div class='scrollFix'>Louisiana<br><strong>The Immortal Life of Henrietta Lacks</strong> by Rebecca Skloot<br>Removed from a 10th Grade class because of references to physical and sexual abuse. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'> NCTE</a>)</div> "],
	["South Carolina",
	34,-81,
	"South Carolina<br><strong>Fun Home </strong> by Alison Bechdel and <strong>Out Loud: The Best of Rainbow Radio </strong> by Ed Madden<br> In June, 2014, the state legislature slashed funding to the College of Charleston and University of South Carolina Upstate, as punishment for sponsoring reading programs that featured gay-themed books. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)"
	],
	["Pennsylvania",
	41,-77.5,
	"Pennsylvania<br><strong>District Policy Requires Teachers to Censor Their Own Class Libraries</strong><br>A school district in Pennsylvania implented a policy requiring teachers to inventory their class libraries and label and/or remove any 'texts with mature, sexual, violent, or culturally or religiously offensive content.' (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'> NCTE</a>)<br><br><strong>The Handmaid's Tale</strong> by Margaret Atwood<br>The novel's inclusion on a high school summer reading list was challenged because of its 'adult nature' and 'grossly inappropriate conduct.' The school board voted to suspend the book but later reinstated it. (Source: <a href='http://ncac.org/incident/challenge-to-the-handmaids-tale-by-margaret-atwood-in-pa-leaves-summer-reading-list-in-limbo/'> NCAC</a>)<br><br><strong>Monty Python's Spamalot</strong> by Monty Python<br> A high school production of the play was cancelled because of 'homosexual themes.' The drama teacher was fired for speaking out about the cancellation. (Source: <a href='http://ncac.org/incident/pa-high-school-cancels-spamalot-over-homosexual-themes/'> NCAC</a>)"
	],
	["Ohio",
	40.5,-82.5,
	"Ohio<br><strong>Song of Solomon</strong> by Toni Morrison<br>The novel's inclusion in a 9th/10th grade curriculum was challenged because of profanity. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'> NCTE</a>)<br><br><strong>Extremely Loud and Incredibly Close</strong> by Jonathan Safran <br> Challenged in 10th grade curriculum because of sexual content. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)<br><br><strong>The Ventriloquist</strong> (Student Newspaper)<br>Cedarville University confiscated and stopped distribution of the student newspaper 'The Ventriloquist' because of two articles critical of the university's stance toward gay students. (Source: <a href='http://ncac.org/blog/baptist-college-seizes-student-newspaper-mutes-lgbt-community/'> NCAC</a>)"
	],
	["Virginia",
	37.5,-79,
	"Virginia<br><strong>Two Boys Kissing </strong> by David Levithan<br> Challenged because of the cover (showing two boys kissing) and homosexual content. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter3FY2014.pdf'> NCTE</a>)<br><br><strong>Silent to the Bone</strong> by E.L. Konigsburg<br>Removed by the Superintendent from the 8th grade English curriculum after a parent complained that the novel 'had no moral value.' (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter1FY2015.pdf'> NCTE</a>)"
	],
	["Idaho",
	45,-114,
	"<div class='scrollFix'>Idaho<br><strong>The Absolutely True Diary of a Part-Time Indian </strong> by Sherman Alexie<br> Pulled from high school reading lists for 'filthy words' and 'anti-Christian content.' (Source : <a href='http://www.theguardian.com/books/2014/apr/08/sherman-alexie-schools-ban-idaho-diary-part-time-indian-anti-christian'> The Guardian</a>)</div>"
	],
	["Massachusetts",
	42.3,-71.8,
	"<div class='scrollFix'>Massachusetts<br><strong>Forgive Me, Leonard Peacock</strong> by Matthew Quick<br>Challenged in Grade 8 and removed because of profane language. Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)<br><br><strong>Hate List</strong> by Jennifer Brown<br>Challened in Grade 8 because of inflammatory content (a white male shooter in a school). Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)</div"
	],
	["Minnesota",
	46,-94,
	"<div class='scrollFix'>Minnesota<br><strong>The Lesson</strong> by Toni Cade Bambara<br> Challenged in 8th and 9th grades for obscenity, sexual content, and the phrase 'white folks crazy.' (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)</div>"
	],
	["Florida",
	28.1,-81.6,
	"Florida<br><strong>Little Brother</strong> by Cory Doctorow<br>Removed from an 11th grade Honors class because the principal was concerned that parents might protest.(Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)<br><br><strong>Paper Towns</strong> by John Green<br>Dropped from a school's 8th grade summer reading list for profanity, sexuality, and 'misogynistic' references. (Source: <a href='http://www.tampabay.com/news/education/k12/john-green-novel-on-summer-reading-list-draws-objection-from-pasco-parent/2185740'>Tamba Bay Times</a>)"
	],
	["Kentucky",
	37.5,-85,
	"<div class='scrollFix'>Kentucky<br><strong>Unwholly</strong> by Neal Shusterman<br> Challenged because the book was 'too dark' for 7th-graders. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter4FY2014.pdf'> NCTE</a>)</div>"
	],
	["Texas",
	31,-100,
	"Texas<br><strong>The Absolutely True Diary of a Part-Time Indian</strong> by Sherman Alexie <br> <strong>An Abundance of Katherines</strong> by John Green<br><strong>The Art of Racing in the Rain</strong> by Garth Stein<br><strong>The Class Castle</strong> by Jeanette Walls<br><strong>Song of Solomon</strong> by Toni Morrison<br><strong>Siddhartha</strong> by Herman Hesse<br><strong>The Working Poor: Invisible in America</strong> by David K. Shipler<br><strong>Nineteen Minutes</strong> by Jodi Picoult<br>Parents asked that the books be removed from a high school reading list because of 'sex, profanity, and rape.' (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter1FY2015.pdf'> NCTE</a>)"
		],
		["Wisconsin",
		44.5,-89.5,
		"Wisconsin<br><strong>Looking for Alaska</strong> by John Green<br>Challenged by a parent in Waukesha who ojected to the novel's 'sexual content' and wanted the book removed from the 10th grade AP English curriculum. (Source: <a href='http://ncac.org/incident/john-greens-looking-for-alaska-challenged-in-wisconsin/'> NCAC</a>}<br><br> <strong>The Kite Runner</strong> by Khaled Hosseini<br><strong>Chinese Handcuffs</strong> by Chris Crutcher<br> The inclusion of these books in a Grade 10 AP English curriculum was challenged because of sexual content.(Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter1FY2015.pdf'> NCTE</a>)"
		],
		["Delaware",
		39,-75.5,
		"Delaware<br><strong>The Miseducation of Cameron Post</strong> by Emily Danforth<br> Removed from the summer reading list by the School Board because of profanity. (Source: <a href='http://www.ncte.org/library/NCTEFiles/Involved/Action/censorship/CensorshipReportQuarter1FY2015.pdf'> NCTE</a>)"
		],
		["California",
		37,-120,
		"California<br><strong>The Fault in Our Stars</strong> by John Green<br> The novel was removed from middle school libraries in Riverside because its two terminally ill teen characters use crude language and have sex. (Source: <a href='http://ncac.org/blog/riverside-schools-want-kids-to-think-theyre-immortal/'> NCAC</a>)"
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
var center;
function calculateCenter() {
	center = map.getCenter();
}

google.maps.event.addDomListener(map, 'idle', function() {
	calculateCenter();
});
google.maps.event.addDomListener(window, 'resize', function() {
	map.setCenter(center);
});