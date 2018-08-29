function init() {
    userProgress(1);
}

function userProgress(time) {
    let start = 0;
    const timed = Math.round(time*1000/100);
    const progressElement = document.querySelector('.prbar');
    
    const intervalId = setInterval(function(){
        if(start > 100){
            clearInterval(intervalId);
            progressFinish();
        }
        else{
            progressElement.value = start;
        }
        progressElement.value = start;
        start++;
    }, timed);
}

function progressFinish() {
    const div = document.querySelector('div');
    div.style.display = 'block';
}

window.addEventListener('load', init);