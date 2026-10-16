<div align="center">

🍣 Setsu — Frontend

La experiencia web para descubrir y pedir sushi artesanal






</div>

📌 Descripción

El frontend de Setsu es la aplicación web que permite explorar el catálogo de sushi, seleccionar piezas y combinados, personalizar las variantes disponibles, administrar el carrito y preparar un pedido para coordinarlo mediante WhatsApp.

La interfaz consulta la API REST de Setsu para obtener la información del catálogo.

Alcance actual: el frontend prepara un mensaje para WhatsApp. No persiste el pedido en MongoDB ni procesa pagos en línea mediante este flujo.

📑 Contenido

Funcionalidades

Tecnologías

Estructura del proyecto

Instalación

Variables de entorno

Comandos

Rutas

Integración con la API

Flujo del pedido

Despliegue en Vercel

Solución de problemas

✨ Funcionalidades

Área

Descripción

Inicio y navegación

Acceso a las secciones principales de la tienda.

Catálogo

Consulta de piezas de sushi y productos disponibles.

Combinados

Selección de combinados y variantes publicadas por la API.

Productos extra

Consulta de bebidas y complementos.

Carrito

Administración de cantidades y total estimado.

Datos del cliente

Captura de la información necesaria para preparar el pedido.

WhatsApp

Generación de un mensaje con el resumen del pedido.

Estado global

Gestión del estado compartido mediante Redux Toolkit.

🧰 Tecnologías

<div align="center">








</div>

Tecnología

Uso

React

Construcción de la interfaz por componentes.

Vite

Servidor de desarrollo y compilación.

React Router

Navegación entre pantallas.

Redux Toolkit / React Redux

Estado global de la aplicación.

Axios

Solicitudes HTTP a la API.

styled-components

Estilos asociados a componentes.

Framer Motion

Animaciones de interfaz.

React Icons

Iconografía.

ESLint

Revisión estática del código.

📂 Estructura del proyecto

Frontend/
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── eslint.config.js
├── vercel.json
├── public/
└── src/
    ├── api.js
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── CardsHome/
    │   ├── CardsPlaceOrder/
    │   ├── Footer/
    │   ├── Layout/
    │   ├── ModalOverlay/
    │   ├── NavBar/
    │   ├── Promotion/
    │   ├── SectionProductsAdd/
    │   ├── TypeRolls/
    │   └── utils/
    ├── hooks/
    ├── pages/
    │   ├── Home/
    │   ├── Pieces/
    │   └── PlaceOrder/
    ├── routes/
    ├── store/
    │   ├── slice/
    │   └── store.js
    └── Styles/

🚀 Instalación y ejecución

Requisitos previos

Node.js 20.19+ o 22.12+ recomendado.

npm.

Backend de Setsu disponible y configurado.

Verificá las versiones:

node --version
npm --version

1. Instalar dependencias

Desde la raíz del repositorio:

cd Frontend
npm install

Si el directorio no contiene package.json, detené la instalación y recuperá el archivo original. package-lock.json por sí solo no alcanza para ejecutar los scripts del proyecto.

2. Configurar las variables de entorno

Creá un archivo .env dentro de Frontend/:

VITE_API_URL=http://localhost:8000

VITE_API_URL debe apuntar a la URL base del backend. El ejemplo supone que FastAPI está escuchando localmente en el puerto 8000.

Las variables con prefijo VITE_ quedan expuestas al código que se ejecuta en el navegador. No guardes secretos ni credenciales privadas en ellas.

3. Iniciar Vite

npm run dev

Abrí la dirección que muestre la terminal; normalmente es http://localhost:5173.

📜 Comandos disponibles

Ejecutalos desde Frontend/:

Comando

Función

npm install

Instala las dependencias.

npm run dev

Inicia el servidor de desarrollo.

npm run build

Genera la compilación de producción.

npm run preview

Previsualiza la compilación local.

npm run lint

Ejecuta ESLint.

