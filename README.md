Sistema de Gestión de Citas Médicas
Este proyecto es un sistema para la gestión de citas médicas. Permite a los usuarios agendar, ver y administrar citas de manera eficiente, optimizando el proceso tanto para pacientes como para personal de la clínica.

Requisitos del Sistema
Para ejecutar este proyecto, necesitas tener instalados los siguientes programas:

Node.js: Se recomienda usar la versión más reciente.

pnpm: El gestor de paquetes que se usa en el proyecto. Puedes instalarlo con npm install -g pnpm.

XAMPP: Necesitas XAMPP para gestionar la base de datos MySQL local. Asegúrate de que los módulos de Apache y MySQL estén en funcionamiento.

Configuración de la Base de Datos
El proyecto utiliza una base de datos MySQL. Sigue estos pasos para configurarla:

Abre XAMPP y asegúrate de que Apache y MySQL estén ejecutándose.

Accede a la interfaz de administración de MySQL, generalmente a través de http://localhost/phpmyadmin.

Crea una nueva base de datos llamada medical_appointments.

Importa el archivo .sql de tu proyecto (si lo tienes) para crear las tablas necesarias. Si no tienes uno, puedes crear las tablas manualmente.

Instalación y Ejecución del Proyecto
Sigue estos pasos para poner en marcha el proyecto:

Clona el repositorio en tu máquina local:

Bash
git clone https://github.com/DrCausa/medical-appointments.git
Navega a la carpeta del proyecto:

Bash
cd medical-appointments
Instala las dependencias usando pnpm:

Bash
pnpm install
Inicia el servidor de desarrollo:

Bash
pnpm run dev
Una vez iniciado, el servidor estará disponible en la dirección local que se muestre en la terminal, generalmente http://localhost:3000.

Funcionalidades Clave
Agendamiento de Citas: Permite a los usuarios seleccionar una fecha, hora y doctor para su cita.
Panel de Administración: Un dashboard para el personal médico para gestionar y ver todas las citas agendadas.
Perfiles de Usuario: Cada usuario puede tener un perfil con su historial de citas.

Contribuciones
Si quieres contribuir a este proyecto, por favor, haz un "fork" del repositorio, crea una nueva rama para tus cambios y envía un "pull request".

Estructura de Directorios
La organización de tu proyecto probablemente sigue un patrón similar a este, con cada carpeta sirviendo un propósito específico:

medical-appointments/
├── public/                # Archivos estáticos y públicos
│   ├── assets/            # Imágenes, iconos, fuentes
│   ├── css/               # Hojas de estilo
│   └── js/                # Scripts de JavaScript del cliente
│
├── src/                   # Código fuente principal
│   ├── components/        # Componentes reutilizables de UI (botones, formularios, etc.)
│   ├── pages/             # Las diferentes vistas o páginas de la aplicación
│   ├── services/          # Lógica para interactuar con APIs o bases de datos
│   ├── utils/             # Funciones de utilidad que se usan en todo el proyecto
│   └── App.jsx            # El componente principal de la aplicación
│
├── api/                   # Lógica del backend (si es un monorepo)
│   ├── routes/            # Define las rutas de la API (por ejemplo, /citas, /usuarios)
│   ├── controllers/       # Lógica que maneja las peticiones de las rutas
│   ├── models/            # Define la estructura de los datos (tablas de la DB)
│   └── server.js          # Punto de entrada del servidor de la API
│
├── .gitignore             # Archivos que Git debe ignorar
├── package.json           # Configuración del proyecto y lista de dependencias
├── pnpm-lock.yaml         # Archivo de bloqueo de dependencias de pnpm
└── README.md              # Documentación del proyecto
Descripción de los directorios:
public/: Contiene archivos a los que se puede acceder directamente desde el navegador, como imágenes, hojas de estilo o scripts que no necesitan ser procesados.

src/: Aquí vive la mayor parte del código de tu aplicación.

components/: Si usas un framework como React o Vue, esta carpeta contiene los bloques de construcción de tu interfaz. Por ejemplo, un componente para el calendario, otro para los formularios de cita, etc.

pages/: Cada archivo aquí representa una página o vista completa, como la página de inicio, el panel de citas o el formulario para agendar.

services/: Aquí se abstrae la lógica de comunicación con el backend o servicios externos. Por ejemplo, funciones para obtener todas las citas o enviar una nueva.

api/: Esta carpeta podría existir si el frontend y el backend están en el mismo repositorio (un monorepo).

routes/: Define los endpoints de tu API, como /citas o /pacientes. Cada ruta dirige una petición a la lógica que debe manejarla.

controllers/: Contiene las funciones que procesan las peticiones que llegan a las rutas. Aquí es donde se maneja la lógica de negocio, como guardar una cita en la base de datos o verificar si un usuario existe.

models/: Define cómo se estructuran tus datos. En una base de datos MySQL, esto representa la estructura de las tablas, como citas o usuarios, y las relaciones entre ellas.

Flujo de Datos
El flujo de información en tu aplicación generalmente sigue este camino:

Frontend (Usuario): Un usuario interactúa con la interfaz (por ejemplo, llena un formulario de cita en la página src/pages/AgendarCita.jsx).

Llamada a la API: El código en el frontend (posiblemente en un archivo de src/services/) hace una petición HTTP al backend, por ejemplo, POST /api/citas.

Backend (Servidor Node.js):
La petición llega a una ruta definida en api/routes/citas.js.
La ruta llama a una función en el controlador (api/controllers/citasController.js) para manejar la petición.
El controlador interactúa con el modelo (api/models/Cita.js) para validar los datos y guardarlos en la base de datos MySQL.
Base de Datos (XAMPP/MySQL): La base de datos almacena los datos de la nueva cita.
Respuesta al Frontend: El backend envía una respuesta (por ejemplo, un JSON con un mensaje de éxito) de vuelta al frontend.
Interfaz de Usuario: El frontend actualiza la interfaz para mostrar un mensaje de confirmación al usuario.
