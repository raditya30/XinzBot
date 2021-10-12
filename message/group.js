"use strict";
const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const fs = require("fs");

const { getBuffer, sleep } = require("../lib/myfunc");

let setting = JSON.parse(fs.readFileSync('./config.json'));
let { botName } = setting

module.exports = async(xinz, anj, welcome, left) => {
    const isWelcome = welcome.includes(anj.jid)
    const isLeft = left.includes(anj.jid)
    const mdata = await xinz.groupMetadata(anj.jid)
    const groupName = mdata.subject
    const pushname = xinz.user.name
    
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
  	var bruuh = [anj.participants[0]]
      var kma = gam1;
      var mhan = await xinz.prepareMessage(anj.jid, kma, MessageType.image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      xinz.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {contextInfo: {"mentionedJid": bruuh}}
      );
    };

    if (anj.action === 'add'){
        if (anj.participants[0] === xinz.user.jid){
            await sleep(5000)
            xinz.updatePresence(anj.jid, Presence.composing)
            xinz.sendMessage(anj.jid, `Hai aku ${botName}, silahkan kirim #menu`, MessageType.text)
        } else if (isWelcome){
            try {
                var pic = await xinz.getProfilePicture(anj.participants[0])
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
            const welteks = `Hai @${anj.participants[0].split("@")[0]} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Following Rules Group`
            sendButImage(anj.jid, welteks, `Selamat Datang Di Group ${groupName}\nSemoga Betah Ya🤗`, await getBuffer(pic), [
            {
              buttonId: `p`,
              buttonText: {
                displayText: `❁ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 ❁ `,
              },
              type: 1,
            },
            ]);
        }
    } else if (anj.action === 'remove' && isLeft){
        try {
            var pic = await xinz.getProfilePicture(anj.participants[0])
        } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
        const leftteks = `Kenapa tuh? kok bisa keluar? \nSayonara @${anj.participants[0].split("@")[0]} we will miss you`
        sendButImage(anj.jid, leftteks, `Nitip gorengan ya`, await getBuffer(pic), [
            {
              buttonId: `p`,
              buttonText: {
                displayText: `❁ 𝚂𝙰𝚈𝙾𝙽𝙰𝚁𝙰 ❁ `,
              },
              type: 1,
            },
            ]);
    }
}