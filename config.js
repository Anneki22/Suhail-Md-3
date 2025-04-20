const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348077825595";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_23_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0TzZ2ZG5TakdsTXB6eC9tV1lTWjlnbyt6SzhNbUFXaG5uWGcweUdSUEFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTjBINXJxR1F4U2ZVUlpPdWZRVzRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzYWYwZTA2LWRlOTMtNDI4ZS04MjgyLTA3OWY0NTMxNjE2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDEzNixcbiAgICAgIDMwLFxuICAgICAgNDUsXG4gICAgICA2NyxcbiAgICAgIDgsXG4gICAgICAxNDgsXG4gICAgICAxMjYsXG4gICAgICAyMTgsXG4gICAgICAxMzAsXG4gICAgICAxNzAsXG4gICAgICA5NixcbiAgICAgIDQ2LFxuICAgICAgMjAyLFxuICAgICAgMTExLFxuICAgICAgMjIyLFxuICAgICAgMTUyLFxuICAgICAgMTUsXG4gICAgICA2OSxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDI1MyxcbiAgICAgIDIwMCxcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDI0NixcbiAgICAgIDY0LFxuICAgICAgMTQsXG4gICAgICAxMDIsXG4gICAgICAxNTAsXG4gICAgICAxNDcsXG4gICAgICAxNTEsXG4gICAgICAxNjIsXG4gICAgICAxNixcbiAgICAgIDIxNSxcbiAgICAgIDE4LFxuICAgICAgMTkwLFxuICAgICAgMjEyLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkY3OUJFWVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yR77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODo0MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMmF6TE1IRUkrV2s4QUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNhRFFqRHhXcERhZWEzRm51K09FbWNzT1VQbmpKRWRxVExzT1hXK29LMm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY1EzMGNWdTdhNTdVQ0lFZUkzalg0dkVzSzFHOVJubnB5Sm5XVWtiUkRPWGl6UmEzOTQ1NVA3SFpTTVRETUs3TEUrbm1Hb0JyazB2bTYxWGpVNTYwQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0dkWHZob01INGZ0WG5CQ0IvMzRqRCtVV3grcmNDNndCM2JmRjd1S000aE1Tdjl2eE14b3Rpc1d4b1lEZ0pxbDNhL25qajBlVjQ5T1FKVGxDd0w0Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUxNDQ1OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxkdi5qc29uIjogIntcImtleURhdGFcIjpcInBsQ2Y5eG1NNjJzcmdqUUxEOWZjOEwrcC9sWVRVdVA2dklFaGgxOWJiZjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NzI1MTQ2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTQ0NDI4NTk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "X",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "死_ＮＥＭＥＳ１Ｘ",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "死_ＮＥＭＥＳ１Ｘ♠️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
