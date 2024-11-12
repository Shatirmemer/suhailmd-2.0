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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_14_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEQ2pQY0hYS3E0b3Y0TTZ4b2RrSTYzajZzQ2VTckUvcklSVHFUb0owTkhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3OTE4ODkxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTgzQjFEOTEyOUQ1NDFBNDRFOTYxOEM1MzU2RDg2RDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDM4ODg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDc5MTg4OTEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQkFFRjUwQzc0NDVFRjAwRkM0MDA1RTA1NUUxNUI5NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE0Mzg4OTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUll3Z3huVFVURG1nNHNWb0VBVXVIUVwiLFxuICBcInBob25lSWRcIjogXCI3NDc5OGE0My03YjAxLTRkOTEtYmM4MS04ODc2NmQ5ZmMyZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxNSxcbiAgICAgIDIwLFxuICAgICAgMjM4LFxuICAgICAgMTEzLFxuICAgICAgMTM3LFxuICAgICAgMjExLFxuICAgICAgMTI0LFxuICAgICAgOCxcbiAgICAgIDQ5LFxuICAgICAgNTUsXG4gICAgICA0OSxcbiAgICAgIDEzNyxcbiAgICAgIDIyOCxcbiAgICAgIDEwOSxcbiAgICAgIDYxLFxuICAgICAgNjIsXG4gICAgICAxNjUsXG4gICAgICA1MyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA2NixcbiAgICAgIDk1LFxuICAgICAgMTgxLFxuICAgICAgMjE2LFxuICAgICAgNTQsXG4gICAgICA3OCxcbiAgICAgIDEwNSxcbiAgICAgIDE0OSxcbiAgICAgIDExOCxcbiAgICAgIDIxLFxuICAgICAgNzEsXG4gICAgICAxNTIsXG4gICAgICAxNTIsXG4gICAgICAxODEsXG4gICAgICAyNTIsXG4gICAgICAxMTEsXG4gICAgICA2MCxcbiAgICAgIDE1MSxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2S1dQTThLSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc5MTg4OTEyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNzY2NzQwMDExMDE1ODoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJV3R2cUFCRUtMU3pya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm83ekdQWHBDSzdIYkc1dTVDQ2pxSis3TC8xNHc4dG9HRXV1VHk5Q3hQMDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVlJlbWRyVHlBay81bnNub09tU1MwZkdpR2xrMm5DSnR3dXJMd0tPVkhwU2ZIYkRsaC9jemhZaGlCM28vRmFHeEM4UkY4VGRVc3AxNi9oQW0zWVoxQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY1JKeE9LbFFPalBkbytMQldQTFMzU24zQzg4dlRCMFcyUml4YWpmRWZiOW5Ib3lFbnlQemJIYTZCNURzb2JWT2pRc1RDYkpzVWlBTncwYld6Qkh0akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDc5MTg4OTEyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDM4ODg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0FsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJabzdkMHB1eXZuWmxEbGd0SUEyVE9WdHczb1V6VERCZm1uTEJOckVxSEpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNjU2NTg5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNDM4ODkyMTk0XCJ9Igp9"  // PUT your SESSION_ID 


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
global.aitts_Voice_Id = process.env.AITTS_ID|| "4";





















global.rank = "updated"
global.isMoodb = false; 
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
