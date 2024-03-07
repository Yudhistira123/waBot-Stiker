import {  Client, LocalAuth } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal';

const client=new Client(
    {
      authStrategy:new LocalAuth(),  
    }
    
);

client.on('qr',(qr)=>{
  console.log('QR Reicieved:',qr);
  qrcode.generate(qr,{small:true});
});

client.on('ready',()=>{
    console.log('client is ready loh!"');
});

client.on('message',async(msg)=>{
  if (msg.body.toLocaleLowerCase().startsWith("!stiker") && msg.type=='image'){
    const media=await msg.downloadMedia();
    client.sendMessage(msg.from,media,{
      sendMediaAsSticker:true,
      stickerAuthor:"Setan Gembel woi",
      stickerName:"Invention Testing"
    })
    //msg.reply("Setan");

  }else if (msg.body=='!woww'){
     msg.reply("wiwww");
  }
    console.log(msg.from+ " berkata:"+msg.body);
});

client.initialize();