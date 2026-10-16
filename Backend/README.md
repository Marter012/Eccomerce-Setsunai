# ⚙️ Setsu API --- Backend

```{=html}
<p align="center">
```
`<strong>`{=html}API REST para el catálogo de sushi artesanal de
Setsu.`</strong>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
Python · FastAPI · Pydantic · MongoDB · Docker
```{=html}
</p>
```

------------------------------------------------------------------------

## 📌 Descripción

El backend de Setsu proporciona la API REST que utiliza el frontend para
consultar y gestionar la información del catálogo.

Administra piezas individuales de sushi, combinados, variantes
generadas, bebidas y productos extra.

La aplicación utiliza FastAPI para los endpoints HTTP, Pydantic para
validar solicitudes y MongoDB para persistir los datos.

## ✨ Funcionalidades

-   API REST desarrollada con FastAPI.
-   Integración con MongoDB.
-   Endpoints para piezas individuales de sushi.
-   Endpoints para combinados.
-   Generación automática de variantes de combinados.
-   Cálculos de precios y reglas de descuentos.
-   Gestión de bebidas y productos extra.
-   Validación de nombres duplicados.
-   Generación de códigos internos.
-   Endpoint de comprobación del estado del servicio.
-   Documentación interactiva con Swagger.
-   Contenerización mediante Docker.

> **Alcance actual:** el backend gestiona los recursos del catálogo. El
> flujo de confirmación por WhatsApp no guarda actualmente pedidos ni
> procesa pagos mediante esta API.

------------------------------------------------------------------------

## 🧰 Tecnologías

  Tecnología      Función
  --------------- ----------------------------------
  Python 3.11+    Lenguaje del backend
  FastAPI         Framework para la API REST
  Uvicorn         Servidor ASGI
  Pydantic        Validación de datos
  Motor           Acceso asíncrono a MongoDB
  PyMongo         Herramientas de acceso a MongoDB
  python-dotenv   Variables de entorno
  MongoDB         Persistencia de datos
  Docker          Contenerización

------------------------------------------------------------------------

## 📂 Estructura del proyecto

``` text
Backend/
├── README.md
├── main.py
├── requirements.txt
├── Dockerfile
│
├── dataBase/
│   └── DBConfing.py
│
├── models/
├── routes/
├── services/
│
└── scripts/
    └── rebuild_combo_variants.py
```

### Componentes principales

  -----------------------------------------------------------------------
  Componente                          Responsabilidad
  ----------------------------------- -----------------------------------
  `main.py`                           Aplicación FastAPI, registro de
                                      rutas y configuración CORS

  `dataBase/`                         Conexión y configuración de MongoDB

  `models/`                           Modelos de solicitud y respuesta de
                                      Pydantic

  `routes/`                           Definición de endpoints HTTP

  `services/`                         Lógica de negocio y operaciones con
                                      la base

  `scripts/`                          Utilidades de mantenimiento y
                                      gestión de datos
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🚀 Instalación

### Requisitos previos

-   Python 3.11 o superior.
-   pip.
-   MongoDB local o MongoDB Atlas.
-   Git.
-   Docker, opcional.

### 1. Crear un entorno virtual

Desde la raíz del repositorio:

``` bash
cd Backend
python -m venv .venv
```

Activación en Windows PowerShell:

``` powershell
.\.venv\Scripts\Activate.ps1
```

Activación en Git Bash:

``` bash
source .venv/Scripts/activate
```

En macOS o Linux:

``` bash
source .venv/bin/activate
```

### 2. Instalar las dependencias

``` bash
pip install -r requirements.txt
```

### 3. Configurar las variables de entorno

Creá un archivo `.env` dentro de `Backend/`:

``` env
MONGO_URL=mongodb://localhost:27017
DB_NAME=SETSUNAI
ALLOWED_ORIGINS=http://localhost:5173
MONGO_SERVER_SELECTION_TIMEOUT_MS=10000
MONGO_CONNECT_TIMEOUT_MS=10000
```

### Referencia de variables

  -------------------------------------------------------------------------------------------
  Variable                              Descripción             Ejemplo
  ------------------------------------- ----------------------- -----------------------------
  `MONGO_URL`                           URI de conexión a       `mongodb://localhost:27017`
                                        MongoDB                 

  `DB_NAME`                             Nombre de la base de    `SETSUNAI`
                                        datos                   

  `ALLOWED_ORIGINS`                     Orígenes permitidos     `http://localhost:5173`
                                        separados por coma      

  `MONGO_SERVER_SELECTION_TIMEOUT_MS`   Tiempo máximo para      `10000`
                                        seleccionar un servidor 

  `MONGO_CONNECT_TIMEOUT_MS`            Tiempo máximo de        `10000`
                                        conexión                
  -------------------------------------------------------------------------------------------

