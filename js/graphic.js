
function markEventE (className){
    let s = Snap("#svg1");
    let lineDraw = s.circle(350, 350, 5);
    lineDraw.attr({
        fill:'darkgrey',
        stroke: "darkgrey",
        'stroke-width' :6,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let eventName = s.text(362, 375, 'Ahmet')
    eventName.attr({
        fontWeight: '900',
        class: className + ' ahmet'
    });
}

function ahmetKamilWorldLines(className){
    let s = Snap('#svg1');
    let linePath = 'M 350 350 L 350 150'
    let lineLength = Snap.path.getTotalLength(linePath);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: 'green',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength,
        'stroke-miterlimit' :10,
        class: className,
        id: 'AhmetWorldLine'
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },2000, function() {
        let gText = s.text(360, 150, 'Ahmet');
        gText.attr({
            fontWeight: '900',
            class: className,
            id: 'AhmetWorldLineTag'
        });

    })

    let linePath2 = 'M 350 350 L 450 150'
    let lineLength2 = Snap.path.getTotalLength(linePath2);
    let lineDraw2 = s.path(linePath2);
    lineDraw2.attr({
        fill:'none',
        stroke: 'blue',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength2 + ' ' + lineLength2,
        'stroke-dashoffset': lineLength2,
        'stroke-miterlimit' :10,
        class: className,
        id: 'kamilWorldLine'
    });
    lineDraw2.animate({
        strokeDashoffset : 0
    },2000, function() {
        let gText = s.text(460, 150, 'Kamil');
        gText.attr({
            fontWeight: '900',
            class: className,
            id: 'kamilWorldLineTag'
        });

    })
}

function drawTimeLine1 (className){
    let linePath = "M 350 50 L 350 650"
    let s = Snap("#svg1");
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: "darkgrey",
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let gText = s.text(360,40,"ct");
    gText.attr({
        fontWeight: '900',
        class: className,
    });
}

function drawPresentLine1 (className){
    let linePath = "M 50 350 L 650 350"
    let s = Snap("#svg1");
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: "darkgrey",
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let gText = s.text(660,340, "x");
    gText.attr({
        fontWeight: '900',
        class: className,
    });
}

function drawLightCones(className) {
    let linePath = "M 50 50 L 650 650, M 50 650 L 650 50"
    let s = Snap("#svg1");
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: "yellow",
        'stroke-width' :3,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': 10,
        class: className
    });
}

function markAccessibleFuture(className) {
    if(document.getElementsByClassName('ahmet')[0]){
        document.getElementsByClassName('ahmet')[0].remove();
    }

    let s = Snap("#svg1");
    let content = s.text(260, 200, 'Accessible Future')
    content.attr({
        fontSize: '30px',
        fontWeight: '900',
        class: className,
        id: 'future'
    });
}

function markAccessiblePast(className) {
    let s = Snap("#svg1");
    let content = s.text(260, 500, 'Accessible Past')
    content.attr({
        fontSize: '30px',
        fontWeight: '900',
        class: className,
        id: 'past'
    });
}

function ahmetQuery (className){
    let s = Snap('#svg1');
    let linePath = 'M 350 200 L 425 200'
    let lineLength = Snap.path.getTotalLength(linePath);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: 'purple',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength,
        'stroke-miterlimit' :10,
        class: className,
        id: 'AhmetQuery'
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },1500, function() {
        let gText = s.text(362, 192, 'Query');
        gText.attr({
            fontWeight: '900',
            class: className,
            id: 'AhmetQueryTag'
        });
    })
}

function kamilPresentLine (className){
    let s = Snap('#svg1');
    let linePath = 'M 650 200 L 175 200'
    let lineLength = Snap.path.getTotalLength(linePath);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: 'orange',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength,
        'stroke-miterlimit' :10,
        class: className,
        id: 'kamilPresent'
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },2000)
}

function adjustKamilPresent(className){
    let kamilPresent = document.getElementById('kamilPresent');
    kamilPresent.remove()
    let linePath = 'M 650 200 L 200 200'
    drawLineRotate(linePath, 'orange', '#svg1', '-22', '425 200')
    let s = Snap('#svg1');
    let gText = s.text(645, 120, "x'");
    gText.attr({
        fontWeight: '900',
        class: className
    });
}

function sentReply(className){
    let s = Snap('#svg1');
    let linePath = 'M 425 200 L 350 230'
    let lineLength = Snap.path.getTotalLength(linePath);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: 'purple',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength,
        'stroke-miterlimit' :10,
        class: className,
        id: 'kamilReply'
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },1500, function() {
        let gText = s.text(365, 243, 'Reply');
        gText.attr({
            fontWeight: '900',
            class: className,
            id: 'kamilReplyTag'
        });
    })
}


function drawLineRotate (linePath, color, elementID, rotation, center){
    let s = Snap(elementID);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: color,
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },0, function (){
        rotateLine(lineDraw, rotation, center)
    })
}

function rotateLine(line, rotation, center){
    line.animate({'transform' :'r' +  rotation + ' ' + center}, 2000)
}

