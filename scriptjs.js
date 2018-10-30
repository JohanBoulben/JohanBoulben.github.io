function init(){
    //task 2
    let images = document.getElementById("flowers").getElementsByTagName("img");
    images[1].src = "flower2.png";
    images[3].src = "flower2.png";
    //task 3
    document.getElementById("inner").innerHTML = "<div><p>Your are doing great!</p></div>";
    //task 4
    let image = document.createElement("img");
    image.src = "flower2.png";
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
            event.target.src = "flower2.png";
        }
        if (filename === "flower1.png") {
            event.target.src = "flower2.png";
        }else if (filename === "flower2.png"){
            event.target.src = "flower1.png";
        }

    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);

}