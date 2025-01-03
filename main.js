const pipes = document.querySelectorAll('.pipes')
const bird = document.querySelector('.bird')
const jump = document.querySelector('.jump')
const toppipe = document.querySelector('.top-pipes')
const botpipe = document.querySelector('.bottom-pipes')
const toppipe2 = document.querySelector('.top-pipes2')
const botpipe2 = document.querySelector('.bottom-pipes2')
for (i = 0; i < pipes.length; i++) {

  let rand = Math.floor(
    (Math.random() * 5 + 4) * 22
  )
  pipes[i].style.height = rand + 'px'

}


setInterval(() => {
  const pipes2 = document.querySelectorAll('.pipes')


  const newDiv = document.createElement('div');
  const newDiv2 = document.createElement('div');
  
  newDiv.classList.add('pipes');
  newDiv2.classList.add('pipes');

  let rand = Math.floor(
    (Math.random() * 5 + 4) * 23
  )
  let rand2 = Math.floor(
    (Math.random() * 5 + 4) * 22
  )
  

  newDiv.style.height = rand + 'px'
  newDiv2.style.height = rand2 + 'px'
  
  toppipe.appendChild(newDiv)
  botpipe.appendChild(newDiv2)
  
  
  for (j = 0; j < pipes2.length; j++) {

    toppipe.removeChild(pipes2[j])
    botpipe.removeChild(pipes2[j + 5])
    
    break
  }


}, 5000);




jump.addEventListener('click', () => {
  bird.style.top = '-2500px'; 
  startIncrementing()
  setTimeout(() => {
    bird.style.top = '425px';
  }, 30); 
});
setInterval(()=>{
  detectCollisions()
},100)



function checkCollision(elementA, elementB) {
  const rectA = elementA.getBoundingClientRect();
  const rectB = elementB.getBoundingClientRect();

  return (
    rectA.left < rectB.right &&
    rectA.right > rectB.left &&
    rectA.top < rectB.bottom &&
    rectA.bottom > rectB.top
  );
}

function detectCollisions() {
  pipes.forEach((pipe, index) => {
    if (checkCollision(bird, pipe)) {
      console.log(`Collision detected with item ${index + 1}`);
      
      bird.style.top = '1400px'
      alert('duarrr, scoremu : '+score)
      location.reload()
    } 
  });
}

const scoreDis = document.querySelector('.score')
let score = 0;
let interval;

  function startIncrementing() {
  if (!interval) { 
    interval = setInterval(() => {
      score++;
      scoreDis.textContent = `Score: ${score}`;
    }, 50); 
  }
}
;


function stopIncrementing() {
  clearInterval(interval); 
  interval = null;
}
