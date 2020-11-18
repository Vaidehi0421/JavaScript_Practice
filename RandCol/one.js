const btn=document.querySelector('button');
const h1=document.querySelector('h1');
btn.addEventListener('click', () =>{
	let newCol=genRandCol();
	document.body.style.backgroundColor=newCol;
	h1.innerText=newCol;
});

let genRandCol = () =>{
	let r=Math.floor(Math.random()* 255);
	let g=Math.floor(Math.random()* 255);
	let b=Math.floor(Math.random()* 255);
	return `rgb(${r}, ${g}, ${b})`;
}