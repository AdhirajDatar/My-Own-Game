class Player{
    constructor(){
        this.score = 0 
        this.name = null
        this.index = null
        this.distance = 0
    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
   }

   updateCount(data){
       database.ref('/').update({
           playerCount: data
       })
   }


   static getPlayerInfo(){
       database.ref('players').on("value", function(data){
        allPlayers = data.val();
       })
   }

   update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).update({
        name:this.name,
        score:this.score,
        distance:this.distance
    })
   }


}
