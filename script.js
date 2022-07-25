var backTop = document.getElementById('back-top');
backTop.addEventListener('click', function(){
    var initialPos = window.pageYOffset;
    var finalPos = 0;
    if(initialPos > finalPos){
    var id = setInterval(function(){
        window.scrollBy(0,-50);
        initialPos -= 50;
        if(initialPos <= finalPos){
            clearInterval(id);
            return;
        }
    }, 20);

}
});


var navList = document.querySelectorAll('.nav-menu a');
var id;
for(var i=0; i< navList.length; i++){
        navList[i].addEventListener('click', function(event){
                event.preventDefault();

                var sectionId = this.textContent.trim().toLowerCase();

                var sectionTargeted = document.getElementById(sectionId);

                id = setInterval(function(){
                    scrollDiv(sectionTargeted)
                }, 20);
        });
}

function scrollDiv(sectionTargeted){
    var coordinateTargeted = sectionTargeted.getBoundingClientRect();
    if(coordinateTargeted.top <= 0){
        clearInterval(id);
        return;
    }
    window.scrollBy(0,50);
}



