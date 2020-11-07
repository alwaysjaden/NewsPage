<script>

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=aAwUrMpNSxxAcgqEhsuHLfWoXruPCkfX"



    $("#search-btn").on("click", function(event) {
        event.preventDefault();

        // Get input values from user
        var searchTerm = $("#search-term").val();
        var recordsNum = $("#article-count").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();
        
        for (i=0; i<recordsNum; i++)
            var newDiv = $("<div>");
            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(article) {
                var title = $("<h1>" + article.Title + "</h1>").attr("href", article.url);
            })

    })

    $("#search-btn").on("click", function() {

    })

</script>