const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0o2MjlacHMzbDQ5eFJkWlZ5QnNqQzdsejMrN29ldWk3Q0xZckl6RXBIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjIzV091SE52a3huY2RxaklNbGJERnNCOFQ5WkZzcW4yZFR3N0hrZEkxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTmVTMkhESTlXSDZPcGtGZWpxWWFwK2lsNDRaT0dhcWVXbDFqeHNaWjBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWCt4WkhpUWpjSksyZVdyd0FhVW4ycGRjUmJkUW4yVi8yVFIzV0MvYTB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCaHVDaERkQ1U0U1F4QzhGc0RJbGZnU2lYTVF1MVhWUHdmWTBRcUhvMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5NTUM4aXVlWFJEV1NuQ2VEM0R6ZUZQT1MzMTlqRE1IZ2lEQjR2ZEdLWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1sdUNVZG1wb3BjdjBnNkVrTWxUTWZBK0Rzc1cwTllrZTVPV2NxUzNXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1FlYUlZcDB6VW1LSlV2clBuRjE3b1JaY0lxcHZJQU5SVHFOaWlDUU5FVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5vWE5USk94czQ2em9IeFVvUFErTHA0TGhqbTVlQ2NkUzM2ZThocHZUdEcwYmw5OXNndm52TXU2aDZFdHFtQ1BOVml4azc1bnlLWlY5Y2c1SnV4NWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiIxb3g0dFVTd3Zweis4ZjMxcCttTXdOVlRyRXdXcEZlTTR0SFNPS3NKaDVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODQ3ODk4MzY3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEOTBGOEQzMEU4M0NEMTY1OThFMTMzN0I4QjY4RTY1RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1OTA1NTY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg0Nzg5ODM2NzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDZEQ0YwN0VCNUNDRTZFOTc0QjYwM0U5QTQ4RDRBRTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTkwNTU2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOUw3SGJZTXNTT0cyTXFCX3FzbUNUUSIsInBob25lSWQiOiJhNDUyZTVhOS01ZjA0LTQyM2ItYjlkYi0wNGY0NjI5ODRkYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lnUng2UE44S1l5WjRlbnNnajNZRVBqczFZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5wT052MGE2NG5iL1RwZ2tkeVlISmRpR283ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTNVlFQ1FLNCIsIm1lIjp7ImlkIjoiOTE4NDc4OTgzNjcyOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmFqZXNoIOKdpO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkd5Z05nQkVKUFB3Y0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicWpaYW5xUGFUS3lmck5rMlQrS0NPU3pJMG8wVS9Hb004WGtreE5xcmxDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVWJOeEwrSElDTHlzZmVTNUNFT3JJaEQ2THlyQWZaelh6cTBxZU9yVGgzbHUyL3EvejF6Vk55NXdMK21WeWplNUJCQW5IVzQzQzYwUGw0N29HbGR3Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6InNCZGRoVHJNRmtBT2JmUFBSQitDTG1PREhUWmVHUnVRMnd6cHRubG9uZjJRdnI3UUtFMTBSNHkzRnMxWjlvZVF4NjVhQ3NTU3NCbXB3dE16RjU1WGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NDc4OTgzNjcyOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW8yV3A2ajJreXNuNnpaTmsvaWdqa3N5TktORlB4cURQRjVKTVRhcTVRdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTkwNTU2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOYTcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
MENU3_IMG: process.env.MENU_IMG || "https://files.catbox.moe/upmwpw.jpg",
// menu image 
RUNTIME_IMG: process.env.RUNTIME_IMG || "https://files.catbox.moe/ykdtkm.jpeg",
// runtime image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
