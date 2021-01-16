function greaterDamage (player1, player2){
    let namePalyer1 = player1.name
    let namePlayer2 = player2.name
        
    if(player1.damage > player2.damage){
            
        player2.life = player2.life - player1.damage
        missedTheAttack(player2,player1)
        return console.log("O " +namePalyer1+ " acertou um hit no " +namePlayer2+ " e o deixou com " + player2.life + " de vida")
    }
    if(player2.damage > player1.damage){
            
        player1.life = player1.life - player2.damage
        missedTheAttack(player1,player2)
        return console.log("O " +namePlayer2+ " acertou um hit no " +namePalyer1+ " e o deixou com " + player1.life + " de vida")
    }
}
    
function missedTheAttack(player1,player2){
        
    if(player1.type == "Agility"){
            
        let randomNumber = Math.ceil(Math.random()*100)
            
        if(randomNumber <= player1.agility){
                
            player1.life = player1.life + player2.damage
            return console.log("O Heroi " + player1.name + " esquivou do hit do heroi " + player2.name)
        }
    }
}


    
