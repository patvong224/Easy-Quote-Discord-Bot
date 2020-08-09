const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'patty'){
        phrases = 2;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('Fuck yall');
        }
        else
        {
            message.channel.send('oof');
        }

        
    }
    else if (command === 'luis'){
        phrases = 4;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('what are we playing???');
        }
        else if(phrase == 2)
        {
            message.channel.send('I know that one!');
        }
        else if (phrase == 3)
        {
            message.channel.send('Jackbox?');
            message.channel.send('https://jackbox.tv/');
        }
        else
        {
            message.channel.send('Sauce?');
        }

        
    }
    else if (command === 'daisy'){
        phrases = 4;

        phrase = rand(phrases);


        if(phrase == 1)
        {
            message.channel.send('*Screams*');
            message.channel.send('https://www.youtube.com/watch?v=RSf-VpMlqkE&list=PL33CgqF3XxY8bpQnC-kNxHpTfscPSSb3b');
        }
        else if (phrase == 2)
        {
            message.channel.send('*Cries*');
            message.channel.send({files: ['https://i.kym-cdn.com/entries/icons/original/000/028/692/cat.jpg']});
        }
        else if (phrase == 3)
        {
            message.channel.send('*Eats Vegan Icecream*');
            message.channel.send('https://www.peta.org/living/food/vegan-ice-cream-flavors-to-cool-you-down-this-summer/');
        }
        else
        {
            message.channel.send('*Furiously Bangs Desk*');
            message.channel.send({files: ['https://i.imgur.com/GPG112D.jpg']});

        }
        
        
    }
    else if (command === 'tv'){
        phrases = 2;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('Watch ' + 'https://www.twitch.tv/hunnitmill'+ ' right now!!!');
        }
        else 
        {
            message.channel.send('Watch ' + 'https://www.twitch.tv/mefluffyy'+ ' right now!!!');
        }
        
    }
    else if (command === 'fluffy'){
        phrases = 6;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('Quasimodo');
        }
        else if (phrase == 2)
        {
            message.channel.send('DBD?');
        }
        else if (phrase == 3)
        {
            message.channel.send('dawg');
        }
        else if (phrase == 4)
        {
            message.channel.send('imma peek mid');
        }
        else if (phrase == 5)
        {
            message.channel.send('I do what I want');
        }
        else
        {
            message.channel.send('Im the sugar daddy');
        }

    }
    else if (command === 'bignut'){
        phrases = 4;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('I will distract her with my $1000 gaming pc');
        }
        else if (phrase == 2)
        {
            message.channel.send('Roblox is best game');
        }
        else if (phrase == 3)
        {
            message.channel.send('No! Im playing minecraft?');
        }
        else{
            message.channel.send('Write that down! Write that down!');
        }
        
    }
    else if (command === 'pateri'){
        phrases = 5;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('Crack addiction? I have a canes addiction.');
            message.channel.send('https://cdn.vox-cdn.com/thumbor/gmpwVouGYpxQknYNkKRtj4Q3U1M=/0x0:1500x900/920x613/filters:focal(630x330:870x570):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66863385/raising_canes_1.0.jpeg');
        }
        else if (phrase == 2)
        {
            message.channel.send('yes sir');
        }
        else if (phrase == 3)
        {
            message.channel.send('imma check twitter');
            message.channel.send('https://twitter.com/');
        }
        else if(phrase == 4)
        {
            message.channel.send('get fucked')
        }
        else
        {
            message.channel.send('Watch this strat! Watch this strat! *Dies*');
        }

    }
    else if (command === 'heberchan'){

        phrases = 4;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('I hate everybody and everything');
        }
        else if (phrase == 2)
        {
            message.channel.send('what is *enter name here* doing? *enter name here is in the same voicechat*');
        }
        else if (phrase == 3)
        {
            message.channel.send('Whats a google home?');
        }
        else
        {
            message.channel.send('Fuck you bitch');
        }
        
    }
    else if (command === 'help')
    {
        message.channel.send('There are only 9 commands: anthem, patty, Luis, tv, fluffy, bignut, pateri, daisy, heberchan, and help');
    }
    else if (command === 'anthem')
    {
        phrases = 4;

        phrase = rand(phrases);

        if(phrase == 1)
        {
            message.channel.send('TACOS BURRITOS! TACOS BURRITOS!');
        }
        else if (phrase == 2)
        {
            message.channel.send('CHICKEN IN THE KITCHEN. I GOT CHICKEN IN THE CHICKEN');
        }
        else if (phrase == 3)
        {
            message.channel.send('DINERO! DINERO! DINERO!');
        }
        else{
            message.channel.send('https://www.youtube.com/watch?v=KwFyegCHy2c')
        }
    }
    else {message.channel.send('that aint a command');}
   
})

function rand(phrases)
{
    num = Math.floor((Math.random()*phrases)+1);
    return num; 
} 

function getUserFromMention(mention) {

    const matches = mention.match(/^<@!?(\d+)>$/);

    if (!matches) return;

    const id = matches[1];

    return client.users.cache.get(id);
}


client.login('NzM5NTgxODkwOTQzNjQ3ODU1.XycjTw.c7v1nnPPmmhSWcnyxFdcGDs1YZI'); //end of file

