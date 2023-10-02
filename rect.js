var rect = document.querySelector('#center');
rect.addEventListener('mousemove', function(details){
    var rectLocation = rect.getBoundingClientRect();
    console.log(rectLocation)
});
