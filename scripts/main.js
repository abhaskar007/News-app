
async function apiCall(url) {
    try{
        let res= await fetch(url);
        let articles = await res.json();
        return articles;
    }
    catch(err)
    {
        console.log("erroe:", err);
    }
        //add api call logic here
    }
    
    
    function appendArticles(articles, main) {
    
        //add append logic here
        articles.forEach(Element=>{
            let div = document.createElement("div");
    
            let title= document.createElement("p");
            title.innerHTML= Element.title;
            
    
            let img = document.createElement("img");
            img.src= Element.urlToImage;
    
            let p= document.createElement("p");
            p.innerHTML = Element.description;
    
            div.append(img,title,p);
            main.append(div);
    
        })
    
    }
    
    export { apiCall, appendArticles };