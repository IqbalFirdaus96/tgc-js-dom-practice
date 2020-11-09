// PLACE YOUR CODE HERE
let firstH1=document.querySelector('h1');
firstH1.style.color='green';

let textOfLiFinished = document.querySelector('li.finished');
textOfLiFinished.innerText='repay credit card debt';

let liIdUrgent=document.querySelector('li#urgent');
liIdUrgent.style.border='thick solid';
liIdUrgent.style.borderColor='black';
liIdUrgent.style.borderWidth='2px';

let classEmphasisUnderLined=document.querySelector('p span.emphasis');
classEmphasisUnderLined.style.textDecoration ='underline';

let pClassEmphasis = document.querySelector('p.emphasis');
pClassEmphasis.style.backgroundColor='orange';
pClassEmphasis.style.fontSize='32px';
pClassEmphasis.style.lineHeight='24px';
document.querySelector('li#urgent span.todo').style.backgroundColor = 'yellow'
let H2Change = document.querySelector('h2');
H2Change.innerHTML='<span class="greetings">About Us</span>'