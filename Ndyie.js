/*Note Jika Copas Di Sc Lain mek Ganti Jadi rn*/

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')

//━━━━━━━━━━━━━━━[ POTO ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./Poto/gura1.png')
gambar = fs.readFileSync('./Poto/gura2.png')
gambar = fs.readFileSync('./Poto/gura3.png')

//━━━━━━━━━━━━━━━[ LIB ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')

//━━━━━━━━━━━━━━━[ Smz ]━━━━━━━━━━━━━━━\\
const pendaftar = JSON.parse(fs.readFileSync('./Smz/user.json'))


//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
const ownerNumber = ["6281229859085"]
const ownerName = ["ArulGanz"]
const botName = ["BotWhatsApp"]

//━━━━━━━━━━━━━━━[ DONASI ]━━━━━━━━━━━━━━━\\
const ovo = ["0858-6913-4434"]
const dana = ["0858-6913-4434"]
const gopay = ["0858-6913-4434"]
const pulsa =["0858-6913-4434"]


//━━━━━━━━━━━━━━━[ GRUP ]━━━━━━━━━━━━━━━\\
const linkGrup = ["https://chat.whatsapp.com/E9WGui8QiA67mVulUQISn7"]


//━━━━━━━━━━━━━━━[ SETTING PUBLIC ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
/*isSelf = true*/


//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Rendy = async (Rendy, rn) => {
	       try {
            if (!rn.hasNewMessage) return
            rn = rn.messages.all()[0]
			if (!rn.message) return
			if (rn.key && rn.key.remoteJid == 'status@broadcast') return
			if (rn.key.fromMe) return
			global.prefix
			global.blocked		
		    rn.message = (Object.keys(rn.message)[0] === 'ephemeralMessage') ? rn.message.ephemeralMessage.message : rn.message
			const content = JSON.stringify(rn.message)
			const from = rn.key.remoteJid
	        const type = Object.keys(rn.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const cmd = (type === 'conversation' && rn.message.conversation) ? rn.message.conversation : (type == 'imageMessage') && rn.message.imageMessage.caption ? rn.message.imageMessage.caption : (type == 'videoMessage') && rn.message.videoMessage.caption ? rn.message.videoMessage.caption : (type == 'extendedTextMessage') && rn.message.extendedTextMessage.text ? rn.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && rn.message.conversation.startsWith(prefix)) ? rn.message.conversation : (type == 'imageMessage') && rn.message[type].caption.startsWith(prefix) ? rn.message[type].caption : (type == 'videoMessage') && rn.message[type].caption.startsWith(prefix) ? rn.message[type].caption : (type == 'extendedTextMessage') && rn.message[type].text.startsWith(prefix) ? rn.message[type].text : (type == 'listResponseMessage') && rn.message[type].singleSelectReply.selectedRowId ? rn.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && rn.message[type].selectedButtonId ? rn.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? rn.message.conversation : (type === 'extendedTextMessage') ? rn.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Rendy.user.jid
		    const botNumberss = Rendy.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? rn.participant : rn.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Rendy.chats.all()
		    const groupMetadata = isGroup ? await Rendy.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
            const conts = rn.key.fromMe ? Rendy.user.jid : Rendy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = rn.key.fromMe ? Rendy.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const isUser = pendaftar.includes(sender)
            
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━\\
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            Rendy.sendMessage(from, teks, text, {quoted:rn})
        }

        const sendMess = (hehe, teks) => {
            Rendy.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Rendy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Rendy.sendMessage(from, teks.trim(), extendedText, { quoted: rn, contextInfo: { "mentionedJid": memberr } })
        }            
            
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
            }
        Rendy.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: fkontak
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        Rendy.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await Rendy.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        Rendy.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: fkontak,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
            
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Rendy.chatRead(from, "read")
        const fakegroup = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`media/gambar/biasa.png`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "ArulBotz", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp Bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Rendy.sendMessage(to, media, MessageType.sticker,{quoted:rn})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Rendy.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ Semz User ]━━━━━━━━━━━━━━━\\            
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./Smz/user.json', JSON.stringify(pendaftar, null, 2))
        }
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!rn.key.fromMe && isSelf === true) return


