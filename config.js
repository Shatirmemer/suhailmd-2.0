const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_27_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllwUHVnRVJhMEhCb1VEWnpxQ3R6MzRSaWZ4aTNYdDBzeWIvTEhyamROZFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA2ODM4MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxODdFMzU0RkJEQkUyQ0E1QUE0NzIxRjBCM0U3RDY2NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE4NjQ0MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGN5QlVvMG5UNDJ4Ti10M1JvQS1lQVwiLFxuICBcInBob25lSWRcIjogXCJlMWIyODRhYi03ZGViLTQ2MzAtOTVlYi01Njc5ZTJhOTViMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyMTIsXG4gICAgICAxMDEsXG4gICAgICAzOSxcbiAgICAgIDk0LFxuICAgICAgMixcbiAgICAgIDk4LFxuICAgICAgNjEsXG4gICAgICAxNzEsXG4gICAgICAyMjMsXG4gICAgICAyMzYsXG4gICAgICAxOTEsXG4gICAgICA4MyxcbiAgICAgIDIwMSxcbiAgICAgIDE0NyxcbiAgICAgIDY5LFxuICAgICAgMTg0LFxuICAgICAgNjgsXG4gICAgICAxNSxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDk0LFxuICAgICAgMTUyLFxuICAgICAgNixcbiAgICAgIDI0MyxcbiAgICAgIDM3LFxuICAgICAgMTM1LFxuICAgICAgNzUsXG4gICAgICA3NixcbiAgICAgIDE5NCxcbiAgICAgIDE4NixcbiAgICAgIDYyLFxuICAgICAgOTgsXG4gICAgICAxMDQsXG4gICAgICAxMzksXG4gICAgICA3MixcbiAgICAgIDUxLFxuICAgICAgMTc4LFxuICAgICAgMjE0LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNFUzdCVllIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMDY4MzgyMTA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGQUlTQUwgRFVSUkFOSVwiLFxuICAgIFwibGlkXCI6IFwiNTg0MzM1ODM3Njc2MDg6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdvMUs4RUVPZk82TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZR2E4L2VPWExIbmRnS2ZxTy9zY3BFUGRweUlhRlZsay9ablVNUTQrOXpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5EMmVJQ2ZhTHh5VzVqMjBJOFFZdC80THJ0blMvMUw0L3YzeHZ1RCtuR09MWHp2UXUvempad080V2F5YUVtTkpyeVV4c3VoQm9udW4zdWtjbnBXVUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJ3SWd2M1RwUU1jTXp0ekdHM1ZmbExCaTFuYVJTeXNFTzlZYVNjZlcrb2luQjlzRHpmNTlodzlRUTNRZlRKb0xJNHdkeXlVRWhNYytBTExyTEMzUGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAwNjgzODIxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODY0NDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVcVUzMHpjNWsyK1ZTanlWZlo2NmtrNmNQQ3llNzBsbGpwUmo1MU5iVUFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzM2OTc1OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE4NjQxNzg1ODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_de62f0fba589163cbb3b221d7d3dbeb7227f8d6a62f9822c";
global.aitts_Voice_Id = process.env.AITTS_ID|| "21";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
