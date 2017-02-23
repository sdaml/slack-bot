# Deploying

[Heroku](https://heroku.com) is an awesome server hosting platform. The free tier is great for small apps (_like this one_).

Download the [cli](https://devcenter.heroku.com/articles/heroku-cli) and create an app new app. Then,

- Link with your project
- Add the `SLACK_TOKEN` environment variable

```sh
heroku login
heroku git:remote -a HEROKU-PROJECT-NAME
heroku config:set SLACK_API_TOKEN=[PASTE_TOKEN_HERE]
git push heroku master
heroku logs --tail -a HEROKU-PROJECT-NAME
```
