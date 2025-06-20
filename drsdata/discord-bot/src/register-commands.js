require('dotenv').config();
const { REST, Routes } = require('discord.js');

//IMPORTANT: 'node src/register-commands.js'
//This registers the slash commands.

const commands = [
    {
        //this is where the commands are set up

        name: 'info',
        description: 'Describes DRSbot and its capabilities.',
    },
    {
        name: 'tutututu',
        description: 'Number 33/1',
    },
    {
        name: 'chili',
        description: 'His eyes are like angels, but his heart is cold...',
    },

];


const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

// anonymous function

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.client_ID, process.env.GUILD_ID),
            { body: commands }

        )

      console.log('Slash Commands were registered successfully!')  
    } catch (error) {
        console.log(`There was an error: ${error} `);
    }
})();