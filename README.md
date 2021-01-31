# INSTALAR ENTORNO DE MANERA RAPIDA

## 1) Instalar Chocolatey
Pagina Oficial: https://chocolatey.org/

Desde la consola con los permisos de administrador ejecutar los siguientes comandos:

a) Ejecutar el siguiente comando: ```Get-ExecutionPolicy```
normalmente se muestra por pantalla **"Restricted"**, si muestra el siguiente resultado **"AllSigned"**, omitir este proceso
y pasar al paso **1d**.

b) Ejecutar el siguiente comando: ```Set-ExecutionPolicy AllSigned```

c) Volver a ejecutar este comando: ```Get-ExecutionPolicy```
Ahora deberá mostrar por pantalla **"AllSigned"**

d) Pegar el siguiente codigo en la consola:

```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))```

e) Ejecutar el siguiente comando en consola:

```
choco -v
```

Con esto nos debería mostrar la versión de Chocolatey y ya lo tendriamos instalado en nuestra maquina

## 2) Instalar el entorno de Node.js en nuestro equipo utilizando Chocolatey.
Ingresar el siguiente comando en la consola con derechos de administraro:
```
choco install nodejs
```
## 3) Cerrar la consola, volver abrirla y luego ejecutar los siguientes comandos para verificar que se halla instalado correctamente node.
```
node -v
npm -v
```
## 4) Pasaremos a baja el repositorio, para esto nos tendremos que ubicar en un lugar donde querramos que se descarguen los archivos.
Luego ejecutar el siguiente comando en consola:
```
git clone https://github.com/FabriJuncal/introduccion-react.git
```
## 5) Una vez descargado el repositorio nos ubicamos dentro del proyecto con el comando:
```
cd introduccion-react
```
## 6) Una vez que estemos ubicados en el proyecto, descargamos las dependencias con el comando:
```
npm install dependencies
```
## 7) Corremos el proyecto con el comando:
```
npm start
```
Se abrirá una ventana del navegador predeterminado con el proyecto corriendo.

# SUBIR CAMBIOS A GIT PAGES

Para subir y desplegar el sitio web a "Git Pages" (Un hosting gratuito para proyectos front-end) de "GitHub"
Utilizamos el paquete "gh-pages" que lo instalamos con NPM, haciendo uso del siguiente comando:
https://www.npmjs.com/package/gh-pages
```
npm i gh-pages
```
Una vez instalado el paquete, configuramos el archivo "package.json"

### 1) Encima del campo "dependencies" agregamos el campo "homepage" con la dirección URL de donde será subido y desplegado el proyecto
### 2) Dentro del campo "scripts" agregamos un campo llamado "predeploy" que ejecutará el siguiente comando : "npm run build"
### 3) Dentro del campo "scripts" agregamos un campo llamado "deploy" que ejecutará el siguiente comando : "gh-pages -d build" 
###m4) Luego ejecutamos en consola el comando ```npm run deploy``` y se ejecutarán los comandos creados anteriormente en el archivo **"package.json"**.

Esto desplegará el sitio desarrollado con react en el hosting gratuito de github de manera automatica.
Siendo un poco mas tecnico, creará la rama **"gh-pages"**, luego ejecutará el comando ```npm run build``` para crear la version optimisada del proyecto.
Y con esto tendríamos nuestro proyecto subido en el hosting gratuito y con la ultima versión.
