function renderApp(data) {
    const app = document.getElementById('app')
    console.log(data)

    const {squadName, members} = data
    
    const h1 = document.createElement('h1')
    h1.innerText = squadName

    const section = document.createElement('section')
    members.forEach(member => {
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        h2.innerText = member.name
        const para = document.createElement('p')
        para.innerText = `Secret Identity: ${member.secretIdentity}; Powers: ${member.powers.join(', ')}`
        article.appendChild(h2)
        article.appendChild(para)
        section.append(article)
    })  

    app.appendChild(h1)
    app.appendChild(section)
}

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
.then(response => {
    if (!response.ok) {
       throw new Error('Network responce was not ok');
    }
    return response.json();
})
.then(data => {
    // do things with our data
renderApp(data);
})
.catch(error => {
    console.error('Oops: ${error}');
})