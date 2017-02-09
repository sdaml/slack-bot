# Botkit

We will be using a library called [botkit](https://github.com/howdyai/botkit) to connect to Slack and let us know when someone sends a message.

Create a file called `index.js` and put

```javascript
const Botkit = require('botkit');

const dotenv = require('dotenv');
dotenv.load();

const port = process.env.PORT || 3000;
const controller = Botkit.slackbot({
    debug: false
});

controller.setupWebserver(port, (err) => {
    if (err) console.log(err);
    console.log(`Magic happens on port ${port}`);
});

controller.spawn({
    token: process.env.SLACK_API_TOKEN
}).startRTM();
```
