/*
]---------------- INFO SCRIPT ---------------[ 
  
  > AUTHOR : XINZTEAM
  > RECODE : RADITYA
  > DON'T DELETE THE AUTHOR'S NAME AND MY NAME
  > LIST MESSAGE TIDAK SUPPORT DI WA BISNIS
  > MASIH BANYAK YANG LAGI DI FIX 
  > BELI APIKEY PREMIUM KLO MAU SEMUA FITUR WORK
  > KALO MAU NAMBAHIN CASE DI FILE (XINZ.JS)
  
  ]-----------------THANKS TO -----------------[
  
  > XinzTeam
  > Baileys
  > MhankBarBar
  > Nurutomo
  > REST API PROVIDER IN MY BOT  
   
  ]-------------- UPDATE RAYSHABOTZ --------------[

  NOTE :
  > Install Dulu Baru Recode
  > Sebagian fitur butuh apikey vvip atau prem, jadi masih ada fitur yg eror atau ada limit nya
  > Sebagian fitur gk work jika jaringan lemot                                                                    
*/

const a = ('```')
const b = ('*')
const bot1 = ('𝗘𝗮𝗴𝗹𝗲 𝗕𝗼𝘁𝘇')
const dev = ('𝙍𝙖𝙙𝙞𝙩𝙮𝙖')
const dev1 = ('Raditya')
const dev2 = ('Dedetriyanto')
const nomor = ('wa.me/6281361411375')

