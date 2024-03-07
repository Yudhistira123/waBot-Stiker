"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const client = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth(),
});
client.on('qr', (qr) => {
    console.log('QR Reicieved:', qr);
    qrcode_terminal_1.default.generate(qr, { small: true });
});
client.on('ready', () => {
    console.log('client is ready loh!"');
});
client.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.body.toLocaleLowerCase().startsWith("!stiker") && msg.type == 'image') {
        const media = yield msg.downloadMedia();
        client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true,
            stickerAuthor: "Setan Gembel woi",
            stickerName: "Invention Testing"
        });
        //msg.reply("Setan");
    }
    else if (msg.body == '!woww') {
        msg.reply("wiwww");
    }
    console.log(msg.from + " berkata:" + msg.body);
}));
client.initialize();
