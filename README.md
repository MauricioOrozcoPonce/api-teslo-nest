<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

#Teslo API

1. Clonar proyecto
2. ```npm install```
3. Clonar archivo ```.env.template``` y renombrarlo a ```.env``` 
4. Cambiar las variabled de entorno
5. Levantar base de datos
```
  docker-compose up -d
```
6. Levantar en modo de desarrollo: ```npm run start:dev```
7. Ejecutar seed ```http:localhost:3000/api/seed ```