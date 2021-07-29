
const getContent = async () => {
    try {
        const response = await fetch('http://localhost:3333/')

        const data = await response.json()/*Tratar o Dado */

        show(data)
    } catch (error) {
        console.error(error)
    }

}
getContent()

const show = (users) => {
    let output = ''
    for (use of users) {
        output +=`<li>${use.name}</li>`
    }
    document.querySelector('main').innerHTML += output
}
