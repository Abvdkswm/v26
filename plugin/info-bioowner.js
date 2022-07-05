let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Rel Botz
*✉️ Nama RL* : Farel
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 26 April 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, nonton bokep, ngocoq, coli
*💬 Sifat* : Rajin, sopan, baik, tukang kocok
*🗺️ Tinggal* : Indo, sulteng, kabupaten buol, desa pejako
*❤️ Suka* : suka sama yang baca>\\\<
*💔 Benci* : anak ep²

*───────[ SOSIAL MEDIA ]───────*
*🇫  Facebook* : Farel Rel
Atau bisa langsung klik: https://www.facebook.com/frel.frel.908132

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
