const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://ponnapkaya1:CUfG1C4P0RUfFsSk@cluster0.7qsf0.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://ponnapkaya1:CUfG1C4P0RUfFsSk@cluster0.7qsf0.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923006838210";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUThxcDJHcDl5WDByWC9Nb24zRkZwNVNGRFBSRmRzcEd4MFpORC9JcUR3OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjY1NjY1OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyOTc3NjA4RjczQjg1RUEyRDlGREIzMkY3QjY5MDhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY3NzQzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NjU2NjU5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjUwNTg4QkI0QTQ4RjgyNjIxNThENTVCMTY1ODkwNzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjc3NDM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY2NTY2NTk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MkExRUQzQzk0OEQzMjNCQ0I1RkE1MDczNDUxODlENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2Nzc0NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjY1NjY1OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwMDY5MUYwRUUyM0UxMUJFRTg1QTY4MzdCMEExRDhCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY3NzQ0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpdlJPMG01bFNnLXBxSF9iZzZ0WUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0MGYyMGJhLTQwZTEtNDhiMi1iZDE3LTBjZmYwMWRjYzQxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMDMsXG4gICAgICAxNzksXG4gICAgICAyNDksXG4gICAgICA0OSxcbiAgICAgIDc5LFxuICAgICAgNDEsXG4gICAgICAyMjksXG4gICAgICAxMjIsXG4gICAgICAxMzgsXG4gICAgICAyMzcsXG4gICAgICAxNTMsXG4gICAgICAxMDUsXG4gICAgICAxMTYsXG4gICAgICAyNTEsXG4gICAgICAxOTIsXG4gICAgICAyMDEsXG4gICAgICAxNixcbiAgICAgIDIsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTU5LFxuICAgICAgNzIsXG4gICAgICAyLFxuICAgICAgMTU3LFxuICAgICAgMTc1LFxuICAgICAgMjIxLFxuICAgICAgMTgzLFxuICAgICAgMTc1LFxuICAgICAgNDUsXG4gICAgICA2NCxcbiAgICAgIDc4LFxuICAgICAgMTYsXG4gICAgICAxODksXG4gICAgICAxMzIsXG4gICAgICAxMTMsXG4gICAgICAxMjYsXG4gICAgICAxNTUsXG4gICAgICAyMSxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllRNVZQVzc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjY1NjY1OTk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNzU2MjE4MDQwNzM3MToyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLIUxMIEJhTmRhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9pd3A0Q0VQYVozYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdmw5aUhYYlB6R2svUDRIZDRBZ1RSaHh0NkpqcGlNR01FZXRoZFM3TW1ZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN4Tk4ySVZaeFBmZnFJdFlBWGhnaGl3Mk1kUWFWY1FLeUFuTUQvOGZSdEJHQVhmRlBZTW83Nm5hYURMUnh2VzJ6OXprQ1VJS1BtMTMwZm5TRXBFREFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBXdXFwWlR2bDhSbHhQbU1ob05YeVVSNFA0dEh6cURwZ3RrUUYzOVU0UHpxT0NkZE9vRXpPVDRxdlVETnhUc0E0M0tpd1ROWDlQa1U5djVpMjdWRkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NjU2NjU5OToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY3NzQzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpGVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkZULmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2gvclg2Y2ozbGFLK012NnliLzJKU3BQWEFXT0lhSFNEK3pQMWc2THFjaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDA4NzkzNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTY3NzQzOTY2MFwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_de62f0fba589163cbb3b221d7d3dbeb7227f8d6a62f9822c";
global.aitts_Voice_Id = process.env.AITTS_ID|| "14";





















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
