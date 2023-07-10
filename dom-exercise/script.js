const container = document.querySelector('#container');
const btn = document.querySelector('#header');

btn.addEventListener('click', function (e) {
    console.log(e.target.style.background = 'blue');
});

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is glorious text-content';

const redP = document.createElement('p');
redP.textContent = 'Hey I\'m red';

const blueH3 = document.createElement('h3');
blueH3.textContent = 'I\m blue h3';

const blackBorder = document.createElement('div');

const inaDiv = document.createElement('h1');
inaDiv.textContent = 'I\'m in a div';

const  inaDiv2 = document.createElement('p')
inaDiv2.textContent = 'ME TOO!';


redP.style.color = 'red'; 
blueH3.style.color = 'blue';

blackBorder.style.border = '1px solid black';
blackBorder.style.backgroundColor = 'pink';


container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);
blackBorder.appendChild(inaDiv);
blackBorder.appendChild(inaDiv2);
container.appendChild(blackBorder);