//ALLMANEU
exports.helpmenu = (pushname, groupAdmins, calender, isBadword, isAntiLink, isLeft, isWelcome, groupMetadata, isGroupAdmins, groupMembers, groupName, ucapanWaktu, week, weton, jam3, jam2, jam, isGroup, isOwner, premium, _prem, moment, runtime, isPremium, pendaftar, balance, getBalance, getLimit, limitCount, limit, sender, prefix, i) => {
    return `
┏━━━━━━━━━━━━━⊱
┃     ❬ *𝐀𝐛𝐨𝐮𝐭 𝐔𝐬𝐞𝐫* ❭
┣━━━━━━━━━━━━━⊱
┃❒ *Name : ${pushname}* 
┃┝ *Nomer : wa.me/${sender.split("@")[0]}*
┃┝ *User : ${isOwner ? 'Owner ×፝֟͜×' : `${isPremium ? 'Premium ♕' : 'Free ✓'}`}*
┃┝ *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
┃┝ *Balance : ${getBalance(sender, balance)}*
┃┕ *Pendaftar : ${pendaftar.length} User*
┗━━━━━━━━━━━━━⊱${isGroup ? `

┏━━━━━━━━━━━━━⊱
┃    ❬ *𝐀𝐛𝐨𝐮𝐭 𝐆𝐫𝐨𝐮𝐩* ❭
┣━━━━━━━━━━━━━⊱
┃❒ *Name Grup : ${groupName}*
┃┝ *Total Admin : ${groupAdmins.length}*
┃┝ *Total Member : ${groupMetadata.participants.length}*
┃┝ *Welcome : ${isWelcome ? 'Aktif' : 'Mati'}*
┃┝ *Left : ${isLeft ? 'Aktif' : 'Mati'}*
┃┝ *Antilink : ${isAntiLink ? 'Aktif' : 'Mati'}*
┃┕ *Badword : ${isBadword ? 'Aktif' : 'Mati'}*
┗━━━━━━━━━━━━━━⊱` : ''}

┏━━━━━━━━━━━━━━━⊱
┃    ❬ *𝐈𝐧𝐝𝐨𝐧𝐞𝐬𝐢𝐚𝐧 𝐓𝐢𝐦𝐞* ❭
┣━━━━━━━━━━━━━━━⊱
┃❒ 𝗝𝗮𝗺 : *${jam} WIB* 
┃┝ 𝗝𝗮𝗺 : *${jam2} WITA*
┃┝ 𝗝𝗮𝗺 : *${jam3} WIT*
┃┝ 𝗛𝗮𝗿𝗶 : *${week} ${weton}*
┃┕ 𝗧𝗮𝗻𝗴𝗴𝗮𝗹 : *${calender}*
┗━━━━━━━━━━━━━━━⊱

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┏┳━━「 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐁𝐨𝐭 」━━━⊱
║┃
║┃◦➛ cekprefix
║┃◦➛ ${prefix}menu
║┃◦➛ ${prefix}stats
║┃◦➛ ${prefix}runtime
║┃◦➛ ${prefix}speed
║┃◦➛ ${prefix}creator
║┃◦➛ ${prefix}credits
║┃◦➛ ${prefix}donasi
║┃◦➛ ${prefix}listban
║┃◦➛ ${prefix}beliprem
║┃
┣╋━━「 𝐋𝐢𝐦𝐢𝐭 & 𝐁𝐚𝐥𝐚𝐧𝐜𝐞 」━━⊱
║┃
║┃◦➛ ${prefix}balance
║┃◦➛ ${prefix}limit
║┃◦➛ ${prefix}glimit
║┃◦➛ ${prefix}buylimit
║┃◦➛ ${prefix}buyglimit
║┃◦➛ ${prefix}taruhan
║┃
┣╋━━━「 𝐈𝐬𝐥𝐚𝐦 𝐌𝐞𝐧𝐮 」━━━━⊱
║┃
║┃◦➛ ${prefix}jadwalsholat [daerah]
║┃◦➛ ${prefix}kisahnabi [nabi]
║┃◦➛ ${prefix}asmahusna
║┃
┣╋━━━「 𝐍𝐞𝐰𝐬 𝐈𝐧𝐟𝐨 」━━━━━⊱
║┃
║┃◦➛ ${prefix}covidindo
║┃◦➛ ${prefix}covidglobal
║┃
┣╋━━━━「 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 」━━━━━⊱
║┃
║┃◦➛ ${prefix}sticker
║┃◦➛ ${prefix}toimg
║┃◦➛ ${prefix}patrick
║┃◦➛ ${prefix}anjing
║┃◦➛ ${prefix}amongus
║┃◦➛ ${prefix}swm [text|text]
║┃◦➛ ${prefix}take [text|text]
║┃◦➛ ${prefix}ttp [text]
║┃◦➛ ${prefix}ttp2 [text]
║┃◦➛ ${prefix}ttp3 [text]
║┃◦➛ ${prefix}attp [text]
║┃
┣╋━━━━「 𝐓𝐨𝐨𝐥𝐬 」━━━━━━⊱
║┃
║┃◦➛ ${prefix}fast [video]
║┃◦➛ ${prefix}tourl [image]
║┃◦➛ ${prefix}tinyurl [url]
║┃◦➛ ${prefix}nulis [text]
║┃◦➛ ${prefix}nuliskiri [text]
║┃◦➛ ${prefix}nuliskanan [text]
║┃◦➛ ${prefix}foliokiri [text]
║┃◦➛ ${prefix}foliokanan [text]
║┃◦➛ ${prefix}getpict [@tag]
║┃◦➛ ${prefix}kontak [nomor|nama]
║┃◦➛ ${prefix}fakeloc [text|text]
║┃
┣╋━━「 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 」━━━━⊱
║┃
║┃◦➛ ${prefix}ytmp4 [url]
║┃◦➛ ${prefix}ytmp3 [url]
║┃◦➛ ${prefix}igdl [url]
║┃◦➛ ${prefix}fbdl [url]
║┃◦➛ ${prefix}tiktok [url]
║┃◦➛ ${prefix}play [query]
║┃◦➛ ${prefix}playmp4 [query]
║┃
┣╋━━「 𝐉𝐚𝐝𝐢 𝐁𝐨𝐭 」━━━━⊱
║┃
║┃◦➛ ${prefix}jadibot
║┃◦➛ ${prefix}stopjadibot
║┃◦➛ ${prefix}listbot
║┃
┣╋━━━「 𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 」━━━━━⊱
║┃
║┃◦➛ ${prefix}happymod [name apk]
║┃◦➛ ${prefix}igstalk [username]
║┃◦➛ ${prefix}ghstalk [username]
║┃◦➛ ${prefix}ytsearch [query]
║┃
┣╋━━「 𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 」━━━⊱
║┃
║┃◦➛ ${prefix}tahta [text]
║┃◦➛ ${prefix}light [text]
║┃◦➛ ${prefix}glitch [text1|text2]
║┃◦➛ ${prefix}thundername [text]
║┃◦➛ ${prefix}pornhub [text1|text2]
║┃
┣╋━━「 𝐑𝐚𝐧𝐝𝐨𝐦 𝐈𝐦𝐚𝐠𝐞」━━━⊱
║┃
║┃◦➛ ${prefix}cogan
║┃◦➛ ${prefix}cecan
║┃◦➛ ${prefix}meme
║┃◦➛ ${prefix}darkjoke
║┃◦➛ ${prefix}blackpink
║┃
┣╋━━━「 𝐑𝐚𝐧𝐝𝐨𝐦 」━━━━⊱
║┃
║┃◦➛ ${prefix}dare
║┃◦➛ ${prefix}truth
║┃◦➛ ${prefix}apakah
║┃◦➛ ${prefix}bisakah
║┃◦➛ ${prefix}kapankah
║┃◦➛ ${prefix}hobby
║┃◦➛ ${prefix}rate
║┃◦➛ ${prefix}cekbapak
║┃◦➛ ${prefix}seberapagay
║┃◦➛ ${prefix}randomquotes
║┃
┣╋━━━「 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 」━━━⊱
║┃
║┃◦➛ ${prefix}tagme
║┃◦➛ ${prefix}jadian
║┃◦➛ ${prefix}ganteng
║┃◦➛ ${prefix}cantik
║┃
┣╋━━━「 𝐆𝐚𝐦𝐞 」━━━━⊱
║┃
║┃◦➛ ${prefix}topbalance
║┃◦➛ ${prefix}buylimit
║┃◦➛ ${prefix}buyglimit
║┃◦➛ ${prefix}tictactoe @tag
║┃◦➛ ${prefix}tebakgambar
║┃◦➛ ${prefix}family100
║┃
┣╋━━「 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 」━━━━⊱
║┃
║┃◦➛ ${prefix}cekprem
║┃◦➛ ${prefix}listprem
║┃◦➛ ${prefix}hidetag *<𝙋𝙍𝙀𝙈>*
║┃
┣╋━━━━「 𝐖𝐢𝐛𝐮 」━━━━━⊱
║┃
║┃◦➛ ${prefix}waifu 
║┃◦➛ ${prefix}loli 
║┃◦➛ ${prefix}nekonime 
║┃◦➛ ${prefix}megumin 
║┃◦➛ ${prefix}sagiri 
║┃◦➛ ${prefix}shinobu 
║┃◦➛ ${prefix}hentai *<𝙋𝙍𝙀𝙈>*
║┃
┣╋━━━━「 𝐆𝐫𝐨𝐮𝐩 」━━━━━⊱
║┃
║┃◦➛ ${prefix}afk
║┃◦➛ ${prefix}infogrup
║┃◦➛ ${prefix}chatinfo
║┃◦➛ ${prefix}add 628xx
║┃◦➛ ${prefix}kick [@tag]
║┃◦➛ ${prefix}promote [@tag]
║┃◦➛ ${prefix}demote [@tag]
║┃◦➛ ${prefix}setgrup [3 Button]
║┃◦➛ ${prefix}linkgc
║┃◦➛ ${prefix}setdesc
║┃◦➛ ${prefix}setppgrup
║┃◦➛ ${prefix}setgrupname
║┃◦➛ ${prefix}opengrup
║┃◦➛ ${prefix}closegrup
║┃◦➛ ${prefix}join
║┃◦➛ ${prefix}tagall
║┃◦➛ ${prefix}mute
║┃◦➛ ${prefix}unmute
║┃
┣╋━━「 𝐄𝐧𝐚𝐛𝐥𝐞 & 𝐃𝐢𝐬𝐚𝐛𝐥𝐞 」━━⊱
║┃
║┃◦➛ ${prefix}antilink
║┃◦➛ ${prefix}welcome
║┃◦➛ ${prefix}left
║┃◦➛ ${prefix}antibadword
║┃◦➛ ${prefix}listbadword
║┃◦➛ ${prefix}addbadword
║┃◦➛ ${prefix}delbadword
║┃
┣╋━━「 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮 」━━━━⊱
║┃
║┃◦➛ >
║┃◦➛ $
║┃◦➛ >hash 
║┃◦➛ ${prefix}bc
║┃◦➛ ${prefix}self
║┃◦➛ ${prefix}public
║┃◦➛ ${prefix}leavegc
║┃◦➛ ${prefix}setpp
║┃◦➛ ${prefix}setname
║┃◦➛ ${prefix}setbio
║┃◦➛ ${prefix}setprefix
║┃◦➛ ${prefix}clearall
║┃◦➛ ${prefix}ban @tag
║┃◦➛ ${prefix}unban @tag
║┃◦➛ ${prefix}addprem [@tag]
║┃◦➛ ${prefix}delprem [@tag]
║┃◦➛ ${prefix}exif nama|author
║┃◦➛ ${prefix}addbalance [nomor]|999
║┃◦➛ ${prefix}delbalance [nomor]|999
║┃◦➛ ${prefix}addownerbalance 999
║┃
┗┻━━━━━━━━━━━━━━━━━━⊱


      ║▌│█║▌│ █║▌│█│║▌║
      ║▌│█║▌│ █║▌│█│║▌║
           ©𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 ${dev}

`
}

