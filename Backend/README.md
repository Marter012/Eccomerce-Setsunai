<div align="center">

⚙️ Setsu API — Backend

API REST para el catálogo de sushi artesanal de Setsu






</div>

📌 Descripción

El backend de Setsu proporciona la API REST que utiliza el frontend para consultar y gestionar la información del catálogo. Administra piezas individuales de sushi, combinados, variantes generadas, bebidas y productos extra.

FastAPI expone los endpoints HTTP, Pydantic valida los datos de las solicitudes y MongoDB almacena los recursos.

Alcance actual: la API administra el catálogo. El flujo de confirmación por WhatsApp no registra pedidos en esta API ni procesa pagos en línea.

📑 Contenido

Funcionalidades

Tecnologías

Estructura del proyecto

Instalación

Variables de entorno

Ejecutar la API

Documentación y salud

Endpoints

Modelos de datos

Reglas de negocio

MongoDB y mantenimiento

Docker

CORS y seguridad

Solución de problemas

✨ Funcionalidades

API REST desarrollada con FastAPI.

Integración con MongoDB.

Endpoints para piezas individuales de sushi.

Endpoints para combinados y sus variantes.

Cálculos de precios y reglas de descuentos.

Gestión de bebidas y productos extra.

Validación de nombres duplicados.

Generación de códigos internos.

Comprobación del estado del servicio.

Documentación interactiva con Swagger.

Contenerización mediante Docker.

🧰 Tecnologías

<div align="center">







</div>

Tecnología

Función

Python

Lenguaje del backend.

FastAPI

Framework de la API REST.

Uvicorn

Servidor ASGI.

Pydantic

Validación de datos.

Motor / PyMongo

Acceso a MongoDB según la implementación del proyecto.

python-dotenv

Carga de variables de entorno.

MongoDB

Persistencia de datos.

Docker

Contenerización de la aplicación.

📂 Estructura del proyecto

Backend/
├── README.md
├── main.py
├── requirements.txt
├── Dockerfile
├── dataBase/
│   └── DBConfing.py
├── models/
├── routes/
├── services/
└── scripts/
    └── rebuild_combo_variants.py

Componente

Responsabilidad

main.py

Aplicación FastAPI, registro de rutas y configuración CORS.

dataBase/

Conexión y configuración de MongoDB.

models/

Modelos de solicitud y respuesta.

routes/

Definición de endpoints HTTP.

services/

Lógica de negocio y operaciones de datos.

scripts/

Utilidades de mantenimiento.

🚀 Instalación

Requisitos previos

Python 3.11 o superior.

pip.

MongoDB local o MongoDB Atlas.

Git.

Docker, opcional.

1. Crear un entorno virtual

Desde la raíz del repositorio:

cd Backend
python -m venv .venv

Activación en Windows PowerShell:

.\.venv\Scripts\Activate.ps1

Activación en Git Bash:

source .venv/Scripts/activate

En macOS o Linux:

source .venv/bin/activate

2. Instalar dependencias

pip install -r requirements.txt

🔐 Variables de entorno

Creá un archivo .env dentro de Backend/:

MONGO_URL=mongodb://localhost:27017
DB_NAME=SETSUNAI
ALLOWED_ORIGINS=http://localhost:5173
MONGO_SERVER_SELECTION_TIMEOUT_MS=10000
MONGO_CONNECT_TIMEOUT_MS=10000

Variable

Descripción

Ejemplo

MONGO_URL

URI de conexión a MongoDB.

mongodb://localhost:27017

DB_NAME

Nombre de la base de datos.

SETSUNAI

ALLOWED_ORIGINS

Orígenes de frontend permitidos, separados por coma si corresponde.

http://localhost:5173

MONGO_SERVER_SELECTION_TIMEOUT_MS

Tiempo máximo para seleccionar un servidor.

10000

MONGO_CONNECT_TIMEOUT_MS

Tiempo máximo de conexión.

10000

Si utilizás MongoDB Atlas, reemplazá la URI local por la cadena de conexión correspondiente. No subas credenciales ni cadenas privadas al repositorio.

▶️ Ejecutar la API

Con el entorno virtual activo:

