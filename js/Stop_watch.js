let second = 0;
let millisecond = 0;
let time;

function count() {
    //count();
    if (millisecond >= 99) {
        millisecond = 0;
        second = second + 1;

    } else {
        millisecond++;
    }
    if (second < 10)
        document.getElementById('seconde').innerHTML = "0" + second;
    else
        document.getElementById('seconde').innerHTML = second;
    if (millisecond < 10)
        document.getElementById('mili').innerHTML = "0" + millisecond;
    else
        document.getElementById('mili').innerHTML = millisecond;
    time = setTimeout("count()", 10);
};
document.getElementById('start').onclick = function() {
    if (time > 0) {
        return;
    }
    count();

};

function stop() {
    clearTimeout(time);
    time = 0;
};

document.getElementById('reset').onclick = function() {
    stop();
    millisecond = 0;
    second = 0;
    document.getElementById('seconde').innerHTML = "00";
    document.getElementById('mili').innerHTML = "00";
};