import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;

    if (m.mentionedJid.length > 0) {
        who = m.mentionedJid[0];
    } else if (m.quoted) {
        who = m.quoted.sender;
    } else {
        who = m.sender;
    }

    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('🔥'); // Amaterasu

    let str;
    if (m.mentionedJid.length > 0) {
        str = `🌑 \`${name2}\` ha invocado el *Amaterasu* contra \`${name || who}\`.\nLas llamas negras del destino arden eternamente...`;
    } else if (m.quoted) {
        str = `🌑 \`${name2}\` ha desatado el *Amaterasu* sobre \`${name || who}\`.\nEl fuego oscuro que nunca se extingue, consume todo a su paso.`;
    } else {
        str = `🌑 \`${name2}\` hace arder con el *Amaterasu* a todos los integrantes del grupo.\nLas llamas del Mangekyō iluminan la oscuridad de este lugar...`.trim();
    }
    
    if (m.isGroup) {
        let pp = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/a02786-1760919003084.mp4'; 
        let pp2 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/4956ae-1760920007592.mp4'; 
        let pp3 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/a02786-1760919003084.mp4';
        let pp4 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/4956ae-1760920007592.mp4';
        let pp5 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/a02786-1760919003084.mp4';
        let pp6 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/4956ae-1760920007592.mp4';
        let pp7 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/a02786-1760919003084.mp4';
        let pp8 = 'https://raw.githubusercontent.com/El-brayan502/dat3/main/uploads/4956ae-1760920007592.mp4';
        
        const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
        const video = videos[Math.floor(Math.random() * videos.length)];

        let mentions = [who];
        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
    }
}

handler.help = ['amaterasu @tag'];
handler.tags = ['jutsus'];
handler.command = ['amaterasu','amateratsu'];
handler.group = true;

export default handler;