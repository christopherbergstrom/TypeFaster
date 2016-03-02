window.onload = function()
{
  init();
};

function init()
{
  createButtons();
}

var body = document.querySelector("body");
var buttons = document.getElementById("buttons");

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
    getWord(word);
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
  if (start)
  {
    start.parentNode.removeChild(start);
  }
  if (score)
  {
    score.parentNode.removeChild(score);
  }
  if (menu)
  {
    menu.parentNode.removeChild(menu);
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
  var body = document.querySelector("body");
  var p = document.createElement("p");
  p.setAttribute("id", "p");
  // p.value = word.word;
  p.innerHTML = word.word;
  body.appendChild(p);
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
