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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 902 533 0616";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_14_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo2MUd6a2gyeldnRDB6dzlCbzBrTUp1QjViSUtidmVYNUtNQjh5b0grUnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyNTMzMDYxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUNBNjAzNEM0NDdCNDZBMEUyRjgzMjhCRTgzMjFEN0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1ODA5MjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyNTMzMDYxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUUyOTJCNzExNDNGNERGNTkwRjI1OThEMDAwMjUyNzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1ODA5MjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyNTMzMDYxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEIxQzg0MzY5QjFFMEI2RTUwRDFERUFGMkFDMzU1QjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1ODA5Mjg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNnTmQzaExZU3AyeWt6WFJBRFBtUkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDY4YzYwMTItN2E2Mi00ZTdmLWE5MzItMTMyZWRjM2I4MDAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDMwLFxuICAgICAgMjU1LFxuICAgICAgNDIsXG4gICAgICAxNSxcbiAgICAgIDEwMCxcbiAgICAgIDEzNyxcbiAgICAgIDE3NyxcbiAgICAgIDEzOSxcbiAgICAgIDcyLFxuICAgICAgMjI0LFxuICAgICAgODksXG4gICAgICAyMjgsXG4gICAgICAxOTQsXG4gICAgICAxNDksXG4gICAgICAyMzUsXG4gICAgICAxOTQsXG4gICAgICAyMTQsXG4gICAgICA4NSxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgNjQsXG4gICAgICAxNTAsXG4gICAgICA3OSxcbiAgICAgIDI0NCxcbiAgICAgIDUxLFxuICAgICAgNDcsXG4gICAgICAxMjQsXG4gICAgICAxMTMsXG4gICAgICAxNDAsXG4gICAgICAyMzcsXG4gICAgICAyMzIsXG4gICAgICAyMzAsXG4gICAgICA3OCxcbiAgICAgIDIxNCxcbiAgICAgIDE3OSxcbiAgICAgIDE1NCxcbiAgICAgIDEwNCxcbiAgICAgIDE4MixcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNVFBXR1dGUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNTMzMDYxNjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzU0MTIyNjU3ODc0NDE6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYWRkbGVwcmltZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lTnFwMEJFUHF4MmJzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWcxYU0xU3BRS1oxaVRMd1ovRlFIUHp5THd4TXNFM3gxVUpoV1FpVUl5QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSZGtsK0NiM3RWbkNMU0I0V1ZXT0hITWxrNHdmbHRFZjI2cTc0M1RLbjdCOWt4cVArTTZQV3JYaUZSaWJrZEtXN1c1a2FtQzFpWVNqK1pXYXhvaGxCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaNDR3ZTZzeDRzZ0FxRUY2Wk4yWXhTUTVKQlpqNk11clFtTjZqMHZBUEh6Zmt2cW04YjBuMlczUTA4K2xiQXV4S0M1OC8reVc3SUNkOXNKUjR6RzNnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI1MzMwNjE2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODA5Mjc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkRlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKRGUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJWkRHbWlpNXFsbHQ0UVF0YjM1T3I4QkMyRThTTnMzMjVIcTE4Um82aWZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyOTk0Mjc1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTA1ODk3OTY4XCJ9Igp9"  // PUT your SESSION_ID 


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
