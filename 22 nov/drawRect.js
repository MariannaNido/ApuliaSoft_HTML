function drawRect(canvas) {
    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };

    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finsihed.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
}

function randomColor(){

    var randNum = Math.floor(Math.random()*6);

    switch(randNum){
        case 0:
            return "red"
            break;
        case 1:
            return "yellow"
            break;
        case 2:
            return "green"
            break;
        case 3:
            return "purple"
            break;
        case 4:
            return "blue"
            break;
        case 5:
            return "brown"
            break;
        case 6:
            return "black"
            break;
    }
}

function randomDim(){
    return Math.floor((Math.random()*400)+50);
}

function makeDiv(i) {
    var rect_width = randomDim();
    var rect_height = randomDim();
    var color = randomColor();
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    var divid = 'canvas' + i;
  
    $('#canvas').append("<div id='" + divid + "'>");
    $('#' + divid).css({
      'width': rect_width + 'px',
      'height': rect_height + 'px',
      'background-color': color,
      'position': 'absolute',
      'left': posx + 'px',
      'top': posy + 'px'
    });
  }
  
  for (var i = 0; i < 10; ++i) {
    makeDiv(i);
  }