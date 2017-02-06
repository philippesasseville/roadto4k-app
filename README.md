# Roadto4kApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

This project uses the MEAN stack.

![alt text](http://i.imgur.com/1NPrqxx.png "mean stack")

# Exporting the environement variables

Your need to export a few environement variables.

Here are the variables and the the places you can find them :

`MONGO_URI`
Spin up a free instance on mongolab and create a db user. The uri will look like this : 
`mongodb://dbuser:dbpassword@ds143559.mlab.com:43559/db-name`

`DOTA_API_KEY`
Simply log on this [website](http://steamcommunity.com/dev/apikey) to get your api key.

`STEAM_ACCOUNT_ID`
`STEAM_ACCOUNT_ID32`
`STEAM_ID3`

These 3 values can be found using this [website](https://profile.tf/)

(only take the large number at the end)

export all of these with the command `export VAR=value`

note: to retreive your matches your steam/dota2 profile needs to be public.

# Running the app

In the root folder run theses command : `npm install; npm run build;`

The app should be served at `http://localhost:3000/`

(to serve the app on a different port `export PORT=XXXX;`)

![alt text](http://i.imgur.com/7Tvul2d.png "The app works!")

# Special thanks to these ressources

[MEAN App with Angular 2 and the Angular CLI](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli)

[Official Angular doc](https://angular.io/)

[Forum Thread on Dota2 Api Usage](http://dev.dota2.com/showthread.php?t=47115)

[Node Dota2 Api Wrapper](https://www.npmjs.com/package/dota2-api)

[PostMan App](https://www.getpostman.com/)

[Sublime Text Editor](https://www.sublimetext.com/)

[TypeScript Sublime Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin)

![alt text](http://i.imgur.com/a8iTWCF.png "Dota2")
