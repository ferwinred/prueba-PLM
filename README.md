## Proyecto de PLM

Se creará una API Rest a través de la cual se guardará inforación de un formulario creado desde el cliente; esta API se documentará para que se pueda consumir información

## Available Scripts

En el directorio client del proyecto:

### `npm install`

para instalar todos los paquetes y librerías necesarias para que funcione el form.

### `npm start`

correr este comando.\
Para abrir el form [http://localhost:3000](http://localhost:3000) y poder visualizarlo en el browser.

cualquier cambio en el código se actualizará el browser automaticamente.

### `npm run build`

al correr este comando se crean los bundlers necesarios para poder deployar el proyecto en la web.

ver info acerca de [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## API Rest

Esta ha sido creada en node.js, conectada a una base de datos no relacional de MongoDB; se crean endpoints parun solo schema users; el cual tendrá la siguiente información de usuarios: 
Nombre

### Apellido
### Tipo de documento de identidad
### Documento de identidad
### Correo Electrónico
### Celular
### Fecha de Nacimiento
### archivos o imagenes.


## ENDPOINTS

Tiene cinco endpoints, tipo GET, PUT, POST, DELETE; estos son:


### GET

se pueden obtener todos los users a través del endpoint `http://localhost:3001/api/users` el host y el puerto notese que estan en variables de entorno, así que pueden ser modificados para mejor utilidad.

También puede traerse un user en particular pasando el id de este en el endpoint `http://localhost:3001/api/users/id`
pasandole el id por params.

### POST

Se puede crear un user y guardarlo en la base de datos a través de este endpoint `http://localhost:3001/api/users` pasando por body los datos necesarios para crear el user en la BD, si falta algún dato, o algún dato esta errado se mostrará error indicando dónde esta el problema o que dato falta.


### PUT

Se crea este endpoint para poder modificar los usuarios de BD; `http://localhost:3001/api/users/id` se pasa por params el id del user a modificar.


### DELETE

Este endpoint es para poder eliminar de la base de datos un user en especifico, `http://localhost:3001/api/users/id` se pasa por params el id del user a eliminar.


### BD

Se configura una base de datos no relacional en MongoDB, la uri que permite la conexión con la base de datos se ingresa como variable de entorno en archivo .env ya que es un dato sensible.


### .env

se debe crear el archivo .env y configurar la URI de la BD para que se ingrese como variable de entorno y se proteja este dato ya que es sensible. 