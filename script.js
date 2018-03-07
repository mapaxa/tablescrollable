function ready() {
  //высчитываем высоты
  var winHeight = document.documentElement.clientHeight; // высота экрана
  var firstPartHeight = document.getElementById("firstpart").offsetHeight;
  var resultTableHeadHeight = document.querySelector('#results > thead').offsetHeight;
  var subtractionX = winHeight - firstPartHeight - resultTableHeadHeight - 10;
  var resultTableBody = document.querySelector('#results > tbody');
  resultTableBody.style.height = subtractionX + "px";
  //ширин
  var protocolTableWidth = document.getElementById('firstpart').offsetWidth;//берем полную ширину какого-то элемента, чтобы под него подстраивать нижнюю таблицу
  var resultsTableWidth = document.getElementById('results').style.width = protocolTableWidth + "px"; //присваиваем нижней таблице

  var resultsTableTheadTd = document.querySelectorAll('#results>thead>tr>th');
  var resultsTableTbodyTrSingle = document.querySelectorAll('#results>tbody>tr>td');
  var resultsTableTheadTdArray = Array.prototype.slice.call(resultsTableTheadTd);//приводим из коллекции к массиву
  /*
  старый вариант, высчитывает наоборот. берет ширину из головы
  var resultsTableTbodytr = document.querySelectorAll('#results>tbody>tr');
  var resultsTableTbodytrArray = Array.prototype.slice.call(resultsTableTbodytr);
  for(var i=0; i <= resultsTableTheadTd.length -1 ; i++) {
      var counter = i + 1;
    for (var j=0; j <= resultsTableTheadTd.length -1 ; j++) {
      var item = resultsTableTbodytrArray[j].querySelector('td:nth-child('+counter+')');
      item.style.width = resultsTableTheadTd[i].offsetWidth+"px";
    }
  }*/
  for(var i=0; i <= resultsTableTbodyTrSingle.length - 1 ; i++) {
    resultsTableTheadTdArray[i].style.width = resultsTableTbodyTrSingle[i].offsetWidth+"px";
  }
}
document.addEventListener('DOMContentLoaded', ready);
window.addEventListener('resize', ready);
