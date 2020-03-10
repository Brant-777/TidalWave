$(document).ready(function() {
    //function to retrive quote
    var quoteOut;

    function getNewQuote() {

        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            dataType: "jsonp",
            // If the request is successful
            success: function(data) {
                console.log("success", data);
                //print to quote box 
                var quoteT = data.quoteText;
                $("#quoteOut").text(data.quoteText);
                //handle if the author is blank 
                if (data.quoteAuthor === "") {
                    var authorT = "Unknown";
                    $("#authorOut").text("Unknown");
                } else {
                    authorT = data.quoteAuthor;
                    $("#authorOut").text(data.quoteAuthor);

                }
                console.log(quoteT + authorT);
                var url = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
                $("#tweetbtn").attr("href", url + quoteT + " - " + authorT);
            }
        });
    }
    //quote button
    $("#Quotebtn").on("click", getNewQuote);
    //setup tweet button and open window
});
