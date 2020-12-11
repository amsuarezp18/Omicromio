# Omicron `Al ritmo de la educación` 📝

Como consecuencia de la pandemia que se vive actualmente, los estudiantes pasaron de recibir clases presenciales a recibir clases virtuales. Uno de los mayores retos que enfrenta este cambio es la accesibilidad por parte de los estudiantes a los recursos educativos ya que muchos no tienen acceso a Internet. Como solución temporal, los colegios optaron por ofrecer la posibilidad de dejar talleres en papelerías designadas para que los estudiantes los recogieran y solucionaran en sus casas, para posteriormente ser enviados a una red social del profesor. Sin embargo, debido a esta nueva situación para el profesor es un proceso tedioso calificar los trabajos que provienen en imágenes de distintos chats. Por lo tanto, se desea facilitar y agilizar la organización de actividades para profesores que reciben sus talleres actualmente por Telegram.

## URL video :video_camera:

[Omicron YouTube Versión iOS. Lenguaje Inglés](https://youtu.be/1HHJLVFL5mM)

[Omicron YouTube Versión Android. Lenguaje Español](https://youtu.be/m6j0Jfb3sig)

[Omicron Versión Laptop. Ambos lenguajes](https://youtu.be/c5zrWbxgC04)

## URL live demo :computer:
[Omicron](https://omicromio.herokuapp.com/)

## Descripción :books:

Omicron es una plataforma web que permite a los profesores ver los talleres y actividades enviados por los estudiantes de forma fácil y sencilla, permitiendo calificar las actividades en la plataforma y obtener estadísticas a partir de estas tales como media, promedio, cantidad de entregas, etc. Para ello, se subirán los archivos .pdf o varios archivos de imágenes de las entregas enviadas por los estudiantes a la actividad correspondiente en la plataforma o a través de nuestra primera versión de un bot en Telegram.

Al entrar a Omicron verás una descripción de lo que hacemos, nuestro equipo y demás información relevante. Una vez ingreses a la plataforma podrás evidenciar una interfaz sencilla que permitirá acceder a los cursos, ver las próximas actividades y su fecha de vencimiento, ordenar a los estudiantes para calificar sus actividades y ver su fecha de entrega, añadir actividades, ver estadísticas, entre otras funciones más.

## Instrucciones de instalación y despliegue :open_file_folder:
Es un gusto para nosotros que te intereses en descargar la aplicación, sabemos que llegar hasta este punto no ha sido fácil y esperamos que las siguientes instrucciones te permitan usar nuestra aplicación de manera local.
> Cualquier inconveniente que tengas o dudes en algún paso no dudes en informarnos al correo gd.martinez@uniandes.edu.co

 1. En la carpeta base de GitHub encontrarás la dirección para clonar el repositorio *(git clone)* dando click a **Code** o para descargarlo como .zip.
 2. Una vez lo tengas en tu computador (si descargaste el .zip debes descomprimirlo) usas una terminal para correr el proyecto. Te recomendamos usar un editor de código *(por ejemplo Visual Studio Code)*, abrir la carpeta en este editor y abrir una terminar dentro de este mismo programa.
	> Debes tener instalado el gestor de paquetes *npm* para que puedas realizar los siguientes comandos. Para ello, debes primero descargar *Node.js* desde https://nodejs.org/es/. Una vez instales *Node.js* el gestor de paquetes *npm* se instala por defecto.

 3. Una vez abras la terminal debes dirigirte a la ubicación del folder del proyecto. Para ello puedes usar los comandos *cd* y *dir* (Windows) para ir navegando entre las carpetas. Una vez te encuentres en la carpeta base del proyecto (*2020_S2_E2*) ejecutas los siguientes comandos:
	 1. `cd Entrega4/app-back` -> te permitirá acceder al back del proyecto.
	 2.  `npm install` -> instalará las dependencias necesarias para el correcto funcionamiento del proyecto. Puede tomar un poco de tiempo si es la primera vez que corres el proyecto, te pedimos un poco de paciencia.
	 3. `npm start` -> este comando iniciará el back de la aplicación. Por defecto inicia en el puerto `3001` de tu computador.
4. Abres otra terminal y te diriges nuevamente a la carpeta del proyecto (*2020_S2_E2*) , ejecutas el siguiente comando
	 1. `cd Entrega4/app-back/front` -> te permitirá acceder al front del proyecto.
	 2. `npm install` -> instalará las dependencias necesarias para que se ejecute el front del proyecto.
	 3. `npm start` -> este comando iniciará el front de la aplicación. Por defecto inicia en el puerto `3000` de tu computadora.
 4. En tu navegador de preferencia favorito escribe la dirección `http://localhost:3000/`. Una vez presiones enter, verás el landing page de nuestro proyecto y podrás navegar en él libremente.

## Instrucciones de uso :clipboard:

Al entrar a Omicron encontrarás:

 1. Landing page: aquí podrás ver descripciones de lo que hacemos, qué ofrecemos, nuestros precios, cómo funciona y nuestro equipo. Al final encontrarás un footer con algunos links rápidos. Recuerda que algunos comandos rápidos en esta página son con las teclas *l, s, h*, donde corresponden  a *login (ingresar), signup (registrarse)* y *help (ayuda)* respectivamente.
 2. Una vez ingreses a la plataforma encontrarás a la izquierda una barra de navegación con tu nombre y un menú con algunos links de interés rápidos de acceder y el botón de salir. Luego, encontrarás en la pantalla principal un botón para encoger la barra de navegación en caso de que necesites ver la pantalla completa, una lista con las próximas actividades ordenadas por fecha, desde la más próxima a vencer hasta la más tardía. En la parte derecha podrás calificar la plataforma y ver las calificaciones de otras personas que tengan tu mismo rol.
 3. Al dar click en algún curso serás dirigido a las materias que tienes en ese curso. Luego, al entrar a un curso verás las actividades del mismo junto con su fecha de vencimiento, allí podrás crear una nueva actividad en caso de que lo necesites, editarla o incluso borrarla.
 4. Al entrar a una actividad podrás ver la lista de todos los estudiantes del curso, verás una barra de búsqueda en caso de que necesites filtrar a un estudiante por su nombre o un botón justo al lado donde podrás ordenar por nombre o fecha de envío. Además, en esta parte es donde tendrás la opción actualmente de subir la entrega de un estudiante para que sea procesada por nuestra plataforma.
 5. Al momento de ingresar a calificar a un estudiante podrás ver en la parte superior la actividad que estás calificando, el curso y el porcentaje de calificación en todo el curso. También, podrás ver la entrega del estudiante en pdf, asignar una calificación y un comentario. Podrás ir avanzando por los estudiantes de forma rápida en vez de ir regresando a la pantalla anterior.
 6. En la barra de navegación podrás encontrar una pestaña llamada estadísticas :bar_chart:. En esta pestaña encontrarás actualmente la nota promedio de las actividades, la cantidad de entregas, la cantidad de entregas calificadas, la nota promedio de una materia y la cantidad de entregas. Además, te ofrecemos filtros personalizados para mejorar la búsqueda.
 7. Por último, el bot de Telegram de Omicron (t.me/omicronE4bot) te apoyará al recibir una entrega. Puedes saludar y él te responderá, sin embargo, si recibe un comando que no conoce te dirá que no hay imágenes previas, por lo que debes iniciar el proceso. Usar el bot de Omicron es muuuy fácil, sólo debes enviar las imágenes de la entrega y luego, digitar el *username* de tu estudiante. Y ¡eso es todo! Omicron se encargará de lo demás para que puedas calificar rápido en la plataforma.
 
	> Por ahora, probablemente cuando lo estés probando el bot esté apagado, nos envías un correo para darte las instrucciones de horas de disponibilidad.

 ## Notas
-   Internacionalización: para cambiar el idioma de la aplicación basta con cambiar el idioma del navegador y recargar la página.
-   PWA: para navegar sin conexión es necesario ejecutar la aplicación en modo producción y apagar (*Offline*) el *ServiceWorker* en la pestaña *Aplicación* del navegador.
- Componentes visualización: se hizo uso de la librería *React Google Charts* para mostrar estadísticas.


## Referencias :video_camera:

íconos: Icons by Icon8

Images:
https://ichef.bbci.co.uk/news/410/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg, https://concepto.de/wp-content/uploads/2018/08/f%C3%ADsica-e1534938838719.jpg, https://concepto.de/wp-content/uploads/2018/08/f%C3%ADsica-e1534938838719.jpg

