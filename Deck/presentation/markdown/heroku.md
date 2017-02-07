# Deploying

[Heroku](https://heroku.com) is an awesome server hosting platform. The free tier is great for small apps (_like this one_).

Download the [cli](https://devcenter.heroku.com/articles/heroku-cli) and create an app on heroku. Then,

- link with your project
- add the `SLACK_TOKEN` environment variable

```sh
heroku login
heroku git:clone -a sdaml-bot-testing
git push heroku master
```
