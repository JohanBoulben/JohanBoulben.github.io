function init(){
    //task 2
    let images = document.getElementById("flowers").getElementsByTagName("img");
    images[1].src = "hnshtml.png";
    images[3].src = "hnshtml.png";
    //task 3
    document.getElementById("inner").innerHTML = "<div><p>Your are doing great!</p></div>";
    //task 4
    let image = document.createElement("img");
    image.src = "hnshtml.png";
    document.getElementById("new_element").appendChild(image);
    //Task 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");// fill with proper code
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }
    //task 6
    var changeSrc = function (event) {
        let filename = event.target.src.replace(/^.*[\\\/]/, '');
        if (event.target.src) {
            event.target.src = "hnshtml.png";
        }
        if (filename === "caoc.png") {
            event.target.src = "hnshtml.png";
        }else if (filename === "hnshtml.png"){
            event.target.src = "caoc.png";
        }

    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);

}