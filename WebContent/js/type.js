window.onload = function()
{
  init();
};

var body = document.querySelector("body");

var buttonsDiv = document.getElementById("buttonsDiv");
var currentTime = document.getElementById("currentTime");
var wordPlacementDiv = document.getElementById("wordPlacementDiv");
var formDiv = document.getElementById("formDiv");
var extrasDiv = document.getElementById("extrasDiv");
var gameOverDiv = document.getElementById("gameOverDiv");
var enterScoreDiv = document.getElementById("enterScoreDiv");

var timeKeeper = 0;
var totalWords = 0;
var timeInterval;
var time;
var wordPlay;
var points;
var number = 6000;
var wordComputer;
var wordUser;
var table;
var start;
var score;
var menu;
var form;
var input;
var submit;
var gameOverText;
var gamePoints;
var gameFinalPoints;
var gameWordCount;
var enter;
var again;
var instructions;

var created = false;

function init()
{
  createButtons();
  start.addEventListener("click", function()
  {
    // clearInterval(time);
    clearButtons();
    countdown();
    window.setTimeout(function(){startGame();}, 3000);
  });
  score.addEventListener("click", function()
  {
    table = document.getElementById("table");
    if(table)
    {
      table.parentNode.removeChild(table);
    }
    instructions = document.getElementById("instructions");
    if(instructions)
    {
      instructions.parentNode.removeChild(instructions);
    }
    getScores(scores);
  });
  menu.addEventListener("click", function()
  {
    table = document.getElementById("table");
    if(table)
    {
      table.parentNode.removeChild(table);
    }
    instructions = document.getElementById("instructions");
    if(instructions)
    {
      instructions.parentNode.removeChild(instructions);
    }
    var instructions = document.createElement("p");
    instructions.setAttribute("id", "instructions");
    instructions.innerHTML = "Type the word on the screen and hit enter. The faster you type, the more points you earn. Words are case sensitive. Each word you type correctly makes your \"Word Count\" go higher, each word you type incorrectly makes your \"Word Count\" go lower, try to get your \"Word Count\" as high as you can for a score multiplyer at the end of the game. If the time runs out the game is over.";
    body.appendChild(instructions);
  });
}

function createButtons()
{
  start = document.createElement("button");
  start.setAttribute("class", "buttons");
  start.innerHTML = "Play";
  buttonsDiv.appendChild(start);
  score = document.createElement("button");
  score.setAttribute("class", "buttons");
  score.innerHTML = "High Scores";
  buttonsDiv.appendChild(score);
  menu = document.createElement("button");
  menu.setAttribute("class", "buttons");
  menu.innerHTML = "Instructions";
  buttonsDiv.appendChild(menu);
  var instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.innerHTML = "Type the word on the screen and hit enter. The faster you type, the more points you earn. Words are case sensitive. Each word you type correctly makes your \"Word Count\" go higher, each word you type incorrectly makes your \"Word Count\" go lower, try to get your \"Word Count\" as high as you can for a score multiplyer at the end of the game. When the time runs out the game is over.";
  body.appendChild(instructions);
}

function clearButtons()
{
  table = document.getElementById("table");
  if(table)
  {
    table.parentNode.removeChild(table);
  }
  instructions = document.getElementById("instructions");
  if(instructions)
  {
    instructions.parentNode.removeChild(instructions);
  }
  start.parentNode.removeChild(start);
  score.parentNode.removeChild(score);
  menu.parentNode.removeChild(menu);
}

function countdown()
{
  // console.log("in countdown");
  var startingNumbers = document.createElement("p");
  startingNumbers.setAttribute("id", "startingNumbers");
  startingNumbers.innerHTML = "3";
  body.appendChild(startingNumbers);
  window.setTimeout(function(e){startingNumbers.innerHTML = "2";}, 1000);
  window.setTimeout(function(e){startingNumbers.innerHTML = "1";}, 2000);
  window.setTimeout(function(e){startingNumbers.parentNode.removeChild(startingNumbers);}, 3000);
}

function createForm()
{
  form = document.createElement("form");
  form.setAttribute("name", "form");
  form.setAttribute("id", "formy");
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "input");
  input.setAttribute("value", "");
  submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("name", "submit");
  submit.setAttribute("value", "Enter");
  submit.setAttribute("class", "buttons");
  // input.setAttribute("placeholder", "type here");
  form.appendChild(input);
  form.appendChild(submit);
  formDiv.appendChild(form);
}
gameOverText = document.createElement("p");
gameOverText.setAttribute("id", "gameOverText");
gameOverText.innerHTML = "";
gamePoints = document.createElement("p");
gamePoints.setAttribute("id", "gamePoints");
gamePoints.innerHTML = "";
gameFinalPoints = document.createElement("p");
gameFinalPoints.setAttribute("id", "gameFinalPoints");
gameFinalPoints.innerHTML = "";
gameWordCount = document.createElement("p");
gameWordCount.setAttribute("id", "gameWordCount");
gameWordCount.innerHTML = "";

