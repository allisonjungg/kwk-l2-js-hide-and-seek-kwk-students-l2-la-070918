//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div')
}
function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list')
  for (let i=0; i < lis.length; i++) {
    lis[i].innerHTML = (i+1).toString()
  }
  return document.querySelector(".ranked-list ")
}
function deepestChild () {
 return document.querySelector("#grand-node div div div div")
}