Si utilizás MongoDB Atlas, reemplazá la URI local por la cadena de
conexión correspondiente.

No subas credenciales ni cadenas privadas al repositorio.

------------------------------------------------------------------------

## ▶️ Ejecutar la API

Con el entorno virtual activo, ejecutá:

``` bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

La API debería estar disponible en:

`http://localhost:8000`

La opción `--reload` está pensada para desarrollo local.

------------------------------------------------------------------------

## 📖 Documentación y comprobación del estado

FastAPI genera automáticamente la documentación interactiva.

  --------------------------------------------------------------------------
  URL                                    Descripción
  -------------------------------------- -----------------------------------
  `http://localhost:8000/`               Estado general del servicio

  `http://localhost:8000/health`         Comprobación de conexión con
                                         MongoDB

  `http://localhost:8000/docs`           Swagger UI

  `http://localhost:8000/openapi.json`   Especificación OpenAPI
  --------------------------------------------------------------------------

El endpoint `/health` comprueba la conexión con MongoDB. Una respuesta
satisfactoria indica que la base configurada responde a la comprobación.

------------------------------------------------------------------------

## 🔌 Endpoints de la API

### 🍣 Piezas individuales de sushi

**Ruta base:** `/authPiece`

  Método   Endpoint                          Descripción
  -------- --------------------------------- ---------------------------
  GET      `/authPiece/pieces`               Consultar piezas de sushi
  POST     `/authPiece/addPiece`             Crear una pieza
  PUT      `/authPiece/updatePiece/{code}`   Actualizar una pieza

El modelo de creación incluye:

-   `name`
-   `description`
-   `img`
-   `costRoll`
-   `category`
-   `protein`

El servicio genera un código interno y calcula los precios para los
tamaños contemplados.

### 🍱 Combinados de sushi

**Ruta base:** `/authCombinedPieces`

  -----------------------------------------------------------------------------------------------------------
  Método                  Endpoint                                                    Descripción
  ----------------------- ----------------------------------------------------------- -----------------------
  GET                     `/authCombinedPieces/combinedPieces`                        Consultar combinados

  GET                     `/authCombinedPieces/comboVariants`                         Consultar todas las
                                                                                      variantes generadas

  GET                     `/authCombinedPieces/combinedPieces/variants/{comboCode}`   Consultar variantes de
                                                                                      un combinado

  POST                    `/authCombinedPieces/addCombinedPieces`                     Crear un combinado

  PUT                     `/authCombinedPieces/updateCombinedPieces/{code}`           Actualizar un combinado
  -----------------------------------------------------------------------------------------------------------

El modelo de creación incluye:

-   `name`
-   `img`
-   `typePieces`
-   `proteins`
-   `description`

El backend valida los códigos de las piezas referenciadas y genera las
variantes según las reglas implementadas.

### 🥤 Bebidas y productos extra

**Ruta base:** `/authBonusProduct`

  -----------------------------------------------------------------------------------------------
  Método                  Endpoint                                        Descripción
  ----------------------- ----------------------------------------------- -----------------------
  GET                     `/authBonusProduct/bonusProduct`                Consultar productos
                                                                          activos

  POST                    `/authBonusProduct/addBonusProduct`             Crear un producto
                                                                          adicional

  PUT                     `/authBonusProduct/updateBonusProduct/{code}`   Actualizar un producto
                                                                          adicional
  -----------------------------------------------------------------------------------------------