uvicorn main:app --reload --host 127.0.0.1 --port 8000

La API debería estar disponible en http://localhost:8000.

La opción --reload está pensada para desarrollo local.

📖 Documentación y estado del servicio

Cuando la API está en ejecución, las rutas habituales son:

URL

Descripción

http://localhost:8000/

Estado general del servicio, según la ruta configurada.

http://localhost:8000/health

Comprobación de conexión con MongoDB, si está implementada en la versión desplegada.

http://localhost:8000/docs

Documentación interactiva Swagger UI.

http://localhost:8000/openapi.json

Especificación OpenAPI.

🔌 Endpoints de la API

🍣 Piezas individuales

Ruta base: /authPiece

Método

Endpoint

Descripción

GET

/authPiece/pieces

Consultar piezas de sushi.

POST

/authPiece/addPiece

Crear una pieza.

PUT

/authPiece/updatePiece/{code}

Actualizar una pieza.

El modelo de creación contempla campos como nombre, descripción, imagen, costo del rollo, categoría y proteína. El servicio genera un código interno y calcula los precios para los tamaños contemplados.

🍱 Combinados

Ruta base: /authCombinedPieces

Método

Endpoint

Descripción

GET

/authCombinedPieces/combinedPieces

Consultar combinados.

GET

/authCombinedPieces/comboVariants

Consultar variantes generadas.

GET

/authCombinedPieces/combinedPieces/variants/{comboCode}

Consultar variantes de un combinado.

POST

/authCombinedPieces/addCombinedPieces

Crear un combinado.

PUT

/authCombinedPieces/updateCombinedPieces/{code}

Actualizar un combinado.

El modelo contempla nombre, imagen, tipos de piezas, proteínas y descripción. El backend valida las piezas referenciadas y genera variantes según las reglas implementadas.

🥤 Bebidas y productos extra

Ruta base: /authBonusProduct

Método

Endpoint

Descripción

GET

/authBonusProduct/bonusProduct

Consultar productos activos.

POST

/authBonusProduct/addBonusProduct

Crear un producto adicional.

PUT

/authBonusProduct/updateBonusProduct/{code}

Actualizar un producto adicional.

Los modelos contemplan nombre, descripción, imagen, tipo y precio. El campo type permite distinguir las bebidas de otros extras.

🗄️ Modelos de datos

pieces

Campo

Descripción

name

Nombre del producto.

description

Descripción del producto.

img

URL de la imagen.

costRoll

Costo del rollo.

category

Categoría del producto.

protein

Ingrediente destacado.

code

Código interno generado.

state

Estado lógico del producto.

price_3p, price_4p, price_5p

Precios para tamaños de 3, 4 y 5 piezas.

price_8p, price_16p

Precios para tamaños de 8 y 16 piezas.

combinedPieces

Los combinados incluyen nombre, imagen, códigos de las piezas referenciadas, proteínas, descripción, código generado y estado lógico. Las variantes se almacenan por separado en comboVariants.

comboVariants

Entre los campos contemplados se encuentran:

comboCode

take

perRoll

pieces

totalPieces

basePrice

finalPrice

discounted

discountPercent

bonusProduct

Los productos adicionales incluyen nombre, descripción, imagen, tipo, precio, código generado y estado lógico. Los productos con state: false se excluyen de la consulta pública del catálogo según la implementación descrita.

💰 Reglas de negocio

Los valores de esta sección describen las reglas documentadas para el proyecto. Antes de modificarlas, contrastalos con la implementación vigente de los servicios.

Cálculo de precios de piezas

El servicio calcula un costo unitario aproximado dividiendo costRoll por 8. Los multiplicadores documentados son:

Tamaño

Multiplicador

3 piezas

3 × 3.1

4 piezas

4 × 3.1

5 piezas

5 × 3.1

8 piezas

8 × 3.0

16 piezas

16 × 2.5

Los importes calculados se redondean hacia arriba al siguiente múltiplo de 200. Cuando se actualiza el costo del rollo, el servicio vuelve a calcular los precios correspondientes.

Generación de variantes de combinados

