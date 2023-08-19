var hit = 0;

function getRandom()
{
    let random = Math.floor(Math.random() * 10);
    return random;
}


function createBubbleButton()
{
    var bubble = "";
    for(let i = 0; i <= 159; i++)
    {
        bubble += `<div class="bubble"><h2>${getRandom()}</h2></div>`
    }
    
    const createBubble = document.querySelector(".getBubble");
    createBubble.innerHTML = bubble;
}

createBubbleButton();


const getHit = document.querySelector("#mark");
function settingGame()
{
    getHit.textContent = getRandom();
    hit = getHit.textContent;
}
settingGame()

var time = 60;
var counter = setInterval(timer,1000)
function timer()
{
    if(time == 0){
        clearInterval(counter);
        const heading = document.createElement("h1");
        const getBubble = document.querySelector(".getBubble");
        getBubble.innerHTML = `<h1>Game Over : Total Score is ${score}</h1>`;

    }
    else
    {
        time--;
        document.querySelector("#timer").textContent = time;
    }
}



var score = 0;
function increaseScore()
{
    const getScore = document.querySelector("#totalScore");
    score += 10;
    getScore.textContent = score;

}

var bubble = document.querySelector(".getBubble");
bubble.addEventListener("click", function(dets)
{
    const clickedNum = (Number(dets.target.textContent));
    if(clickedNum == hit)
    {
        createBubbleButton();
        increaseScore();
        settingGame();
    }
    
})