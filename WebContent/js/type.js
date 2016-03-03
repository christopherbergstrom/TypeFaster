window.onload = function()
{
  init();
};

var body = document.querySelector("body");
var buttons = document.getElementById("buttons");
var currentTime = document.getElementById("currentTime");
currentTime.innerHTML = 5;
var time = 0;
var wordPlay;

function init()
{
  console.log(currentTime.innerHTML);
  createButtons();
}


function createButtons()
{
  var start = document.createElement("button");
  start.innerHTML = "Start";
  buttons.appendChild(start);
  var score = document.createElement("button");
  score.innerHTML = "View High Scores";
  buttons.appendChild(score);
  var menu = document.createElement("button");
  menu.innerHTML = "Menu";
  buttons.appendChild(menu);

  start.addEventListener("click", function()
  {
    // clearButtons(start, score);
    startGame();
    start.parentNode.removeChild(start);
  });

  score.addEventListener("click", function()
  {
    // clearButtons(start, score);
    getScores(scores);
  });

  menu.addEventListener("click", function()
  {
    clearButtons(start, score, menu);
    createButtons();
    var p = document.getElementById("p");
    var table = document.getElementById("table");
    if(p)
    {
      p.parentNode.removeChild(p);
    }
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

var number = 6;
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

function startGame()
{
  console.log("in start game");


  form.appendChild(input);
  form.appendChild(submit);
  body.appendChild(form);


  do
  {
    console.log("in do while loop");
    console.log("strikes: "+strikes);
    getWord(word);
    // gameLogic();
    strikes++;
  } while (strikes < 4);

  gameOver();
}


function gameLogic()
{
  console.log("in game logic");

  input.value = "";
  input.focus();
  wordComputer = wordPlay;
  // console.log("wordComputer: "+wordComputer);
  // console.log("wordPlay: "+wordPlay);
  startTime();
  form.addEventListener("click", function(e)
  {
    e.preventDefault();
    wordUser = document.form.input.value;
    var equal = wordUser.localeCompare(wordComputer);
    // console.log(equal);
  });
  if(equal === 0 && currentTime.innerHTML >= 0)
  {
    points ++;
  }
  else
  {
    strikes ++;
  }
}

function gameOver()
{
  console.log("in game over");
  var game = document.createElement("p");
  var finalPoints = document.createElement("p");
  game.innerHTML = "GAME OVER";
  finalPoints.innerHTML = "points: " + points;
  body.appendChild(game);
  body.appendChild(finalPoints);
}

function startTime()
{
  console.log("in start time");
  number --;
  // amount of time to type word
  // console.log("test1");
  currentTime.innerHTML = number;
  // console.log("test2");
  time = setInterval(function()
  {
    console.log("in set interval");
    // console.log(currentTime.innerHTML);
    currentTime.innerHTML --;
    if (currentTime.innerHTML <= 0)
    {
      stopTime();
    }
  }, 1000);
}

function stopTime()
{
  console.log("in stop time");
  window.setTimeout(function(e){clearInterval(time)}, 0);
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
  var p = document.getElementById("p");
  p.parentNode.removeChild(p);
  var p = document.createElement("p");
  p.setAttribute("id", "p");
  p.value = word.word;
  p.innerHTML = word.word;
  wordPlay = word.word;
  console.log("wordPlay: " + wordPlay);
  body.insertBefore(p, document.form);
  gameLogic();
}

var getScores = function(callback)
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/getScores");
  console.log(xhr.status);
  console.log(xhr.getAllResponseHeaders());
  xhr.onreadystatechange = function()
  {
    console.log(xhr.status);
    console.log(xhr.getAllResponseHeaders());
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