function startGame()
{
  // console.log("in start game");
  gameOverDiv.appendChild(gameOverText);
  extrasDiv.appendChild(gamePoints);
  extrasDiv.appendChild(gameWordCount);
  extrasDiv.appendChild(gameFinalPoints);
  gamePoints.innerHTML = "Points: "+0;
  // gameStrikes.innerHTML = "Words Per Minute: "+0;
  gameWordCount.innerHTML = "Word Count: "+0;
  gameOverText.innerHTML = "";
  points = 0;
  strikes = 0;
  startGame2();
  timeInterval = setInterval(function()
  {
    timeKeeper++;
  }, 1000);
}
function startGame2()
{
  // console.log("in start game2!!!");
  createForm();
  startTime();
  getWord(word);
  // if(strikes < 3)
  // {
  //   // console.log("in if statement");
  //   // console.log("strikes: "+strikes);
  // }
  // else
  // {
  //   gameOver();
  // }
}

function gameLogic()
{
  // console.log("in game logic");
  input.value = "";
  input.focus();
  document.getElementById("formy").reset();
  // console.log("text field: "+input.value);
  wordComputer = wordPlay;
  form.submit.addEventListener("click", function(e)
  {
    e.preventDefault();
    wordUser = document.form.input.value;
    var equal = wordUser.localeCompare(wordComputer);
    // console.log("user word: "+wordUser);
    // console.log("computer word: "+wordComputer);
    // console.log("equal: "+equal);
    // console.log("time: "+currentTime.innerHTML);
    if(equal === 0)
    {
      totalWords++;
      // var intPoint = parseInt(currentTime.innerHTML);
      var intPoint = ((wordUser.length * 10) * 7);
      points += intPoint;
      gamePoints.innerHTML = "Points: "+points;
      gameWordCount.innerHTML = "Word Count: "+totalWords;
      // console.log("points: "+points);
      // clearInterval(time);
      // startGame2();
      removeForm = document.getElementById("formy");
      if(removeForm)
      {
        removeForm.parentNode.removeChild(removeForm);
      }
      createForm();
      getWord(word);
      // form.parentNode.removeChild(form);
    }
    else if (equal === 1 || equal === -1)
    {
      // strikes ++;
      if (totalWords > 0)
      {
        totalWords--;
      }
      // gameStrikes.innerHTML = "Strikes: "+strikes;
      gameWordCount.innerHTML = "Word Count: "+totalWords;
      // console.log("strikes: "+strikes);
      document.bgColor = "e60000";
      // audio.play();
      window.setTimeout(function(e){document.bgColor = "ffffff";}, 30);
      // clearInterval(time);
      // startGame2();
      removeForm = document.getElementById("formy");
      if(removeForm)
      {
        removeForm.parentNode.removeChild(removeForm);
      }
      createForm();
      getWord(word);
    }
  });
}

function gameOver()
{
  // console.log("in game over");
  window.clearInterval(timeInterval);
  form.parentNode.removeChild(form);
  var wpmNum = totalWords / (timeKeeper / 60);
  gameOverText.innerHTML = "GAME OVER";
  gamePoints.innerHTML = "Points: "+points;
  // gameWordCount.innerHTML = "Words Count: "+wpmNum;
  gameWordCount.innerHTML = "Word Count: "+totalWords;
  if (totalWords > 0);
  {
    points *= totalWords
  }
  gameFinalPoints.innerHTML = "Final Points: "+points;
  popLetters();
  enter = document.createElement("button");
  enter.setAttribute("class", "buttons");
  enter.innerHTML = "Enter Score";
  enterScoreDiv.appendChild(enter);
  enter.addEventListener("click", function()
  {
    var fi = document.getElementById("select0");
    var mi = document.getElementById("select1");
    var li = document.getElementById("select2");
    if (typeof(Storage) !== "undefined")
    {
        if (localStorage.fI)
            localStorage.fI = fi.value;
        else
            localStorage.fI = fi.value;
        if (localStorage.mI)
        	localStorage.mI = mi.value;
        else
        	localStorage.mI = mi.value;
        if (localStorage.lI)
        	localStorage.lI = li.value;
        else
        	localStorage.lI = li.value;
	}
    var letters = fi.value+mi.value+li.value;
    var obj = {initials:letters, score:points};
    updateData("PUT", "rest/score", obj);
    enter.parentNode.removeChild(enter);
    fi.parentNode.removeChild(fi);
    mi.parentNode.removeChild(mi);
    li.parentNode.removeChild(li);
  });
  again = document.createElement("button");
  again.setAttribute("class", "buttons");
  again.innerHTML = "Play Again";
  enterScoreDiv.appendChild(again);
  again.addEventListener("click", function()
  {
    location.reload();
  });
}

