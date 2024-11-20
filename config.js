const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111869679";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_58_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnTUo3bjR4a1B4dUhTTUpRTjRrVXdIQ3E5aTRxcFZIMlhwZ0JEdzN0L0YwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzakFaTWEza1J6U1pWU18yZXdGbFZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkZDc0ZjgyLWE4ZTgtNGM4MC1hMGY2LTM2MGQxNWU2NmE2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDI1LFxuICAgICAgMjMsXG4gICAgICAyMCxcbiAgICAgIDEsXG4gICAgICAxMTQsXG4gICAgICAxMjMsXG4gICAgICAxNTMsXG4gICAgICAxLFxuICAgICAgMTIxLFxuICAgICAgMyxcbiAgICAgIDkzLFxuICAgICAgMTA4LFxuICAgICAgMjEwLFxuICAgICAgMjQ1LFxuICAgICAgNDMsXG4gICAgICAyMDAsXG4gICAgICAzNSxcbiAgICAgIDk1LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDE3MSxcbiAgICAgIDE0MCxcbiAgICAgIDE3MCxcbiAgICAgIDE3LFxuICAgICAgMTE0LFxuICAgICAgMTUwLFxuICAgICAgMTA2LFxuICAgICAgMTM2LFxuICAgICAgMjAzLFxuICAgICAgMTQ4LFxuICAgICAgMjMzLFxuICAgICAgOTQsXG4gICAgICAxMzAsXG4gICAgICA5NixcbiAgICAgIDEwMixcbiAgICAgIDEyNSxcbiAgICAgIDkxLFxuICAgICAgMjMwLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFRSVDVBU0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMTg2OTY3OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTM5MDY2NTQ2ODMzMjQ6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJ5dnVRR0VOeUI5N2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiY01NOG9lbGEzZGdYMTd2T3g2SDN4eDUwMXpvdFAyMVBrRUR2WkZ1dWpjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVJT2I5VDZpK2JuRXo5MUx3MTliRmF6TlVMaDFpeTJ1a2NROUxuVU9WUlU4SVpyK2FTYnc2VzNWVTVKdWlVV1ZaMHVFS0pKdjl5bjBFSjdUdnp2QkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi84ZThUR3JFZHdGQ1FpQ0ZubUNOdENva25nK1JDd1FzbEI1Rzg5Q3hhV0l1YzNoanlaVHZUYjZ5L3lleG53MGdjaGtnSStqQnlvRG5xKzk3VFV0Q0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMTg2OTY3OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTAwMzIxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "shuceyb",


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
