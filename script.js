let colors = ['green', 'blue', 'red','yellow'],
    index = 0,
    glength = Math.round(Math.random()*100),
    status = true,
    timer;

for (let i = 0; i < glength; i++) {    
    let div = document.createElement('div');
    div.className = 'circle';
    div.innerHTML = '';
    div.style.background = colors[index];
    index++;
    if (index == 4) index = 0;
    document.body.append(div);
}

function garland() {
    let elem = document.getElementsByClassName('circle');
    for (let j = 0; j < glength; j++) {
        let prevcolor=elem[j].style.background;
        let randomcolornum=Math.round(Math.random() * 3);        
        if (colors[randomcolornum] != prevcolor) elem[j].style.background = colors[randomcolornum]
        else if (randomcolornum == 3) elem[j].style.backgroundColor = colors[randomcolornum - 1]
        else if (randomcolornum == 2) elem[j].style.backgroundColor = colors[randomcolornum + 1]
        else if (randomcolornum == 1) elem[j].style.backgroundColor = colors[randomcolornum + 1]
        else if (randomcolornum == 0) elem[j].style.backgroundColor = colors[randomcolornum + 1];
        
    }
    timer=setTimeout(garland, 1000);
}
  
function startstop() {
if (status) {
    garland();
    document.getElementById('knopka').innerHTML = 'Stop';
}
if (!status) {
    clearTimeout(timer);
    document.getElementById('knopka').innerHTML = 'Start';
}
status =! status;
}