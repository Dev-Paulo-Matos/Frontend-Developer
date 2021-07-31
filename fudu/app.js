

const api = async () => {

    try {
        const response = await fetch('https://api.spoonacular.com/food/menuItems/search?query=burger&number=4&imageType=jpg&apiKey=a3b5cf04c3d34cb8873405c88368c5f6')
        const data = await response.json()
        show(data)

    } catch (error) {
        
        console.error(error)
        console.log('dando erro')
    }

}

const show = (itens) => {
    let menu = document.querySelector('.menu-itens')
    let menuItens =  itens.menuItems
    for (item of menuItens) {
        menu.innerHTML += `<div class="card" style="width: 18rem;">
                    <div class="img-over">

                        <img src="${item.image}" class="card-img-top img-card" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Burger</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
    }
}
api()
