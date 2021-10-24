# Proyecto Seminario
Proyecto para la materia de seminario uno.

Importante: para mantener un orden en la gestion de codigo, vamos a trabajar en branchs por feature y todo cambio a master debe ser enviado mediante un PR (Pull Request)

# Backend
Para poder ejecutar el backend en un entorno de desarrollo seguir los siguientes pasos:

1. ingresar a la carpeta backend.
2. editar el archivo config/config.json agregando la password de base de datos (revisar el drive).
2. ejecutar el comando `npm install`.
3. iniciar el servidor node `npm start`.

Importante: utilizamos sequalizer como ORM es necesario ejecutar los comandos de migracion para hacer cambios en el esquema.
https://sequelize.org/master/manual/migrations.html

## Resolución de problemas
Si `npm start` tira un error similar a este la primera vez: 
>Error: dlopen(/Users/paula/Documents/UADE/ProyectoFinal/portalincendios/proyectoseminario/backend/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node, 1): no suitable image found.  Did find:
	/Users/paula/Documents/UADE/ProyectoFinal/portalincendios/proyectoseminario/backend/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node: unknown file type, first eight bytes: 0x7F 0x45 0x4C 0x46 0x02 0x01 0x01 0x00
  
Correr los siguientes comandos: 
`sudo rm -rf node_modules/`
`npm install`

# Frontend

Para el caso del frontend realizar los siguientes pasos, tenga en cuenta que se requiere tener el backend  corriendo.

1. desde la carpeta fronend ejecutar el comando `npm install`
2. correr el aplicativo de frontend mediante `npm start`


