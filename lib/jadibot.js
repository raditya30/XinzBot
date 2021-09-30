
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,xinz,id) => {
	asem = new WAConnection()
    asem.logger.level = 'warn'
    asem.version = [2, 2123, 8]
    asem.browserDescription = [ 'jadibot', '', '3.0' ]
    asem.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await xinz.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 40 detik'})
    	setTimeout(() => {
       	xinz.deleteMessage(id, bot.key)
       },40000)
    })
    asem.on('connecting', () => {
    })
    asem.on('open', () => {
    	reply(`Sukses Jadi Bot\n\n*Device*:\n\n ${JSON.stringify(xinz.user,null,2)}`)
    })
    await asem.connect({timeoutMs: 40 * 1000})
    listjadibot.push(asem.user)
    asem.on('chat-update', async (message) => {
        require('../message/xinz.js')(asem, message)
    })
}

const stopjadibot = (reply) => {
	asem = new WAConnection();
	asem.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}