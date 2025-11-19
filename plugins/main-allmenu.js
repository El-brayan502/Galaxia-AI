import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
  const delay = ms => new Promise(res => setTimeout(res, ms))
  let taguser = '@' + m.sender.split('@')[0]

  let tags = {
    'info': '✎ɪɴғᴏ🌐',
    'anime': '✧ғᴜɴᴄᴛɪᴏɴ-ᴀɴɪᴍᴇ🎎',
    'buscador': '☆ғᴜɴᴄɪᴏɴ-sᴇᴀʀᴄʜ🔎',
    'downloader': '✜ᴅᴇsᴄᴀʀɢᴀs ᴍᴜʟᴛɪᴍᴇᴅɪᴀ📂',
    'jutsus': '𖣘ɴᴀʀᴜᴛᴏ-sʜɪᴘᴜᴅᴇɴ🎯',
    'economy': 'ꔛᴊᴜᴇɢᴏs - ᴇᴄᴏɴᴏᴍɪ́ᴀ🫧',
    'fun': '⭓ғɪʀᴇ ғᴜɴᴄᴛɪᴏɴ - ᴊᴜᴇɢᴏs🎮',
    'group': '✡ғᴜɴᴄɪóɴ ɢʀᴜᴘᴏ⚙️',
    'ai': '☘︎ғᴜɴᴄɪᴏ́ɴ-ᴀɪ🤖',
    'game': '𐂂ᴊᴜᴇɢᴏs-ɢᴀᴍᴇ🎲',
    'serbot': '✪ᴊᴀᴅɪʙᴛs-ʙᴏᴛs🤖',
    'main': '✄ᴍᴀɪɴ-ɪɴғᴏ🥊',
    'nable': '➠ᴄᴏɴғɪɢ - ᴏɴ/ᴏғғ🔹',
    'nsfw': '⬗ɴsғᴡ-ғᴜɴᴄᴛɪᴏɴ🥵',
    'owner': '✑ᴏᴘᴄɪᴏɴᴇs/ᴏᴡɴᴇʀ🔥',
    'sticker': '✔sᴛɪᴄᴋᴇʀ - ᴍᴀʀᴋᴇʀ/ʟᴏɢᴏ🧩',
    'herramientas': '✘ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs🧮',
  }

  let header = '\`%category\`\n┌────────────'
  let body = '│ 🪴➺%cmd'
  let footer = '└────────────'
  let after = `> 𝗂𝗍𝖺𝖼𝗁𝗂-𝖻𝗈𝗍-𝖬𝖣 | 𝖻𝗋𝖺𝗒𝖺𝗇 𝗎𝖼𝗁𝗂𝗁𝖺`

  let user = global.db.data.users[m.sender]
  let nombre = await conn.getName(m.sender)
  let premium = user.premium ? 'ɴᴏ ❌' : 'sɪ ✅'
  let limite = user.limit || 0
  let totalreg = Object.keys(global.db.data.users).length
  let groupsCount = Object.values(conn.chats).filter(v => v.id.endsWith('@g.us')).length
  let muptime = clockString(process.uptime())

  function clockString(seconds) {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor(seconds % 3600 / 60)
    let s = Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
  }

  let infoUser = `
🍁 _¡Hola!_ *🥀¡Muy buenos días🌅, tardes🌇 o noches🌆!*

> 🎳 \`itachi:\` es un sistema automatizado diseñado para interactuar mediante comandos. Permite realizar acciones como descargar videos de distintas plataformas, hacer búsquedas en la \`web\`, y disfrutar de una variedad de juegos dentro del \`chat\`.

━━━━━━━━━━━━━
\`❒ᴄᴏɴᴛᴇxᴛ-ɪɴғᴏ☔\`
┌────────────
│ 🚩 *user: ${nombre}*
│ 📜 *premium: ${premium}*
│ 🌟 *limite ${limite}*
│ 🏓 *activo: ${muptime}*
│ 👤 *usuarios: ${totalreg}*
└────────────
`.trim()

  let commands = Object.values(global.plugins).filter(v => v.help && v.tags).map(v => {
    return {
      help: Array.isArray(v.help) ? v.help : [v.help],
      tags: Array.isArray(v.tags) ? v.tags : [v.tags]
    }
  })

  let menu = []
  for (let tag in tags) {
    let comandos = commands
      .filter(command => command.tags.includes(tag))
      .map(command => command.help.map(cmd => body.replace(/%cmd/g, usedPrefix + cmd)).join('\n'))
      .join('\n')
    if (comandos) {
      menu.push(header.replace(/%category/g, tags[tag]) + '\n' + comandos + '\n' + footer)
    }
  }

  let finalMenu = infoUser + '\n\n' + menu.join('\n\n') + '\n' + after

  await conn.sendMessage(m.chat, {
    video: { url: 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/899fc7-1762129754657.mp4' },
    gifPlayback: true,
    caption: finalMenu,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363417186717632@newsletter',
        newsletterName: 'Itachi-Bot-MD | Channel',
        serverMessageId: -1
      },
      externalAdReply: {
        title: '🌴 𝖨𝗍𝖺𝖼𝗁𝗂-𝖻𝗈𝗍-𝖬𝖣 🌴',
        body: '𝘐𝘛𝘈𝘊𝘏𝘐-𝘉𝘖𝘛 | 𝘉𝘙𝘈𝘠𝘈𝘕 𝘜𝘊𝘏𝘐𝘏𝘈',
        thumbnailUrl: 'https://chat.whatsapp.com/E6bm08DbKnB84LhBFQGUUr',
        thumbnail: await (await fetch(icono)).buffer(),
        sourceUrl: 'https://chat.whatsapp.com/E6bm08DbKnB84LhBFQGUUr',
        mediaType: 1,
        showAdAttribution: false
      }
    }
  }, { quoted: m })

  await delay(100)
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu2', 'menú', 'allmenu', 'menucompleto']
handler.register = true

export default handler
