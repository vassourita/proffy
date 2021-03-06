<p align="center">
   <img src="./.github/logo.png" alt="Proffy" width="290"/>
</p>

<p align="center">	
<a href="https://www.linkedin.com/in/vinicius-vassao">
  <img alt="Vinicius Vassão" src="https://img.shields.io/badge/-Vinicius%20Vassão-8257E5?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <a aria-label="Completed" href="https://nextlevelweek.com/episodios/omnistack/edicao/2">
    <img src="https://img.shields.io/badge/Proffy-NLW 2.0-8257E5?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
</p>

##### :rocket: Project made in Next Level Week #2, aiming to connect teachers to students.

> #### Disclaimer:
 > I participated in every NLW and Omnistack Week since Omnistack #8, but this time I've decided to go beyond what is taught on these events and build a more robust application with automated tests, server side rendering, and a more decoupled code in general, based on the SOLID principles.

# :pushpin: Table of Contents

* [Layout](#pencil2-layout)
* [Technologies](#computer-technologies)
* [How To Run](#wrench-how-to-run)

# :pencil2: Layout
You can see the original layout by @tiagoluchtenberg for the application on Figma:
- [Mobile Layout](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/?viewer=1&node-id=)
- [Web Layout](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/?viewer=1&node-id=)

If you can't see the layouts by any reason, this should help:
- [Other ways to see the layout](https://www.notion.so/Layout-Proffy-3d5f45f54ec54ef9b2103565b7cce4e1)

# :computer: Technologies
This project was made using the follow technologies:
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/en/api.html#express)
- [Jest](https://jestjs.io/)
- [PostgreSQL](https://www.postgresql.org/)

# :wrench: How To Run
To run this app on your computer, run these commands inside the repository root folder
```shell
# open the backend, install dependencies, run docker:
$ cd packages/server/api
$ yarn
$ cd ./docker
$ docker-compose up -d
# rename .env.example to .env and add your database credentials, then run migrations:
$ cd ../
$ yarn db:migrate
# start the server
$ yarn start:dev

# open another shell again on the repository root folder, install dependencies then start the web server
$ cd packages/client/web
$ yarn
$ yarn dev

# open one more shell again on the repository root folder, install dependencies then start the expo server
$ cd packages/client/mobile
$ yarn
$ yarn start
```