La lógica documentada contempla selecciones de 3, 4 o 5 tipos de sushi, con 4 u 8 piezas por tipo, y excluye la combinación de 3 tipos con 8 piezas por tipo. Las variantes dependen de los productos elegibles y de los precios requeridos.

Descuentos de combinados

Cantidad total de piezas

Descuento documentado

8 o más

0 %

16 o más

10 %

24 o más

15 %

30 o más

20 %

El servicio aplica el umbral que corresponda y redondea los precios base y final hacia arriba al siguiente múltiplo de 100, según las reglas documentadas.

Validaciones

El backend contempla validaciones para nombres duplicados, códigos de piezas referenciadas, cuerpos de solicitud mediante Pydantic y generación de códigos internos con reintentos ante colisiones cuando corresponde.

🗃️ MongoDB y mantenimiento

El módulo dataBase/DBConfing.py administra la configuración de conexión a la base de datos. La aplicación inicializa el cliente durante el arranque y ejecuta las tareas de inicialización implementadas.

El repositorio incluye el script scripts/rebuild_combo_variants.py.

Antes de ejecutar scripts de mantenimiento:

Realizá una copia de seguridad.

Verificá la URI y el nombre de la base configurada.

Revisá el comportamiento del script.

Probalo en una base de prueba cuando sea posible.

Verificá los datos resultantes.

🐳 Docker

Desde Backend/, construí la imagen:

docker build -t setsu-api .

Ejemplo de ejecución:

docker run --rm -p 8080:8080 \
  -e MONGO_URL="TU_URI_MONGODB" \
  -e DB_NAME="SETSUNAI" \
  -e ALLOWED_ORIGINS="https://tu-dominio-frontend.com" \
  setsu-api

Reemplazá los valores de ejemplo por la configuración real. Verificá el puerto expuesto por el Dockerfile y los requisitos del proveedor de hosting antes del despliegue.

🌐 CORS y seguridad

El backend utiliza ALLOWED_ORIGINS para configurar los orígenes permitidos del frontend.

Para desarrollo local:

ALLOWED_ORIGINS=http://localhost:5173

En producción, configurá el dominio real del frontend. Después de cambiar las variables de entorno, reiniciá o volvé a desplegar la API.

CORS es un mecanismo de seguridad del navegador; no reemplaza la autenticación ni la autorización.

Recomendaciones de seguridad

La implementación descrita no incluye autenticación ni autorización para los endpoints de creación y actualización revisados. Antes de exponer operaciones de escritura públicamente:

Implementá autenticación y autorización adecuadas.

Restringí los permisos de las credenciales de MongoDB.

Configurá CORS para los dominios conocidos.

No subas archivos .env ni cadenas privadas de conexión.

Validá los datos y aplicá las reglas de negocio en el servidor.

Evitá exponer información sensible en los errores.

Mantené las dependencias actualizadas.

Realizá copias de seguridad antes de operaciones de mantenimiento.

🛠️ Solución de problemas

La API no inicia

Confirmá que el entorno virtual esté activo.

Instalá las dependencias de requirements.txt.

Verificá que MongoDB sea accesible.

Revisá MONGO_URL.

Consultá los registros de inicio.

Falla la comprobación de MongoDB

Si está disponible, abrí http://localhost:8000/health. Comprobá la conectividad, las credenciales y los permisos de la base.

Errores de CORS

Agregá el origen exacto del frontend a ALLOWED_ORIGINS y reiniciá o volvé a desplegar la API.

Los endpoints devuelven catálogos vacíos

Verificá que las colecciones tengan datos y que la API consulte la base correcta.

Error por nombre duplicado

Revisá los productos existentes antes de volver a intentar la creación o actualización.

📌 Alcance actual

El backend proporciona la gestión del catálogo y los datos que necesita la aplicación de clientes. Las capacidades documentadas incluyen gestión de piezas, combinados y variantes, cálculo de precios y descuentos, gestión de bebidas y extras, persistencia en MongoDB y documentación de la API.

La implementación descrita no incluye registro persistente de pedidos, procesamiento de pagos en línea ni un panel administrativo autenticado.

<div align="center">

SETSU API
<sub>Gestión del catálogo y reglas de negocio para la experiencia Setsu.</sub>

Volver al README principal · Documentación del Frontend

</div>