//RANDOM IMAGE
exports.imagerandom = (pushname, prefix) => {
    return `
┏━━━━━━━━━━━━━⊱
┃  ❬ *𝐑𝐚𝐧𝐝𝐨𝐧 𝐈𝐦𝐚𝐠𝐞* ❭
┣━━━━━━━━━━━━━⊱
┃◦➛ ${prefix}cogan
┃◦➛ ${prefix}cecan
┃◦➛ ${prefix}meme
┃◦➛ ${prefix}darkjoke
┃◦➛ ${prefix}blackpink
┗━━━━━━━━━━━━━⊱
`
}

//LVL NULL
exports.lvlnul = () => {
	return`*MAAF LEVELMU MASIH KOSONG?*`
}

//LEVEL UP
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`╭──❲ 𝗟𝗲𝘃𝗲𝗹 𝗨𝗽 ❳
│❒ ${a}𝐍𝐚𝐦𝐞 : ${pushname}${a}  
│❒ ${a}𝐍𝐮𝐦𝐛𝐞𝐫 : wa.me/${sender.split("@")[0]}${a}
│❒ ${a}𝐗𝐩 : ${getLevelingXp(sender)}${a}  
│❒ ${a}𝐋𝐢𝐦𝐢𝐭 : +3${a}   
│❒ ${a}𝐋𝐞𝐯𝐞𝐥 : ${getLevel} ⊱ ${getLevelingLevel(sender)}${a}  
╰──❲ ${bot1} ❳`	
}

