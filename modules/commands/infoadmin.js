const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "infoadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,client,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
\n👀 Tên Admin: 
❎ Tuổi: Toàn
👤Giới tính: Nam
💫 Chiều cao / cân nặng: 1m78/58
🐶 Biệt danh: Không
☎️Phone Number: 0986261134
🐧UID: 100045288481675
🤔 Nơi ở: Hà Nội
😎 Quê quán: Secret
🌸 Tính cách: 
💘 Mối quan hệ: ( ͡° ͜ʖ ͡°)
🔗Profile:https://www.facebook.com/tonafhoang 

📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3

----Toàn----`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${UID FACEBOOK}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
       fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };