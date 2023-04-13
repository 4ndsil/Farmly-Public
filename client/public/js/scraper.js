async function scrape() {

    const scrapedObjs = await fetch(`/scrape`).then(r => r.json())
    
    const wrapper = document.getElementById("wrapper")    

    let i = 0
    scrapedObjs[2]
    while (i != scrapedObjs.length){
        const obj = scrapedObjs[i]
        
        let divSlider = document.createElement("div")
        let divCard = document.createElement("div")
        let link = document.createElement("a")        
        let img = document.createElement("img")
        let divBody = document.createElement("div")
        let title = document.createElement("h3")
        let desc = document.createElement("p")
        let date = document.createElement("p")
        let url = document.createElement("p")
        
        divSlider.classList.add("swiper-slide")  

        link.classList.add("card-link-container")
        link.setAttribute("target", "_blank")
        link.setAttribute("href", obj["url"])
        divSlider.appendChild(link)

        divCard.classList.add("card")
        link.appendChild(divCard)

        if (i == 2){
            img.classList.add("card-image")  
            img.setAttribute("src", "/static/images/farmly.png")
            divCard.appendChild(img)
        }
        else{
            img.classList.add("card-image")  
            img.setAttribute("src", obj['image'])
            divCard.appendChild(img)
        }
        
        divBody.classList.add("card-body")
        divCard.appendChild(divBody)
        
        title.innerText = obj['title']
        divBody.appendChild(title)

        let descFull = obj["desc"]
        let descSub = descFull.substring(0, 85)
        desc.classList.add("card-desc")  
        desc.innerText = descSub + "..."
        divBody.appendChild(desc)
      
        url.classList.add("card-url")
        let urlSub = obj["url"].split('/')[2]
        url.innerText = urlSub
        divBody.appendChild(url)

        date.classList.add("card-date")
        date.innerText = `${obj["date"].split("T")[0]}`
        divBody.appendChild(date)

        wrapper.appendChild(divSlider)

        i++
    }
}

scrape()