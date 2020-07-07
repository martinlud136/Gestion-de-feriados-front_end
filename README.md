# Front end en React.js

Front-end implementado en Reac.js y React Router, permite logear un usuario administrador atenticado con JWT y editar los días feriados en la base de datos del servidor.
## Instalación

Para instalar las depencencias correr el siguiente comando en la carpeta [Directorio local]\Gestion-de-feriados-servidor:

```bash
npm install
```

## Iniciar el servidor

```bash
npm start
```


La app realizará una solicitud GET mediante fetch a la ruta localhost:5000/diasferiados/ renderizando los datos recibidos. Se puede visualizar el detalle de cada feriado a traves del enlace de los títulos de cada uno.

Posee la funcionalidad de Login y Logout de un usuario con credenciales usuario: admin contraseña: 1234admin.

Una vez logeado se puede ingresar al detalle de cada feriado y editar el motivo, tipo e info del feriado seleccionado.
