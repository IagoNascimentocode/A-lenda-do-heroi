
function createCard(){
    let gameBoard = document.getElementById("gameBoard")
    
    Heroes.forEach(hero => {
        
        let elementHEROI = document.createElement('div')
        elementHEROI.id = hero.name
        elementHEROI.classList.add("d-flex","center")
        


        let elementCard = document.createElement('div')
        elementCard.classList.add("card","w300","mt-5","mx-3")
        elementHEROI.appendChild(elementCard)
        

        
        let elementCardHEADER = document.createElement('div')
        elementCardHEADER.classList.add("card-header","bg-dark","w300")
        
        let nameHero = document.createElement('h1')
        nameHero.classList.add('text-center','text-white')
        nameHero.innerText = hero.name
        
        let imgHero = document.createElement('img')
        imgHero.classList.add("img-thumbnail", "w-100", "h-75")
        imgHero.src = "./assets/img/" + hero.name + ".png"
        
        let h6Type = document.createElement('h6')
        h6Type.classList.add('text-center','text-white')
        h6Type.innerText = "Tipo: " + hero.type
        
        elementCardHEADER.appendChild(nameHero)
        elementCardHEADER.appendChild(imgHero)
        elementCardHEADER.appendChild(h6Type)
        elementCard.appendChild(elementCardHEADER)
        
        

        let elementCardBODY = document.createElement('div')
        elementCardBODY.classList.add("card-body","bg-secondary",'text-white')

        let h6Life = document.createElement('h6')
        h6Life.innerText = "Vida: " + hero.life

        let h6Damage = document.createElement('h6')
        h6Damage.innerText = "Dano: " + hero.damage
        
        let h6Armor = document.createElement('h6')
        h6Armor.innerText = "Armadura: " + hero.armor
        
        let h6Strenght = document.createElement('h6')
        h6Strenght.innerText = "Força: " + hero.strenght
        
        let h6Agility = document.createElement('h6')
        h6Agility.innerText = "Agilidade: " + hero.agility
        
        let h6Inteligencia = document.createElement('h6')
        h6Inteligencia.innerText = "Inteligencia: " + hero.inteligencia
        
        let h6Speed = document.createElement('h6')
        h6Speed.innerText = "Velocidade de movimento: " + hero.speed
        
        elementCardBODY.appendChild(h6Life)
        elementCardBODY.appendChild(h6Damage)
        elementCardBODY.appendChild(h6Armor)
        elementCardBODY.appendChild(h6Strenght)
        elementCardBODY.appendChild(h6Agility)
        elementCardBODY.appendChild(h6Inteligencia)
        elementCardBODY.appendChild(h6Speed)
        elementCard.appendChild(elementCardBODY)
        
        
        
        let elementCardFOOTER = document.createElement('div')
        elementCardFOOTER.classList.add("card-footer","d-flex","justify-content-center","bg-dark")
        
        let selectionButton = document.createElement('button')
        selectionButton.innerText = "Selecionar"
        selectionButton.classList.add("btn","bg-primary")
        elementCardFOOTER.appendChild(selectionButton)
        elementCard.appendChild(elementCardFOOTER)
        
        
        
        gameBoard.appendChild(elementHEROI)
    })
}