El modelo de creación incluye:

-   `name`
-   `description`
-   `img`
-   `type`
-   `price`

El campo `type` permite distinguir las bebidas de los demás extras.

------------------------------------------------------------------------

## 🗄️ Modelos de datos

### `pieces`

Las piezas individuales incluyen:

  Campo           Descripción
  --------------- ----------------------------
  `name`          Nombre del producto
  `description`   Descripción del producto
  `img`           URL de la imagen
  `costRoll`      Costo del rollo
  `category`      Categoría del producto
  `protein`       Ingrediente destacado
  `code`          Código interno generado
  `state`         Estado lógico del producto
  `price_3p`      Precio para 3 piezas
  `price_4p`      Precio para 4 piezas
  `price_5p`      Precio para 5 piezas
  `price_8p`      Precio para 8 piezas
  `price_16p`     Precio para 16 piezas

### `combinedPieces`

Los combinados incluyen nombre, imagen, códigos de piezas referenciadas,
proteínas, descripción, código generado y estado lógico.

Las variantes se almacenan por separado en `comboVariants`.

### `comboVariants`

Las variantes contienen información como:

-   `comboCode`
-   `take`
-   `perRoll`
-   `pieces`
-   `totalPieces`
-   `basePrice`
-   `finalPrice`
-   `discounted`
-   `discountPercent`

### `bonusProduct`

Los productos adicionales incluyen nombre, descripción, imagen, tipo,
precio, código generado y estado lógico.

Los productos con `state: false` se excluyen de la consulta pública del
catálogo.

------------------------------------------------------------------------

## 💰 Reglas de negocio

### Cálculo de precios de piezas

El servicio calcula un costo unitario aproximado dividiendo `costRoll`
por 8.

Los multiplicadores configurados actualmente son:

  Tamaño        Multiplicador
  ----------- ---------------
  3 piezas          `3 × 3.1`
  4 piezas          `4 × 3.1`
  5 piezas          `5 × 3.1`
  8 piezas          `8 × 3.0`
  16 piezas        `16 × 2.5`

Los importes calculados se redondean hacia arriba al siguiente múltiplo
de 200.

Cuando se actualiza el costo del rollo, el servicio vuelve a calcular
los precios correspondientes.

### Generación de variantes de combinados

El servicio genera variantes a partir de las piezas elegibles y las
reglas de selección implementadas.

La lógica actual contempla selecciones de 3, 4 o 5 tipos de sushi, con 4
u 8 piezas por tipo, y excluye la combinación de 3 tipos con 8 piezas
por tipo.

Las variantes disponibles dependen de los productos elegibles y de los
precios requeridos.

### Descuentos de combinados

Los umbrales de descuento actuales son:

  Cantidad total de piezas     Descuento
  -------------------------- -----------
  8 o más                            0 %
  16 o más                          10 %
  24 o más                          15 %
  30 o más                          20 %

El servicio aplica el umbral configurado más alto que corresponda y
redondea los precios base y final hacia arriba al siguiente múltiplo de
100.

Estos valores describen la implementación actual. Revisá el servicio
correspondiente antes de modificar las reglas comerciales.

### Validaciones

El backend contempla validaciones para:

-   Nombres duplicados al crear productos.
-   Nombres duplicados al actualizar registros existentes.
-   Códigos de piezas referenciadas en los combinados.
-   Cuerpos de solicitud mediante modelos Pydantic.
-   Códigos internos generados, con reintentos ante colisiones
    detectadas cuando corresponde.

------------------------------------------------------------------------

## 🗃️ Configuración de MongoDB

El módulo `dataBase/DBConfing.py` administra la configuración de
conexión a la base de datos.

La aplicación inicializa el cliente MongoDB durante el arranque y
ejecuta tareas de inicialización, incluida la configuración de índices
implementada.

La versión revisada crea o verifica un índice único sobre
`bonusProduct.code`.

No debe suponerse que todas las colecciones tienen índices equivalentes
sin revisar la configuración vigente.

### Mantenimiento de la base de datos

Antes de ejecutar scripts de mantenimiento:

