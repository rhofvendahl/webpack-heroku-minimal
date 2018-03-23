## Webpack-Heroku Minimal Template

A minimal template for running an Express.js server on Heroku with Webpack.

## Installing

```
git clone https://github.com/rhofvendahl/webpack-heroku-minimal
cd webpack-heroku-minimal

npm install
```

To start express server:
```
npm run start
```
and visit http://localhost:8080

To run on Heroku:
```
#you will need to make a heroku account if you have not already
heroku login
heroku create
git push heroku master
heroku open
```

Adapted from https://github.com/darde/phaser-heroku-webpack-es6
