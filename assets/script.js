

var searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    var searchParameters = document.querySelector("#searchBar").innerHTML;
    console.log(searchParameters)
})