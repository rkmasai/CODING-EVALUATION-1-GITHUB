var data= JSON.parse(localStorage.getItem("products"))||[];

var container= document.getElementById("all_products")

    display(data)
function display(data)

// container.innerHTML=null
{
data.forEach(function(ele, index){
    var div= document.createElement("div")

    var img= document.createElement("img")
    img.src=ele.image

    var type= document.createElement("h4")
    type.innerText= ele.type

    var desc= document.createElement("p")
    desc.innerText=ele.desc

    var price= document.createElement("p")
    price.innerText=ele.price

    var btn= document.createElement("button")
    btn.innerText="Delete"
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function(){
        deleterow(ele, index)
    })

    div.append(img, type, desc, price, btn )
    container.append(div)

})

}

function deleterow(ele, index)
{
    data.splice(index,1)
    
    localStorage.setItem("products", JSON.stringify(data))
    window.location.reload();
}


function addfun(){
    window.location.href= "index.html"
}