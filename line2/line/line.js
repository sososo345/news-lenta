document.getElementById("myprofbut").addEventListener('click', function(){
    window.open('../my profile/user.html')
});
document.getElementById("like1").addEventListener('click', function(){
    this.className="like-liked"
});
document.getElementById("like2").addEventListener('click', function(){
    this.className="like-liked"
});
document.getElementById("like3").addEventListener('click', function(){
    this.className="like-liked"
});
document.getElementById("like4").addEventListener('click', function(){
    this.className="like-liked"
});

LoadNews()
async function LoadNews() {
    const responce = await fetch("news.json")
    const News = await responce.json()
    const NewsFeed = document.getElementById('news')
    News.ForEach(item=>{
        const New =document.createElement('div')
        New.className='newsitem'
        const newhead = document.createElement('div')
        newhead.textContent= item.title
        New.appendChild(newhead)
        const newimg = document.createElement('img.src')
        newimg.src= item.img
        New.appendChild(newhead)
        const newcont = document.createElement('div')
        newcont.textContent= item.title
        New.appendChild(newhead)
        NewsFeed.appendChild(New)
    })
    
}

