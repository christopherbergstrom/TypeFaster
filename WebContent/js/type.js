window.onload = function()
{
  init();
};

var body = document.querySelector("body");

var timeDiv = document.getElementById("timeDiv");
var wordPlacementDiv = document.getElementById("wordPlacementDiv");
var formDiv = document.getElementById("formDiv");
var extrasDiv = document.getElementById("extrasDiv");
var gameOverDiv = document.getElementById("gameOverDiv");

var start = document.getElementById("start");
var score = document.getElementById("score");
var menu = document.getElementById("menu");
// var buttons = document.getElementById("buttons");
var currentTime = document.getElementById("currentTime");
// currentTime.innerHTML = 10;
var time;
var wordPlay;

function init()
{
  start.addEventListener("click", function()
  {
    startGame();
    start.parentNode.removeChild(start);
  });

  score.addEventListener("click", function()
  {
    getScores(scores);
  });

  menu.addEventListener("click", function()
  {
    // clearButtons(start, score, menu);
    // createButtons();
    // var p = document.getElementById("p");
    var table = document.getElementById("table");
    // if(p)
    // {
    //   p.parentNode.removeChild(p);
    // }
    if(table)
    {
      table.parentNode.removeChild(table);
    }
  });
}

function clearButtons(start, score, menu)
{
  if(start)
  {
    start.parentNode.removeChild(start);
  }
  if(score)
  {
    score.parentNode.removeChild(score);
  }
  if(menu)
  {
    menu.parentNode.removeChild(menu);
  }
}

var points = 0;
var strikes = 0;

var number = 5;
var time;

var wordComputer;
var wordUser;

var form = document.createElement("form");
form.setAttribute("name", "form");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "input");
input.setAttribute("value", "");
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("value", "enter");
input.setAttribute("placeholder", "TYPE HERE!!!");
var gamePoints = document.createElement("p");
gamePoints.setAttribute("id", "gamePoints");
gamePoints.innerHTML = "Points: ";
var gameStrikes = document.createElement("p");
gameStrikes.setAttribute("id", "gameStrikes");
gameStrikes.innerHTML = "Strikes: ";

function startGame()
{
  console.log("in start game");

  form.appendChild(input);
  form.appendChild(submit);
  formDiv.appendChild(form);
  extrasDiv.appendChild(gamePoints);
  extrasDiv.appendChild(gameStrikes);

  if(strikes < 3)
  {
    startTime();
    console.log("in if statement");
    console.log("strikes: "+strikes);
    getWord(word);
  }
  else
  {
    form.parentNode.removeChild(form);
    gameOver();
  }
}

function gameLogic()
{
  console.log("in game logic");

  input.value = "";
  input.focus();
  wordComputer = wordPlay;
  form.submit.addEventListener("click", function(e)
  {
    wordUser = document.form.input.value;
    e.preventDefault();
    var equal = wordUser.localeCompare(wordComputer);
    // console.log(equal);
    console.log("time: "+currentTime.innerHTML);
    if(equal === 0 && currentTime.innerHTML > 0)
    {
      points ++;
      gamePoints.innerHTML = "Points: "+points;
      console.log("points: "+points);
      clearInterval(time);
      startGame();
    }
    else if (equal === 1 || equal === -1)
    {
      strikes ++;
      gameStrikes.innerHTML = "Strikes: "+strikes;
      console.log("strikes: "+strikes);
      clearInterval(time);
      startGame();
    }

    // else
    // {
    //   strikes ++;
    //   gameStrikes.innerHTML = strikes;
    //   console.log("strikes: "+strikes);
    //   // stopTime();
    //   clearInterval(time);
    //   startGame();
    // }
  });
}

function gameOver()
{
  console.log("in game over");
  var game = document.createElement("p");
  gameOverDiv.appendChild(game);
  game.innerHTML = "GAME OVER";
  gamePoints.innerHTML = "Final Points: "+points;
  gameStrikes.innerHTML = "Strikes: "+strikes;
}

function startTime()
{
  console.log("in start time");
  // number --;
  currentTime.innerHTML = number;
  time = setInterval(function()
  {
    console.log("in set interval");
    // console.log(currentTime.innerHTML);
    currentTime.innerHTML --;
    if (currentTime.innerHTML <= 0)
    {
      strikes ++;
      gameStrikes.innerHTML = "Strikes: "+strikes;
      console.log("strikes: "+strikes);
      clearInterval(time);
      startGame();
    }
  }, 1000);
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
  wordPlacementDiv.appendChild(p);
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

  for (var i = 0; i < scores.length; i++)
  {
    var tr = document.createElement("tr");
    var key = scores[i]
    for (var k in key)
    {
      var th = document.createElement("th");
      th.setAttribute("id", "th");
      // th.value = k;
      th.innerHTML = k;
      tr.appendChild(th);
      table.appendChild(tr);
    }
    var tr = document.createElement("tr");
    var obj = scores[i]
    for (var p in obj)
    {
      var td = document.createElement("td");
      td.setAttribute("id", "td");
      // td.value = obj[p];
      td.innerHTML = obj[p];
      // console.log(obj[p]);
      tr.appendChild(td);
      table.appendChild(tr);
    }
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

// var add = document.add;
// add.submit.addEventListener("click", function (e)
// {
//   e.preventDefault();
//   var desc = document.add.desc.value;
//   var miles = document.add.miles.value;
//   var gallons = document.add.gallons.value;
//   var gas = document.add.gas.value;
//   // console.log(desc);
//   // console.log(miles);
//   // console.log(gallons);
//   // console.log(gas);
//   var obj = {"tripDescription":desc, "milesDriven":miles, "gallonsPurchased":gallons, "priceOfGas":gas};
//   // console.log("PUT", "http://localhost:8080/TypeFaster/rest/score", obj);
//   // popSelect();
//   updateData("PUT", "http://localhost:8080/TypeFaster/rest/score", obj);
// });
// // clearTable();
// }

// function updateData(method, url, object, callback)
// {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange=function ()
//     {
//         // console.log(xhr.status);
//         // console.log(xhr.readyState);
//         // console.log(xhr.responseText);
//         // console.log(xhr.getAllResponseHeaders());
//
//     }
//     if (object)
//     {
//         xhr.send(JSON.stringify(object));
//     }
//     else
//     {
//         xhr.send(null);
//     }
//     // popSelect();
// }
