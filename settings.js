//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: @IRONWILL786" //ur yt chanel name
global.socialm = "GitHub: Sadistic_xc" //ur github or insta name
global.location = "Pakistan, Punjab, Islamabad" //ur location

//new
global.botname = 'REAPER' //ur bot name
global.ownernumber = 923140152133' //ur owner number
global.ownername = 'NOT ASIM MUNEER' //ur owner name
global.websitex = "https://www.instagram.com/sadistic_xc?igsh=M2xreHJlNzQyZGI1"
global.wagc = "https://chat.whatsapp.com/KCGNpk4Vs7EAO3F8NflXzF"
global.themeemoji = '🪀'
global.wm = "NOT ASIM MUNEER."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "PROPERTY OF"
global.author = "NOT ASIM MUNEER\n\n+923140152133"
global.creator = "923140152133@s.whatsapp.net"
global.xprefix = '/'
global.premium = ["923140152133"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
