export default function getBooks() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json =>{
            const books = json.map(photo => {
                const { id, title, url } = photo
                return { id, title, url }
            })
            return books
        })
}