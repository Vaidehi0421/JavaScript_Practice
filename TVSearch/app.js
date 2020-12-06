const form=document.querySelector('#tvform')
const makeImage = (shows) => {
    for(let result of shows)
    {   if(result.show.image)
        {
            const Img=document.createElement('img')
            Img.src=result.show.image.medium
            document.body.append(Img)
        }
        
    }
}
form.addEventListener('submit', async function(e){
e.preventDefault()
const preimg= document.querySelectorAll('img')
console.log(preimg.length)
if(preimg.length>0)
{   for(let allimg of preimg)
    {
        document.body.removeChild(allimg)
    }
}
const searchVal=form.elements.tvsearch.value
const res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchVal}`)
makeImage(res.data)
})

