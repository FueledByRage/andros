import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { executeHandler } from './handlers/handlers';
dotenv.config();

const token = process.env.BOT_TOKEN;

const client = new Client({ intents:[ GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] });

client.once('ready', ()=>{
    console.log('Life is pain');
});

client.on('messageCreate', async message =>{
    if(message.author.bot) return;
    const reply =  await executeHandler(message.content);

    message.reply(reply);
});

client.login(token);