1.  Realizá una copia de seguridad.
2.  Verificá la URI y el nombre de la base configurada.
3.  Revisá el comportamiento del script.
4.  Probalo en una base de prueba cuando sea posible.
5.  Verificá los datos resultantes.

El repositorio incluye el script:

`scripts/rebuild_combo_variants.py`

Revisalo antes de ejecutarlo sobre datos de producción.

------------------------------------------------------------------------

## 🐳 Docker

El backend incluye un Dockerfile basado en Python 3.11 slim.

Desde `Backend/`, construí la imagen:

``` bash
docker build -t setsu-api .
```

Ejecutá el contenedor:

``` bash
docker run --rm -p 8080:8080 \
  -e MONGO_URL="TU_URI_MONGODB" \
  -e DB_NAME="SETSUNAI" \
  -e ALLOWED_ORIGINS="https://tu-dominio-frontend.com" \
  setsu-api
```

Reemplazá los valores de ejemplo por la configuración real.

El contenedor está configurado para servir la API en el puerto 8080.
Verificá los requisitos del proveedor de hosting si utiliza un puerto
dinámico.

------------------------------------------------------------------------

## 🌐 Configuración de CORS

El backend utiliza `ALLOWED_ORIGINS` para configurar los orígenes
permitidos del frontend.

Para desarrollo local:

``` env
ALLOWED_ORIGINS=http://localhost:5173
```

En producción, configurá el dominio real del frontend.

Después de cambiar las variables de entorno, reiniciá o volvé a
desplegar la API.

> CORS es un mecanismo de seguridad del navegador. No reemplaza la
> autenticación ni la autorización.

------------------------------------------------------------------------

## 🔐 Consideraciones de seguridad

**La implementación actual no incluye autenticación ni autorización para
los endpoints de creación y actualización revisados.**

Antes de exponer públicamente las operaciones de escritura:

-   Implementá autenticación y autorización apropiadas.
-   Restringí los permisos de las credenciales de MongoDB.
-   Configurá CORS para los dominios conocidos del frontend.
-   No subas archivos `.env` ni cadenas privadas de conexión.
-   Validá los datos y aplicá las reglas de negocio en el servidor.
-   Evitá exponer información sensible en los errores.
-   Mantené las dependencias actualizadas.
-   Realizá copias de seguridad antes de operaciones de mantenimiento.

------------------------------------------------------------------------

## 🛠️ Resolución de problemas

### La API no inicia

-   Confirmá que el entorno virtual esté activo.
-   Instalá las dependencias de `requirements.txt`.
-   Verificá que MongoDB sea accesible.
-   Revisá el valor de `MONGO_URL`.
-   Consultá los registros de inicio por posibles errores de conexión o
    inicialización de índices.

### Falla la comprobación de MongoDB

Abrí:

`http://localhost:8000/health`

Comprobá el estado de MongoDB, la conectividad de red, las credenciales
y los permisos de la base.

### Errores de CORS

Agregá el origen exacto del frontend a `ALLOWED_ORIGINS` y reiniciá la
API.

### Los endpoints devuelven catálogos vacíos

Verificá que las colecciones de MongoDB tengan datos y que la API
consulte la base correcta.

### Error por nombre duplicado

Los servicios correspondientes validan los nombres durante la creación y
actualización. Revisá los productos existentes antes de volver a
intentarlo.

------------------------------------------------------------------------

## 📌 Alcance actual

El backend proporciona la gestión del catálogo y los datos que necesita
la aplicación de clientes.

Las capacidades implementadas incluyen:

-   Gestión de piezas individuales.
-   Gestión de combinados y generación de variantes.
-   Cálculo de precios y descuentos.
-   Gestión de bebidas y productos extra.
-   Persistencia en MongoDB.
-   Documentación de la API y comprobación de estado.

La implementación actual no incluye registro persistente de pedidos,
procesamiento de pagos en línea ni un panel administrativo autenticado.

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<strong>`{=html}Setsu API`</strong>`{=html}`<br>`{=html} Gestión del
catálogo y reglas de negocio para la experiencia de sushi Setsu.
```{=html}
</p>
```
