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


var navList = document.getElementsByClassName('nav-div');


for(var i=0; i<navList.length;i++){
    navList[i].addEventListener('click', divScroll);
    }

function divScroll(){
    var value = this.getAttribute('data-value');
    var initialPos = 0;
    var finalPos;
    if(value == 'about'){
        finalPos = 329;
    } else if(value == 'skills'){
        finalPos = 810;
    } else if(value == 'experience'){
        finalPos = 1210;
    } else if(value == 'education'){
        finalPos = 2100;
    } else if(value == 'portfolio'){
        finalPos = 2805;
    } else if(value == 'contact'){
        finalPos = 4664.81;
    }
   
    var id = setInterval(function(){
        window.scrollBy(0, 50);
        initialPos +=50;
        if(initialPos >= finalPos){
            clearInterval(id);
            return;
        }
    }, 20);
}

