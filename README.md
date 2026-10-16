<div align="center">

🍣 SETSU

Tienda de sushi artesanal

Descubrí el menú, personalizá combinados y prepará tu pedido de forma sencilla.

<br>






</div>

📖 Acerca del proyecto

Setsu es una aplicación web para una tienda de sushi artesanal. Su objetivo es ofrecer una experiencia clara para explorar el catálogo, elegir piezas y combinados, personalizar las opciones disponibles y preparar un pedido para coordinarlo por WhatsApp.

El proyecto está dividido en dos partes:

Frontend: interfaz web desarrollada con React y Vite.

Backend: API REST desarrollada con FastAPI, conectada a MongoDB.

Alcance actual: el flujo del cliente prepara un mensaje para WhatsApp. La aplicación no registra el pedido en la base de datos ni procesa pagos en línea mediante ese flujo.

✨ Funcionalidades principales

Funcionalidad

Descripción

🍣 Catálogo de sushi

Consulta de piezas individuales y productos disponibles.

🍱 Combinados

Exploración de combinados y sus variantes.

🥢 Personalización

Selección de variantes disponibles para los productos.

🥤 Bebidas y extras

Consulta de productos complementarios.

🛒 Carrito

Organización de productos, cantidades y total estimado.

💬 Pedidos por WhatsApp

Preparación de un resumen para coordinar el pedido.

🔌 API REST

Comunicación entre el frontend y el backend.

🗄️ Persistencia del catálogo

Almacenamiento de los productos en MongoDB.

🧱 Arquitectura

flowchart TD
    A[Cliente] --> B[Frontend React + Vite]
    B -->|Solicitudes HTTP| C[API REST FastAPI]
    C --> D[(MongoDB)]
    B --> E[Preparación del pedido]
    E --> F[WhatsApp]

El frontend presenta la información al cliente y consulta el catálogo mediante la API. El backend valida y gestiona los recursos del catálogo almacenados en MongoDB. La coordinación final del pedido se realiza mediante WhatsApp.

🛠️ Tecnologías

<div align="center">

Capa

Tecnologías

Frontend

React, Vite, React Router, Redux Toolkit, Axios

Interfaz

styled-components, Framer Motion, React Icons

Backend

Python, FastAPI, Pydantic, Uvicorn

Base de datos

MongoDB

Herramientas

Git, npm, Docker

</div>

📂 Estructura general

Setsu/
├── Frontend/
│   ├── README.md
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── routes/
│       ├── store/
│       └── Styles/
│
├── Backend/
│   ├── README.md
│   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── dataBase/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── scripts/
│
└── README.md

🚀 Puesta en marcha

Para ejecutar el proyecto localmente, necesitás configurar el frontend, el backend y una instancia de MongoDB.

1. Backend

Consultá Backend/README.md para crear el entorno virtual, instalar dependencias, configurar las variables de entorno e iniciar FastAPI.

2. Frontend

Consultá Frontend/README.md para instalar dependencias, definir la URL de la API e iniciar Vite.

3. Configuración

Como referencia, el frontend utiliza VITE_API_URL para identificar la URL base del backend. El backend utiliza variables como MONGO_URL, DB_NAME y ALLOWED_ORIGINS.

No publiques credenciales ni archivos .env en el repositorio.

🔗 Documentación relacionada

Documentación del Frontend

Documentación del Backend

Documentación interactiva de FastAPI — disponible cuando el backend está en ejecución local.

🔐 Consideraciones importantes

Configurá CORS para permitir únicamente los orígenes que correspondan.

No incluyas contraseñas, claves privadas ni cadenas de conexión sensibles en el repositorio.

Revisá la autenticación y autorización antes de exponer endpoints de escritura públicamente.

Validá las reglas de negocio en el backend y mantené las dependencias actualizadas.

Probá el flujo completo después de realizar cambios.

<div align="center">

SETSU · Sushi artesanal, experiencia digital

<sub>Frontend React · API FastAPI · MongoDB</sub>

</div>