function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll(".ranked-list")

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1
  }
}

function deepestChild() {
  return document.getElementById("app").querySelectorAll("#grand-node div div div div")[0]
}