

let mothetDiv = document.createElement('div')

let childDiv = document.createElement('div')

//

let nameH1 = document.createElement('h1')

let nameText = document.createTextNode('Eldsot Mirzeyev')

nameH1.appendChild(nameText)

childDiv.appendChild(nameH1)

mothetDiv.appendChild(childDiv)

childDiv.style.width = `50%`

childDiv.style.marginLeft = '120px'

childDiv.style.backgroundColor = 'gray'

nameH1.style.textAlign = 'center'

// 

let bioP = document.createElement('p')

let nameP = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .')

bioP.appendChild(nameP)

mothetDiv.appendChild(bioP)

bioP.style.textAlign = 'center'

bioP.style.paddingLeft = '10px'

bioP.style.paddingRight = '10px'

//

let skilsH = document.createElement('h2')

let h2 = document.createTextNode('Skils')

skilsH.appendChild(h2)

mothetDiv.appendChild(skilsH)

skilsH.style.marginLeft = '40px'

//

let ul = document.createElement('ul')

let li = document.createElement('li')

let arr = ['Photography','Hiking','Camping','Cookong','Navigation']

ul.appendChild(li)

mothetDiv.appendChild(ul)

for(let i = 0; i < arr.length; i++){
    li.innerHTML += `<li>${arr[i]}</li>`
}

mothetDiv.style.marginLeft = '300px'

mothetDiv.style.marginTop ='100px'

mothetDiv.style.border = `solid`

mothetDiv.style.width = '35%'

mothetDiv.style.backgroundColor = 'lightgray'


//


document.body.appendChild(mothetDiv)