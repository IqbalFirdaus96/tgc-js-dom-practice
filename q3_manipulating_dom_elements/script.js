// PLACE YOUR CODE HERE
let hello = document.querySelector('h1')
hello.innerText = 'Hello World!'
let selectSpanImportant= document.querySelector('span#important')
selectSpanImportant.style.backgroundColor ='red'
let liClassTodo=document.querySelector('li.todo')
liClassTodo.style.fontFamily='verdana'
liClassTodo.style.fontSize='16px'

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important,hello,selectSpanImportant,liClassTodo, todo};
} catch (e) {}