function popLetters()
{
  for (var i = 0; i < selects.length; i++)
  {
    var select = document.createElement("select");
    select.setAttribute("id", "select"+[i]);
    select.setAttribute("class", "buttons");
    for (var j = 0; j < characters.length; j++)
    {
      var option = document.createElement("option");
      option.innerHTML = characters[j].character;
      if (typeof(Storage) !== "undefined")
      {
    	  if (i === 0)
    	  {
    		  if (localStorage.fI)
    		  {
    			  if (localStorage.fI === option.innerHTML)
    				  option.selected = true;
    		  }
    	  }
    	  else if (i === 1)
    	  {
    		  if (localStorage.mI)
    		  {
    			  if (localStorage.mI === option.innerHTML)
    				  option.selected = true;
    		  }
    	  }
    	  else if (i === 2)
    	  {
    		  if (localStorage.lI)
    		  {
    			  if (localStorage.lI === option.innerHTML)
    				  option.selected = true;
    		  }
    	  }
      }
      select.appendChild(option);
    }
    enterScoreDiv.appendChild(select);
  }
}

var selects = [
    { name: 'fI'},
    { name: 'mI'},
    { name: 'lI'}
];

var characters = [
    { character: 'A'},
    { character: 'B'},
    { character: 'C'},
    { character: 'D'},
    { character: 'E'},
    { character: 'F'},
    { character: 'G'},
    { character: 'H'},
    { character: 'I'},
    { character: 'J'},
    { character: 'K'},
    { character: 'L'},
    { character: 'M'},
    { character: 'N'},
    { character: 'O'},
    { character: 'P'},
    { character: 'Q'},
    { character: 'R'},
    { character: 'S'},
    { character: 'T'},
    { character: 'U'},
    { character: 'V'},
    { character: 'W'},
    { character: 'X'},
    { character: 'Y'},
    { character: 'Z'},
    { character: '0'},
    { character: '1'},
    { character: '2'},
    { character: '3'},
    { character: '4'},
    { character: '5'},
    { character: '6'},
    { character: '7'},
    { character: '8'},
    { character: '9'},
];

function startTime()
{
  // console.log("in start time");
  // number -=100;
  currentTime.innerHTML = number;
  time = setInterval(function()
  {
    // console.log("in set interval");
    number -=1;
    currentTime.innerHTML = (number);
    // currentTime.innerHTML = (number/100);
    currentTime.setAttribute("class", "currentTime");
    if (currentTime.innerHTML <= 0)
    {
      document.bgColor = "e60000";
      window.setTimeout(function(e){document.bgColor = "ffffff";}, 30);
      clearInterval(time);
      gameOver();
    }
    else if (currentTime.innerHTML <= 1000)
      currentTime.setAttribute("id","one");
    else if (currentTime.innerHTML <= 2000)
      currentTime.setAttribute("id","two");
    else if (currentTime.innerHTML <= 3000)
      currentTime.setAttribute("id","three");
    else if (currentTime.innerHTML <= 4000)
      currentTime.setAttribute("id","four");
    else if (currentTime.innerHTML <= 5000)
      currentTime.setAttribute("id","five");
    else if (currentTime.innerHTML <= 6000)
      currentTime.setAttribute("id","six");
  }, 10);
}

var getWord = function(callback)
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/getWord");
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState == 4 && xhr.status < 400)
    {
      var word = JSON.parse(xhr.responseText);
      callback(word);
    }
  };
  xhr.send(null);
};

function word(word)
{
  var p = document.getElementById("wordPlacement");
  p.innerHTML = word.word;
  wordPlay = word.word;
  gameLogic();
}

var getScores = function(callback)
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/getScores");
  // // console.log(xhr.status);
  // // console.log(xhr.getAllResponseHeaders());
  xhr.onreadystatechange = function()
  {
    // // console.log(xhr.status);
    // // console.log(xhr.getAllResponseHeaders());
    if (xhr.readyState == 4 && xhr.status < 400)
    {
      var scores = JSON.parse(xhr.responseText);
      callback(scores);
    }
  };
  xhr.send(null);
};

function scores(scores)
{
  var body = document.querySelector("body");
  var table = document.createElement("table");
  table.setAttribute("id", "table");
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Initials";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML = "Score";
  tr.appendChild(th);
  table.appendChild(tr);

  for (var i = 0; i < scores.length; i++)
  {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = scores[i].initials;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerHTML = scores[i].score;
    tr.appendChild(td);
    table.appendChild(tr);
  }
  body.appendChild(table);
}

function updateData(method, url, object, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange=function ()
    {
        // // console.log(xhr.status);
        // // console.log(xhr.readyState);
        // // console.log(xhr.responseText);
        // // console.log(xhr.getAllResponseHeaders());
    }
    if (object)
    {
        xhr.send(JSON.stringify(object));
    }
    else
    {
        xhr.send(null);
    }
}