//RULES
exports.rules = (pushname, prefix) => {
  return `━━━━━━「 *𝗥𝘂𝗹𝗲𝘀 𝗕𝗼𝘁* 」━━━━━━

1. Jangan spam bot. 
Sanksi: *𝙒𝙖𝙧𝙣/𝙎𝙤𝙛𝙩 𝘽𝙡𝙤𝙘𝙠*

2. Jangan telepon bot.
Sanksi: *𝙎𝙤𝙛𝙩 𝘽𝙡𝙤𝙘𝙠*

3. Jangan mengeksploitasi bot.
Sanksi: *𝘽𝙡𝙤𝙘𝙠 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩*

4. Jika Terjadi Bug Atau Semacam Nya
Hubung Pengembang Bot :
( ${a}${nomor}${a} )

Jika sudah dipahami rules-nya, silahkan ketik *${prefix}Menu* untuk Melihat menu Bot!


   ║▌│█║▌│ █║▌│█│║▌║
   ║▌│█║▌│ █║▌│█│║▌║
      ©𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 ${dev}
      
`
}

//CREDITZ
exports.credits = (pushname, prefix) => {
  return `【𝐃𝐚𝐟𝐭𝐚𝐫 𝐏𝐞𝐧𝐠𝐚𝐧𝐭𝐚𝐫】

「 *𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮* 」
➻ ${dev1} ( *Kang Mastah* )
➻ ${dev2} ( *Best Partner* )

「 *𝘾𝙤𝙢𝙗𝙞𝙣𝙖𝙩𝙞𝙤𝙣 𝙊𝙛 𝘿𝙖𝙩𝙖 𝘽𝙤𝙩* 」
⦿ *Raditya* 
(https://github.com/raditya30)
⦿ *Xinz-Team* 
(https://github.com/Xinz-Team)
⦿ *Nurutomo* 
(https://github.com/Nurutomo)
⦿ *MRHRTZ* 
(https://github.com/MRHRTZ)
⦿ *Mamet* 
(https://github.com/mamet8/)
⦿ *VideFrelan* 
(https://github.com/VideFrelan)
⦿ *TobyG74* 
(https://github.com/TobyG74)
⦿ *MhankBarBar* 
(https://github.com/MhankBarBar)
⦿ *SlavyanDesu* 
(https://github.com/SlavyanDesu)
⦿ *Baileys* 
(https://github.com/adiwajshing/Baileys)

`
}
