## SimpleFi

SimpleFi makes it easy to manage your decentralised finance investment portfolio.


## Getting started

1. Clone the repo

```
git https://github.com/raphael-mazet/simplefi-server.git
```

2. Create a .env file in the Prisma directory

  a. add a psql database
```
DB_PORT=<yourport>
DB_USERNAME=<yourusername>
DB_PASSWORD=<yourpassword>
DB_HOST=<yourhost>
DB_NAME=<yourdbname>
DATABASE_URL = postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
```

  b. add an Etherscan API key
```
ETHERSCAN_API_KEY = <your API key>
```

3. Install and initialise dependencies

```
npm install
npx prisma generate
```

4. Start the backend server
```
nodemon index.js
```

5. Run the client

Refer to the [SimpleFi client](https://github.com/raphael-mazet/simplefi-client) documentation

## Built with

* [Express](https://expressjs.com/) - fast, unopinionated, minimalist web framework for Node.js
* [PostgreSQL](https://www.postgresql.org/) - open source relational database
* [Prisma](https://www.prisma.io/) - open source database toolkit


## Contributing

Improvements and remixes are welcome

Please donate to this open source project on [Gitcoin](https://gitcoin.co/grants/2235/simplefi)!

## Author

Raphaël Mazet - [Github](https://github.com/raphael-mazet) - [LinkedIn](https://www.linkedin.com/in/raphael-mazet/)
