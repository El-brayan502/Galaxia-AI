/**
 * Extiende la conexión con funciones personalizadas
 * Compatible con el cualquier baileys 
 * El bot detecta en grupos con @lid
 * CREATOR BRAYANX330 | ALIAS NAGATO
 */

import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
global.owner = [
  ['50231458537', '𝖧𝖺𝗌𝗁𝗂𝗋𝖺𝗆𝖺 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 👑', true],
  ['50492280729', '𝖹𝖾𝗎𝗌 👤', true],
  ['525576284484', '𝖤.𝖳👤', true],
];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['50231458537']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '© 2021–2025 Itachi Project'
global.botname = '🍃 𝐈 𝐓 𝐀 𝐂 𝐇 𝐈 - 𝐁 𝐎 𝐓 🍃'
global.author = 'ⓒ Created | BrayanX330'
global.dev = 'ⓒ Powered | BrayanX330'
global.textbot = 'і𝗍ᥲᥴһі ᑲᥡ һᥲsһіrᥲmᥲ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// === INPORTANTE ===
global.namew = '✦ 𝖨𝖳𝖠𝖢𝖧𝖨 𝖡𝖮𝖳 - 𝖬𝖣 ✦'
global.namev = '𝘐𝘛𝘈𝘊𝘏𝘐-𝘉𝘖𝘛 | 𝘉𝘙𝘈𝘠𝘈𝘕 𝘜𝘊𝘏𝘐𝘏𝘈'
global.erorr = 'ᴇʀʀᴏʀ ɴᴏ ᴘᴜᴇᴅᴇs ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ 🚫'
global.erorr1 = 'ᴅᴇɴᴇɢᴀᴅᴏ ɴᴏ ᴘᴜᴇᴅᴇs ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ 🚫'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.vsJB = '5.0'
global.nameqr = 'itachi bot md'
global.namebot = 'uchiha-itachi'
global.sessions = 'ItachiSessions'
global.jadi = 'jadibts' 
global.ItachiJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'Coins' // moneda principal 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./thumbnail.jpg');

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let catalogo2;
try {
  catalogo2 = fs.readFileSync('./src/catalogo.png');
} catch (error) {
  console.log('Warning: ./src/catalogo.png not found, using catalogo as fallback');
  catalogo2 = catalogo; // Using the existing 'catalogo' variable as fallback
}
global.photoSity = [catalogo2]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.ch = {
  ch1: '120363417186717632@newsletter',
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   


global.multiplier = 69
global.maxwarn = '3'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})