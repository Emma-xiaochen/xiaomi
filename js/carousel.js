var items = document.getElementsByClassName('listItem')
var points = document.getElementsByClassName('point')
var goPreBtn = document.getElementById('goPre')
var goNextBtn = document.getElementById('goNext')
console.log('items:', items);

var time = 0;

var index = 0;

var clearActive = function() {
    for(var i = 0; i < items.length; i++) {
        items[i].className = 'listItem';
    }

    for(var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}

var goIndex = function() {
    clearActive();
    items[index].className = 'listItem active';
    points[index].className = 'point active';
}

var goPre = function() {
    if(index == 0) {
        index = 3;
    } else {
        index--;
    }
    goIndex();
}

var goNext = function() {
    if(index < 3) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

goPreBtn.addEventListener('click', function() {
    goPre();
})

goNextBtn.addEventListener('click', function() {
    goNext();
})

for(var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
        time = 0;
    })
}

setInterval(function() {
    time++;
    if(time ==  20) {
        goNext();
        time = 0;
    }
}, 100)