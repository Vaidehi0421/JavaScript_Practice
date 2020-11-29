document.addEventListener('DOMContentLoaded', ()=>{
	const cardArray=[
	{	name:'fries',
		img:'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name:'pizza',
		img:'images/pizza.png'
	},
	{
		name:'milkshake',
		img:'images/milkshake.png'
	},
	{
		name:'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name:'hotdog',
		img: 'images/hotdog.png'
	},
	{	name:'fries',
		img:'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name:'pizza',
		img:'images/pizza.png'
	},
	{
		name:'milkshake',
		img:'images/milkshake.png'
	},
	{
		name:'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name:'hotdog',
		img: 'images/hotdog.png'
	}
	]
	cardArray.sort(()=>
		Math.random()-Math.random()
	)
	const grid=document.querySelector('.grid')
	let cardsChosen=[]
	let cardsChosenId=[]
	let resultDisplay=document.querySelector('#result')
	let cardsWon=[]
	function createBoard(){
		for(let i=0;i<cardArray.length;i++)
		{
			var card=document.createElement('img')
			card.setAttribute('src','images/blank.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}
	function checkMatch(){
		let cards=document.querySelectorAll('img')
		let Id1=cardsChosenId[0];
		let Id2=cardsChosenId[1];
		if(Id2==Id1)
		{
			cards[Id1].setAttribute('src','images/blank.png')
			cards[Id2].setAttribute('src','images/blank.png')
			alert('You have clicked on the same image')
		}
		else if(cardsChosen[0]==cardsChosen[1])
		{
			alert('You found a match')
			cards[Id1].setAttribute('src','images/white.png')
			cards[Id2].setAttribute('src','images/white.png')
			cards[Id1].removeEventListener('click',flipcard)
			cards[Id2].removeEventListener('click',flipcard)
			cardsWon.push(cardsChosen)
			console.log(cardsWon)
		}
		else
		{
			cards[Id2].setAttribute('src','images/blank.png')
			cards[Id1].setAttribute('src','images/blank.png')
			alert('Sorry, Try Again')
		}
		cardsChosen=[]
		cardsChosenId=[]
		resultDisplay.textContent= cardsWon.length
		if(cardsWon.length==cardArray.length/2)
		{
			resultDisplay.textContent='Congratulations,You won them all'
		}
	}
	function flipcard(){
		let cardId=this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId)
		this.setAttribute('src',cardArray[cardId].img)
		if(cardsChosen.length===2)
		{
			setTimeout(checkMatch, 500)
		}
	}
	createBoard()
	}) 