function markQuerySent(className){
    let s = Snap("#svg1");
    let lineDraw = s.circle(350, 200, 5);
    lineDraw.attr({
        fill:'red',
        stroke: "red",
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let eventName = s.text(225, 200, 'Query sent')
    eventName.attr({
        fontWeight: '900',
        class: className
    });
}

function markQueryReceived(className){
    let s = Snap("#svg1");
    let lineDraw = s.circle(425, 200, 5);
    lineDraw.attr({
        fill:'red',
        stroke: "red",
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let eventName = s.text(435, 215, 'Query received/reply sent')
    eventName.attr({
        fontWeight: '900',
        class: className
    });
}

function markReplyReceived(className){
    let s = Snap("#svg1");
    let lineDraw = s.circle(350, 230, 5);
    lineDraw.attr({
        fill:'red',
        stroke: "red",
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className
    });
    let eventName = s.text(185, 240, 'Reply received')
    eventName.attr({
        fontWeight: '900',
        class: className
    });
}

function markMessages(className) {
    markQuerySent(className);
    markQueryReceived(className);
    markReplyReceived(className);
    let s = Snap('#svg1');
    let arrow = s.path('M 50 250 L 50 50 L 45 60 L 55 60 L 50 50');
    arrow.attr({
        stroke: 'black',
        'stroke-width' :4,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        class: className,
        id: 'timeArrow'
    });
    let gText = s.text(55, 150, 'Direction of time');
    gText.attr({
        fontWeight: '900',
        class: className,
        id: 'timeArrowTag'
    });
}

function cleanDiagram(){
    if (document.getElementById('future')){
        document.getElementById('future').remove();
    }
    if (document.getElementById('past')){
        document.getElementById('past').remove();
    }
    if (document.getElementById('AhmetWorldLine')){
        document.getElementById('AhmetWorldLine').remove();
    }
    if (document.getElementById('AhmetWorldLineTag')){
        document.getElementById('AhmetWorldLineTag').remove();
    }
}

function ahmetWorldLine(className){
    let s = Snap('#svg1');
    let linePath = 'M 350 350 L 350 150'
    let lineLength = Snap.path.getTotalLength(linePath);
    let lineDraw = s.path(linePath);
    lineDraw.attr({
        fill:'none',
        stroke: 'green',
        'stroke-width' :5,
        'stroke-linecap' :'round',
        'stroke-linejoin' :'round',
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength,
        'stroke-miterlimit' :10,
        class: className,
        id: 'AhmetWorldLine'
    });
    lineDraw.animate({
        strokeDashoffset : 0
    },2000, function() {
        let gText = s.text(360, 150, 'Ahmet');
        gText.attr({
            fontWeight: '900',
            class: className,
            id: 'AhmetWorldLineTag'
        });
    })
}

function addText(text) {
    let paragraph = document.createElement("p");
    let node = document.createTextNode(text);
    paragraph.appendChild(node);
    let panel = document.getElementsByClassName('textContainer')[0];
    panel.appendChild(paragraph);
}

let pointer = 1
document.getElementById('prev').disabled = true
addText(textList[0])

function nothing(){
    console.log('I did nothing')
}

let graphicList = [nothing, markEventE, drawPresentLine1, drawTimeLine1, drawLightCones, markAccessibleFuture, markAccessiblePast,
    ahmetWorldLine, cleanDiagram, nothing, nothing,  ahmetKamilWorldLines, ahmetQuery, nothing,  kamilPresentLine, adjustKamilPresent, sentReply, markMessages, nothing]

let nextButton = document.getElementById('next');

if (nextButton){
    nextButton.addEventListener('click', function () {
        console.log(pointer)
        graphicList[pointer](pointer.toString())
        document.querySelectorAll('.textContainer p')[0].remove()
        addText(textList[pointer])
        if (pointer=== 18){
            document.getElementById('next').disabled = true

            let url = 'img/comic.png';
            let image = new Image();
            image.src = url;
            image.id = 'comic';
            image.width = 700;
            document.getElementsByClassName('textContainer')[0].appendChild(image);
        }
        pointer++
        document.getElementById('prev').disabled = false
    })
}

let prevButton = document.getElementById('prev');

if (prevButton){
    console.log(pointer)
    prevButton.addEventListener('click', function () {
        pointer--
        let elToRemove = document.getElementsByClassName(pointer.toString())
        while (elToRemove[0]){
            elToRemove[0].parentNode.removeChild(elToRemove[0])
        }

        graphicList[pointer-1]((pointer-1).toString());

        document.querySelectorAll('.textContainer p')[0].remove();
        addText(textList[pointer-1]);
        if (pointer===1){
            document.getElementById('prev').disabled = true;

        }
        if (pointer <= 18){
            document.getElementById('next').disabled = false
        }
        if (document.getElementById('comic')){
            document.getElementById('comic').remove();
        }
    })
}

let repeatButton = document.getElementById('repeat');

if (repeatButton){
    repeatButton.addEventListener('click', function () {
       document.getElementById('prev').click();
       document.getElementById('next').click()
    })
}
