
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}


document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1

  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var stringNumber = answerPTagWithValue.textContent
  var intValInElement = parseInt(stringNumber)
  answerPTagWithValue.innerHTML = intValInElement * 2
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var answerCircleBlackToWhite = document.querySelector('#circle-bw')
  if(answerCircleBlackToWhite.style.backgroundColor === 'white'){
    answerCircleBlackToWhite.style.backgroundColor = 'black'
  }else{
    answerCircleBlackToWhite.style.backgroundColor = 'white'
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}


  var answerBlowUp = document.querySelector('.circle-red')
  var redCircleStyles = window.getComputedStyle(answerBlowUp)
  var redCircleWidth = redCircleStyles.width
  var widthAsInteger = parseInt(redCircleWidth)
  var newWidth = widthAsInteger * 2
  answerBlowUp.style.width = newWidth + "px"

  var redCircleHeight = redCircleStyles.height
  var heightAsInteger = parseInt(redCircleHeight)
  var newHeight = heightAsInteger * 2
  answerBlowUp.style.height = newHeight + "px"

  if(newWidth < 320){
    answerBlowUp.style.width = newWidth + 'px'
  }if(newHeight < 320){
    answerBlowUp.style.height = newHeight +'px'
  }else{
    answerBlowUp.style.width = "40px"
    answerBlowUp.style.height = '40px'
  }
})


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var answerRemoveInactive = document.querySelectorAll('#user-list li')
  var userListEl = document.querySelector('#user-list')
  var allLiElements = ""
  console.log(userListEl)
   forEach(answerRemoveInactive, function(liElement, index, theArray){
    if(liElement.className === "active"){
      var liStr = liElement.outerHTML
      allLiElements += liStr
    }
  })
  userListEl.innerHTML = allLiElements

})




document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var answerReverseSquares = document.querySelectorAll('.answer-box span')
  var boxList = document.querySelector('.multi-squares')
  var allBoxElements = ''
  var newArr = []
  forEach(answerReverseSquares, function(spanEl, index, arr){
    newArr.push(spanEl)
    console.log(spanEl)
  })
  var arrReverse = newArr.reverse()

  forEach(arrReverse, function(spanEl, index, arr){
    allBoxElements += spanEl.outerHTML

  })
  console.log(allBoxElements)
  boxList.innerHTML = allBoxElements
})



document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var answerReadBackwards = document.querySelectorAll('#tasks li')
  var taskList = document.querySelector('#tasks')
  var allWords = ''
  var newArr = []

  forEach(answerReadBackwards, function(spanEl, index, arr){
    var wordsInList= answerReadBackwards.innerHTML
    console.log([answerReadBackwards])
    newArr.push(spanEl)
  })
  var wordsArrayReverse = newArr.reverse()

})


document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
