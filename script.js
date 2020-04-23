
window.onload = init;

function init() {
   // get array of images
    var images = document.getElementsByTagName('img');
   // iterate through array, and assign click handler to
   // each item in the array
    for(var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}
    // take in event object
function showAnswer(e) {
    // access target property of specific event object and save to memory
    var image = e.target;
    // access id property of event object and save it to memory
    var name = image.id;
    // use event object's id to form name of unblurred image
    var name = "images/" + name + "_ub.jpg";
    // overwrite old src value with new source value -- the unblurred image
    image.src = name;
}