//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━\\
switch (command) {           
case 'help':        
case 'menu':
var p = '*'
teks = 
`┏━━━━━━━━━━━━━━━⬣ 
┃┃✯┏━━⬣ *ARUL BOTZ*
┃┃✯┃⬡ ${p}⚜️Hai kak ${pushname}${p}		
┃┃✯┃⬡ ${p}🔣Prefix : ${prefix}${p}
┃┃✯┃⬡ ${p}🌟Runtime : ${kyun(uptime)}${p}
┃┃✯┗━━⬣
┗━━━━━━━━━━━━━━━⬣
┏━━━━━━━➤「 𝐌𝐄𝐍𝐔 𝐍𝐘𝐀」
┃┃✯${p}1. ${prefix}sticker <reply img>${p}
┃┃✯${p}2. ${prefix}sticker2 <reply img>${p}
┃┃✯${p}3. ${prefix}toimg <reply sticker>${p}
┃┃✯${p}4. ${prefix}wiki <query>${p}
┃┃✯${p}5. ${prefix}pinterest <query>${p}
┃┃✯${p}6. ${prefix}tourl <reply media>${p}
┃┃✯${p}7. ${prefix}ssweb <Url>${p}
┃┃✯┏━━⬣ 𝖮𝖶𝖭𝖤𝖱 𝖬𝖤𝖭𝖴 
┃┃✯┃⬡ ${p}1. ${prefix}bc <query>${p}                   
┃┃✯┃⬡ ${p}2. ${prefix}bc2 <query>${p}                
┃┃✯┃⬡ ${p}3. ${prefix}bcs <reply sticker>${p}     
┃┃✯┃⬡ ${p}4. ${prefix}bca <reply audio>${p}
┃┃✯┃⬡ ${p}5. ${prefix}bcv <reply gif/video>${p}
┃┃✯┗━━━━━━━━━━⬣
┃┃✯┏━━⬣ 𝖦𝖱𝖴𝖯 𝖬𝖤𝖭𝖴
┃┃✯┃⬡ ${p}1. ${prefix}setgc ${p}
┃┃✯┃⬡ ${p}2. ${prefix}tagall <query>${p}
┃┃✯┃⬡ ${p}3. ${prefix}hidetag <teks>${p}
┃┃✯┗━━━━━━━━━━⬣
┃┃✯┏━━⬣ 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 𝖬𝖤𝖭𝖴 
┃┃✯┃⬡ ${p}1. ${prefix}play <query>${p}                   
┃┃✯┃⬡ ${p}2. ${prefix}ytdl <url>${p}                
┃┃✯┃⬡ ${p}3. ${prefix}ytmp3 <url>${p}     
┃┃✯┃⬡ ${p}4. ${prefix}ytmp4 <url>${p}
┃┃✯┃⬡ ${p}4. ${prefix}ttwm <url>${p}
┃┃✯┃⬡ ${p}5. ${prefix}ttnowm <url>${p}
┃┃✯┗━━━━━━━━━━⬣
┗━━━━━━━「 *Bot WhatsaApp by ArulGanz*」
`
           gam = fs.readFileSync('./Poto/gura3.png')
           but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '```OWNER```' }, type: 1 }, { buttonId: `${prefix}patnerbot`, buttonText: { displayText: '```PATNER BOT```' }, type: 1 }
                  ]
        sendButLocation(from, teks, gam, but)
           break









//━━━━━━━━━━━━━━━[ OWNER MENU ]━━━━━━━━━━━━━━━\\                                                
case 'test':
reply('Nyala Banh')
break
case 'self':
          	if (!rn.key.fromMe) return reply('Khusus Owner Ngab')
          	if (isOwner) return reply('Khusus Owner Ngab')
          	if (isSelf === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	isSelf = true
          	gam = fs.readFileSync('./Poto/gura3.png')
          but = [
          { buttonId: `${prefix}public`, buttonText: { displayText: '```Pindah Ke Public```' }, type: 1 }, 
                  ]
        sendButLocation(from, gam, but)
           break
          
          
//━━━━━━━━━━━━━━━[ ISI CASE LU NGAB ]━━━━━━━━━━━━━━━\\          
case 'rules':
teks =`Hai Kak ${pushname}

 # RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

OWNER  *Ndyie*
wa.me/6283818744065`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'Bck To Menu' }, type: 1 }
        ]
        sendButton(from, teks, 'Ndyie Botz', but, rn)
break

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:

			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(rn.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(rn.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Rendy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
