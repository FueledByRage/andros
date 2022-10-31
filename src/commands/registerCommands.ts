import { REST, SlashCommandBuilder, Routes } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const { BOT_TOKEN : token, CLIENT_ID : clientID, GUILD_ID : guildId } = process.env;

process.exit();