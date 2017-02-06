# Botkit

We will be using a library called [botkit](https://github.com/howdyai/botkit) to connect to Slack and let us know when someone sends a message.

```javascript
const Botkit = require('botkit');

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.SLACK_TOKEN
}).startRTM();
```
