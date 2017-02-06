# Roadto4kApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

This project uses the MEAN stack.

![alt text](http://i.imgur.com/1NPrqxx.png "mean stack")

# Exporting the environement variables

Your need to export a few environement variables.

Here are the variables and the the places you can find them :

MONGO_URI
Spin up a free instance on mongolab and create a db user. The uri will look like this : 
`mongodb://dbuser:dbpassword@ds143559.mlab.com:43559/db-name`

`DOTA_API_KEY`
Simply log on this [website](http://steamcommunity.com/dev/apikey) to get your api key.

`STEAM_ACCOUNT_ID`
`STEAM_ACCOUNT_ID32`
`STEAM_ID3`

These 3 values can be found using this [website](https://profile.tf/)

export all of these with the command export VAR=value

# Running the app

In the root folder run theses command : `npm install; npm run build;`

The app should be served at `http://localhost:3000/`

# Special thanks to these ressources

[MEAN App with Angular 2 and the Angular CLI](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli)

[Official Angular doc](https://angular.io/)
