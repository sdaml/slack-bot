# Deploying

[Heroku](https://heroku.com) is an awesome server hosting platform. The free tier is great for small apps (_like this one_).

Create an app on heroku and 

- link with your project
- add the `SLACK_TOKEN` environment variable

```sh
heroku git:clone -a sdaml-bot-testing
git push heroku master
```
