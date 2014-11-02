var HTMLbookStart = "<div class='book-tile'></div>"
var HTMLbookCover = "<img src='%data' class='book-cover'>"
var HTMLbookTitle = "<h3>%data%</h3>"
var HTMLdescription = "<div class='description'><p>%data%</p>"
var HTMLremarks = "<p>%data%</p>"
var HTMLreasons = "<p>Banned for %data%. "
var HTMLcatalog = "<a class='confirm' href ='%data%'>Read dangerously!</a></p></div>"

$(function() {
    $('.confirm').click(function() {
        return window.confirm("This book could be dangerous.  Are you sure?");
    });
});

//source: http://stackoverflow.com/questions/12531324/javascipt-or-jquery-are-you-sure-dialog-for-a-link?lq=1
