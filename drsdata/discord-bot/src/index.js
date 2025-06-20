//INITIALIZATION INSTRUCTIONS
//npm init -y
//npm install discord.js dotenv
//npm install -g nodemon
//npm install
// "nodemon src/index.js" is used to start the bot
//intents - how to get the bot to do stuff

require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

// listens for when the bot goes online, call function

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online`)
});

client.on('messageCreate', (message) => {
   // console.log(message.content); this can show the contents in the terminal below
  if (message.author.bot) {
    return;
    // this makes sure the bot doesnt repeat
  }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'info') {
        interaction.reply('DRSbot serves as an extension of the DRSdata website, and can deliver you F1 statistics, and more. Give it a try!');
    }

    if (interaction.commandName === 'tutututu') {
        interaction.reply('MAX VERSTAPPEN!')
    }

    if (interaction.commandName === 'chili') {
        interaction.reply('Smoooooooooooooooooooth Operator')
    }
});
client.login(process.env.TOKEN);