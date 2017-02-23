# Listening for messages

You can listen for messages of type: 

- ambient
- direct message
- direct mention
- mention
- reaction added.


```javascript
controller.hears('hello',  ['direct_message', 'direct_mention'], 
    (bot, message) => {
        bot.reply(message, 'Hey there 👋');
    }
);
```
