///////////////////////////////////

// Youtube:
//https://www.youtube.com/channel/UC4zkPH1ticImcO4-fjM2pZA

///////////////////////////////////

const rpc = require("discordrpcgenerator");




let NAME = "Github"
let DETAILS = "Details"
let STATE = "discord.js"
let URL = "https://github.com/Uunkn0wnN"
let APPID = "1014606828715380856"
let LARGEIMG = "Github"
let LARGETEXT = "Github"
let SMALLIMG = "Github"
let SMALLTEXT = "Github"



module.exports = async (client) => {
  const small = await rpc.getRpcImage
  (APPID, SMALLIMG);//1°setApplicationId, 2°Name(Key)smallimage
  
  
rpc.getRpcImage
(APPID, LARGEIMG)//1°setApplicationId, 2°Name(Key)largename
.then(large => {
  
  
     let presence = new rpc.Rpc()
               
         .setName(NAME)
         .setDetails(DETAILS)
         .setState(STATE)
        
        
         .setUrl(URL)
         .setType("STREAMING")
         .setApplicationId(APPID)
        
         .setAssetsLargeImage(large.id)
         .setAssetsLargeText(LARGETEXT)
        
         .setAssetsSmallImage(small.id)
         .setAssetsSmallText(SMALLTEXT)
        

          
           client.user.setStatus("dnd");
      
     console.log(presence.toDiscord())
        
      
      client.user.setPresence(presence.toDiscord()).catch(console.error);
      
    })
      
console.log("Rpc ready")

}
