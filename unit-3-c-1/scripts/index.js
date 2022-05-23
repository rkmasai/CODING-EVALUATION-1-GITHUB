//store the products array in localstorage as "products"

var arr= JSON.parse(localStorage.getItem("products"))||[]

var form= document.querySelector("form")

function myfunc(){
    event.preventDefault()

    obj={

        type: form.type.value,
        desc: form.desc.value,
        price: form.price.value,
        image :form.image.value
    }
   

    arr.push(obj)
    console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr))


}

function showfunction()
{
    window.location.href="inventory.html"
}