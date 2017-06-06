Description
==

A vanilla code base for deploying a parse server to Heroku.

Deploy it to Heroku
==
1. Setup a MongoDB on mLab. 
1. Create a new app on Heroku and fill in these config variables:
    * DATABASE_URI
    * APP_ID
    * SERVER_URL
1. Push this code base to Heroku via its git url.
1. Open the app's root URL. You should see "Everything is OK!"

This code base running on Heroku: https://standard-parse-server.herokuapp.com

Run it locally
==
Make sure you have all dependencies installed. Then run 

```
npm start
```

Contribution
==
Bug reports and pull requests are welcome.

Contributors
==
David Olesch @ Jackrabbit Mobile

Alternatives
==
Parse has their own example project which may be more up to date at some point but it requires a lot of changes to work how I want it https://github.com/ParsePlatform/parse-server-example