Antes de desplegar:

npm run lint
npm run build

🧭 Rutas de la aplicación

Ruta

Pantalla

/

Página de inicio.

/pieces

Catálogo de sushi.

/placeOrder

Creación del pedido.

La configuración de rutas se encuentra en src/routes/Routes.jsx.

🔌 Integración con la API

El módulo src/api.js centraliza la URL base y proporciona la función apiUrl(path) para construir las rutas de los endpoints. Axios realiza las solicitudes HTTP.

Método

Endpoint

Propósito

GET

/authPiece/pieces

Obtener piezas de sushi.

GET

/authCombinedPieces/combinedPieces

Obtener combinados.

GET

/authCombinedPieces/comboVariants

Obtener variantes de combinados.

GET

/authCombinedPieces/combinedPieces/variants/{comboCode}

Obtener variantes de un combinado.

GET

/authBonusProduct/bonusProduct

Obtener bebidas y extras.

El backend debe estar activo y permitir solicitudes desde el origen del frontend mediante su configuración CORS.

🛒 Flujo del pedido

El cliente abre la pantalla de pedido.

Explora las piezas y los combinados.

Selecciona las variantes y personalizaciones disponibles.

Agrega productos al carrito.

Revisa cantidades y total estimado.

Ingresa los datos solicitados y selecciona el método de pago disponible en la interfaz.

La aplicación prepara un resumen.

WhatsApp se abre con el mensaje listo para coordinar el pedido.

El carrito se administra mediante Redux. El flujo descrito no registra el pedido en MongoDB ni realiza una transacción de pago.

Configuración de WhatsApp

El destino se encuentra definido en:

src/components/NavBar/OrderSent/OrderSent.jsx

Si cambia el número de contacto del comercio, actualizá el valor correspondiente y probá el proceso en escritorio y dispositivos móviles.

🌐 Despliegue en Vercel

Importá el repositorio en Vercel.

Configurá Frontend como directorio raíz del proyecto.

Utilizá npm run build como comando de compilación.

Configurá dist como directorio de salida.

Definí VITE_API_URL con la URL pública del backend.

Desplegá y verificá las rutas.

Confirmá que el backend permita el origen publicado.

El repositorio incluye vercel.json para la navegación de la aplicación.

Lista de verificación

VITE_API_URL apunta a la API correcta.

El backend es accesible desde Internet.

CORS permite el dominio del frontend.

npm run lint termina correctamente.

npm run build termina correctamente.

Las rutas funcionan al actualizar el navegador.

Las imágenes y los recursos externos se cargan.

El flujo de WhatsApp funciona correctamente.

🛠️ Solución de problemas

Error ENOENT: package.json

Comprobá que la terminal esté dentro de Frontend/:

pwd
ls -la

El directorio debe contener package.json. Si solo existe package-lock.json, buscá o recuperá el archivo original desde el repositorio antes de ejecutar npm install.

No se carga el catálogo

Revisá VITE_API_URL.

Verificá que el backend esté en ejecución.

Consultá los endpoints del catálogo.

Inspeccioná la consola del navegador y la pestaña Network.

Revisá la configuración CORS.

Comprobá que MongoDB contenga los registros esperados.

Los cambios de .env no se aplican

Reiniciá Vite. En producción, generá una nueva compilación y volvé a desplegar, porque las variables VITE_* se incorporan durante la compilación.

Errores de compilación o lint

npm run lint
npm run build

Revisá la salida para identificar los archivos afectados.

🔐 Buenas prácticas

Mantené sincronizados package.json y package-lock.json.

No subas archivos .env, node_modules/ ni dist/.

No expongas credenciales privadas en variables del frontend.

Validá las reglas de negocio importantes en el backend.

Probá el flujo de pedido después de modificar el carrito o los precios.

<div align="center">

SETSU FRONTEND
<sub>Una experiencia web para descubrir sushi artesanal.</sub>

Volver al README principal · Documentación del Backend

</div>