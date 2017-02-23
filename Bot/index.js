// Load botkit library
const Botkit = require('botkit');
const emojiFromWord = require('emoji-from-word');

// Load the .env file
const dotenv = require('dotenv');
dotenv.load();

// The port the server will run on
const port = process.env.PORT || 3000;

// Configuring Botkit

// Telling botkit we want to communicate with Slack
const controller = Botkit.slackbot({
    debug: false // unclutter the console!
});

// Start the webserver
controller.setupWebserver(port, (err) => {
    if (err) console.log(err);
    console.log(`Magic happens on port ${port}`);
});

// Start Botkit
controller.spawn({
    // The token we saved to our .env file
    token: process.env.SLACK_API_TOKEN
}).startRTM();

// Returns an object with the data that Slack wants
// for reacting to a message
const createReaction = (message, emoji) => ({
    timestamp: message.ts,
    channel: message.channel,
    name: emoji
});

// Make our bot do something!

// Listen to the word "hello" from any channel we are in
controller.hears('hello', ['ambient'], (bot, message) => {
    bot.reply(message, 'hiiiii');
});

controller.hears('asdf', ['ambient'], (bot, message) => {
    bot.reply(message, 'asdfasf');
});

controller.hears('react', ['ambient'], (bot, message) => {

    // React to the message with the :wave: emoji
    bot.api.reactions.add(createReaction(message, 'wave'));


    bot.api.reactions.add(createReaction(message, 'sunset'));
    bot.api.reactions.add(createReaction(message, 'thumbsup'));
    bot.api.reactions.add(createReaction(message, 'robot_face'));
});

controller.hears('vote!', ['ambient'], (bot, message) => {
    bot.api.reactions.add(createReaction(message, 'thumbsup'));
    bot.api.reactions.add(createReaction(message, 'thumbsdown'));
});

controller.hears('.+', ['mention', 'direct_mention'], (bot, message) =>  {
    // Get text from message
    const text = message.text.toLowerCase().trim();

    // split message on [space] character
    const words = text.split(' ');

    // Loop through all the words
    words.forEach((word) => {
        word = word.trim();

        const emoji = emojiFromWord(word);
        console.log(emoji);

        if (emoji.emoji_name && emoji.score > 0.93) {
            bot.api.reactions.add(createReaction(message, emoji.emoji_name));
        }
    });
});
