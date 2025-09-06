-----

# Sistema de Gestión de Citas Médicas

Este proyecto es un sistema para la gestión de citas médicas que permite a los usuarios agendar, ver y administrar citas de forma eficiente. Su objetivo es optimizar el proceso tanto para pacientes como para el personal de la clínica.

-----

### Requisitos del Sistema

Para ejecutar este proyecto, necesitas tener instalados los siguientes programas:

  * **Node.js**: Se recomienda usar la versión más reciente.
  * **pnpm**: El gestor de paquetes que se usa en el proyecto. Puedes instalarlo globalmente con el siguiente comando:
    ```bash
    npm install -g pnpm
    ```
  * **XAMPP**: Este proyecto utiliza una base de datos MySQL local. Asegúrate de que los módulos de **Apache** y **MySQL** estén en funcionamiento en el panel de control de XAMPP.

-----

### Configuración de la Base de Datos

El proyecto se conecta a una base de datos MySQL. Sigue estos pasos para configurarla:

1.  Abre XAMPP y verifica que los módulos de **Apache** y **MySQL** estén corriendo.
2.  Accede a la interfaz de administración de MySQL, generalmente a través de `http://localhost/phpmyadmin` en tu navegador.
3.  Crea una nueva base de datos con el nombre **`medical_appointments`**.
4.  Importa el archivo `.sql` de tu proyecto (si lo tienes) para crear todas las tablas y datos necesarios. Si no, puedes crear las tablas manualmente.

-----

### Instalación y Ejecución del Proyecto

Sigue estos pasos para poner el proyecto en marcha en tu máquina local:

1.  Clona el repositorio desde GitHub:
    ```bash
    git clone https://github.com/DrCausa/medical-appointments.git
    ```
2.  Navega a la carpeta del proyecto:
    ```bash
    cd medical-appointments
    ```
3.  Instala todas las dependencias del proyecto usando `pnpm`:
    ```bash
    pnpm install
    ```
4.  Inicia el servidor de desarrollo:
    ```bash
    pnpm run dev
    ```
5.  Una vez iniciado, el servidor estará disponible en la dirección local que se muestre en la terminal (normalmente, `http://localhost:3000`).

-----

### Estructura del Proyecto

La estructura del proyecto sigue un enfoque modular, separando el frontend, el backend y los archivos estáticos para facilitar el desarrollo y mantenimiento.

```
medical-appointments/
├── public/                # Archivos estáticos y públicos (imágenes, CSS, JS)
├── src/                   # Código fuente principal del frontend
│   ├── components/        # Componentes reutilizables de UI (botones, formularios)
│   ├── pages/             # Las diferentes páginas o vistas de la aplicación
│   ├── services/          # Lógica para interactuar con la API
│   └── App.jsx            # Componente principal de la aplicación
├── api/                   # Lógica del backend (monorepo)
│   ├── routes/            # Define los endpoints de la API
│   ├── controllers/       # Lógica que maneja las peticiones de las rutas
│   ├── models/            # Define la estructura de las tablas de la DB
│   └── server.js          # Punto de entrada del servidor
├── .gitignore             # Archivos que Git debe ignorar
├── package.json           # Configuración y dependencias del proyecto
└── README.md              # Documentación del proyecto
```

#### Descripción de los Directorios Principales

  * **`src/`**: Contiene todo el código del frontend, organizado en carpetas para **componentes**, **páginas** y servicios para la comunicación con el backend.
  * **`api/`**: Contiene la lógica del backend, con archivos separados para definir las **rutas** de la API, la lógica de los **controladores** que manejan las peticiones y los **modelos** que representan la estructura de la base de datos.
  * **`public/`**: Almacena archivos estáticos como imágenes y hojas de estilo, que son accesibles directamente desde el navegador.

-----

### Flujo de Datos

El flujo de información en la aplicación sigue un modelo cliente-servidor, donde el frontend se comunica con el backend a través de la API.

1.  **Interacción del Usuario**: El usuario interactúa con la interfaz (por ejemplo, llena un formulario de cita en la página `AgendarCita.jsx`).
2.  **Llamada a la API**: El frontend envía una petición HTTP (`POST /api/citas`) al backend.
3.  **Procesamiento en el Backend**:
      * La petición es recibida por la **ruta** correspondiente (`api/routes/citas.js`).
      * La ruta invoca una función en el **controlador** (`api/controllers/citasController.js`).
      * El controlador interactúa con el **modelo** (`api/models/Cita.js`) para validar los datos y guardarlos en la base de datos MySQL.
4.  **Respuesta**: El backend envía una respuesta al frontend (por ejemplo, un mensaje de éxito).
5.  **Actualización de la UI**: El frontend actualiza la interfaz para mostrar una confirmación al usuario.

-----

### Funcionalidades Clave

  * **Agendamiento de Citas**: Permite a los usuarios seleccionar una fecha, hora y doctor para su cita.
  * **Panel de Administración**: Un dashboard para que el personal médico gestione todas las citas.
  * **Perfiles de Usuario**: Cada usuario puede ver y gestionar su historial de citas.

-----

### Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si deseas colaborar, por favor, haz un *fork* del repositorio, crea una nueva rama para tus cambios y envía un *pull request* con una descripción clara de las mejoras o funcionalidades que has implementado.
