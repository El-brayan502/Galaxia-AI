import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'

let handler = m => m
handler.all = async function (m) {
    let name = await this.getName(m.sender)
    let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    try {
        pp = await this.profilePictureUrl(m.sender, 'image')
    } catch (e) { }

    global.emror = 'https://telegra.ph/file/a6294049a1863a69154cf.jpg'
    global.doc = pickRandom([
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/msword",
        "application/pdf"
    ])
    global.fsizedoc = pickRandom([2000, 3000, 2023000, 2024000])

    global.kontak2 = [
        ['573244278232@s.whatsapp.net', await this.getName('573244278232@s.whatsapp.net'), '𝖲𝗉𝖾𝗇𝗓𝗒𝖷𝖣 ❄', 'https://whatsapp.com', true]
    ]

    global.fkon = {
        key: {
            fromMe: false,
            participant: m.sender,
            ...(m.chat ? { remoteJid: 'status@broadcast' } : {})
        },
        message: {
            contactMessage: {
                displayName: name,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    }

    global.ephemeral = '86400'
    global.ucapan = ucapan()
    global.botdate = date()

    global.adReply = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363410793796223@newsletter",
                serverMessageId: 103,
                newsletterName: "⌜ GALAXI- MD ⌟ ©Brayan330"
            },
            externalAdReply: {
                showAdAttribution: true,
                title: global.namebot || 'GALAXI - MD',
                body: ucapan(),
                previewType: "VIDEO",
                thumbnailUrl: 'https://files.catbox.moe/h3njeb.jpg',
                sourceUrl: 'https://ZenzzXD.com'
            }
        }
    }

    global.fakeig = {
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: global.namebot || 'GALAXI - MD',
                body: ucapan(),
                thumbnailUrl: pp,
                sourceUrl: 'https://instagram.com'
            }
        }
    }
}

export default handler

function date() {
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return `${week}, ${date}`
}

function ucapan() {
    const time = moment.tz('es-ES').format('HH')
    if (time >= 18) return "🌃 Buenas noches"
    if (time >= 15) return "🌇 Buenas tardes"
    if (time > 10) return "🏙️ Buenas tardes"
    if (time >= 4) return "🌅 Buen día"
    return "🌃 Buenas noches"
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}