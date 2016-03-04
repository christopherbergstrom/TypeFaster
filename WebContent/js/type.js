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

var time;
var wordPlay;
var points;
var strikes;
var number = 10100;
var wordComputer;
var wordUser;
var table;
var start;
var score;
var menu;
var form;
var input;
var submit;
var gamePoints;
var gameStrikes;
var gameOverText;
var enter;
var again;
var instructions;

var created = false;

function init()
{
  createButtons();
  start.addEventListener("click", function()
  {
    clearInterval(time);
    clearButtons();
    startGame();
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
    instructions.innerHTML = "Type the word on the screen and hit enter. The faster you type, the more points you get. You get a strike if you miss type a word or if the time runs out. Get three strikes and you lose.";
    body.appendChild(instructions);
  });
}

removeForm = document.getElementById("formy");
if(removeForm)
{
  removeForm.parentNode.removeChild(removeForm);
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
  input.setAttribute("placeholder", "TYPE HERE!!!");
  form.appendChild(input);
  form.appendChild(submit);
  formDiv.appendChild(form);
}
gamePoints = document.createElement("p");
gamePoints.setAttribute("id", "gamePoints");
gamePoints.innerHTML = "Points: ";
gameStrikes = document.createElement("p");
gameStrikes.setAttribute("id", "gameStrikes");
gameStrikes.innerHTML = "Strikes: ";
gameOverText = document.createElement("p");
gameOverText.setAttribute("id", "gameOverText");
gameOverText.innerHTML = "";

function startGame()
{
  console.log("in start game");
  extrasDiv.appendChild(gamePoints);
  extrasDiv.appendChild(gameStrikes);
  gameOverDiv.appendChild(gameOverText);
  gamePoints.innerHTML = "Points: "+0;
  gameStrikes.innerHTML = "Strikes: "+0;
  gameOverText.innerHTML = "";
  points = 0;
  strikes = 0;
  startGame2();
}
var x;
function startGame2()
{
  console.log("in start game2!!!");
  createForm();
  x = 1;
  x++;
  console.log("x: "+x);
  if(strikes < 3)
  {
    startTime();
    console.log("in if statement");
    console.log("strikes: "+strikes);
    getWord(word);
  }
  else
  {
    gameOver();
  }
}

function gameLogic()
{
  console.log("in game logic");
  input.value = "";
  input.focus();
  document.getElementById("formy").reset();
  console.log("text field: "+input.value);
  wordComputer = wordPlay;
  form.submit.addEventListener("click", function(e)
  {
    e.preventDefault();
    wordUser = document.form.input.value;
    var equal = wordUser.localeCompare(wordComputer);
    console.log("user word: "+wordUser);
    console.log("computer word: "+wordComputer);
    console.log("equal: "+equal);
    console.log("time: "+currentTime.innerHTML);
    if(equal === 0)
    {
      var intPoint = parseInt(currentTime.innerHTML);
      points += intPoint;
      gamePoints.innerHTML = "Points: "+points;
      console.log("points: "+points);
      clearInterval(time);
      startGame2();
      removeForm = document.getElementById("formy");
      if(removeForm)
      {
        removeForm.parentNode.removeChild(removeForm);
      }
      // form.parentNode.removeChild(form);
    }
    else if (equal === 1 || equal === -1)
    {
      strikes ++;
      gameStrikes.innerHTML = "Strikes: "+strikes;
      console.log("strikes: "+strikes);
      clearInterval(time);
      startGame2();
      removeForm = document.getElementById("formy");
      if(removeForm)
      {
        removeForm.parentNode.removeChild(removeForm);
      }
    }
  });
}

function gameOver()
{
  console.log("in game over");
  form.parentNode.removeChild(form);
  gameOverText.innerHTML = "GAME OVER";
  gamePoints.innerHTML = "Final Points: "+points;
  gameStrikes.innerHTML = "Strikes: "+strikes;
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
    var letters = fi.value+mi.value+li.value;

    var obj = {initials:letters, score:points};
    updateData("PUT", "rest/score", obj);
    enter.parentNode.removeChild(enter);
    window.setTimeout(function(e){getScores(scores)}, 100);
  });
  again = document.createElement("button");
  again.setAttribute("class", "buttons");
  again.innerHTML = "Play Again?";
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
    for (var j = 0; j < characters.length; j++)
    {
      var option = document.createElement("option");
      option.innerHTML = characters[j].character;
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
  console.log("in start time");
  number -=100;
  currentTime.innerHTML = number;
  time = setInterval(function()
  {
    console.log("in set interval");
    currentTime.innerHTML -=1;
    currentTime.setAttribute("class", "currentTime");
    if (currentTime.innerHTML <= 10100)
      currentTime.setAttribute("id","ten");
    if (currentTime.innerHTML <= 9000)
      currentTime.setAttribute("id","nine");
    if (currentTime.innerHTML <= 8000)
      currentTime.setAttribute("id","eight");
    if (currentTime.innerHTML <= 7000)
      currentTime.setAttribute("id","seven");
    if (currentTime.innerHTML <= 6000)
      currentTime.setAttribute("id","six");
    if (currentTime.innerHTML <= 5000)
      currentTime.setAttribute("id","five");
    if (currentTime.innerHTML <= 4000)
      currentTime.setAttribute("id","four");
    if (currentTime.innerHTML <= 3000)
      currentTime.setAttribute("id","three");
    if (currentTime.innerHTML <= 2000)
      currentTime.setAttribute("id","two");
    if (currentTime.innerHTML <= 1000)
      currentTime.setAttribute("id","one");
    if (currentTime.innerHTML <= 0)
    {
      strikes ++;
      gameStrikes.innerHTML = "Strikes: "+strikes;
      console.log("strikes: "+strikes);
      clearInterval(time);
      startGame2();
      removeForm = document.getElementById("formy");
      if(removeForm)
      {
        removeForm.parentNode.removeChild(removeForm);
      }
    }
  }, 1);
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
  // console.log(xhr.status);
  // console.log(xhr.getAllResponseHeaders());
  xhr.onreadystatechange = function()
  {
    // console.log(xhr.status);
    // console.log(xhr.getAllResponseHeaders());
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
        // console.log(xhr.status);
        // console.log(xhr.readyState);
        // console.log(xhr.responseText);
        // console.log(xhr.getAllResponseHeaders());
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
