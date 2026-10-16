<div align="center">

# ⚙️ Setsu API — Backend

### API REST para el catálogo de sushi artesanal

<br>

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

<br>

[Funcionalidades](#-funcionalidades) ·
[Instalación](#-instalación) ·
[Endpoints](#-endpoints-de-la-api) ·
[Modelos](#-modelos-de-datos) ·
[Despliegue](#-docker)

</div>

---

## 📌 Descripción

El backend de **Setsu** proporciona la API REST que utiliza el frontend para consultar y gestionar la información del catálogo.

Administra piezas individuales de sushi, combinados, variantes generadas, bebidas y productos extra.

La aplicación utiliza:

- **FastAPI** para exponer los endpoints HTTP.
- **Pydantic** para validar los datos de las solicitudes.
- **MongoDB** para almacenar la información del catálogo.
- **Uvicorn** para ejecutar la aplicación ASGI.

> **Alcance actual:** el backend administra el catálogo. El flujo de confirmación por WhatsApp no registra pedidos en esta API ni procesa pagos en línea.

---

## 📑 Contenido

- [Funcionalidades](#-funcionalidades)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Variables de entorno](#-variables-de-entorno)
- [Ejecutar la API](#-ejecutar-la-api)
- [Documentación interactiva](#-documentación-interactiva)
- [Endpoints de la API](#-endpoints-de-la-api)
- [Modelos de datos](#-modelos-de-datos)
- [Reglas de negocio](#-reglas-de-negocio)
- [MongoDB y mantenimiento](#-mongodb-y-mantenimiento)
- [Docker](#-docker)
- [CORS y seguridad](#-cors-y-seguridad)
- [Solución de problemas](#-solución-de-problemas)

---

## ✨ Funcionalidades

- API REST desarrollada con FastAPI.
- Integración con MongoDB.
- Consulta de piezas individuales de sushi.
- Creación y actualización de piezas.
- Consulta de combinados y sus variantes.
- Generación y actualización de combinados.
- Consulta y administración de bebidas y productos extra.
- Validación de datos mediante modelos.
- Validaciones de nombres duplicados.
- Generación de códigos internos.
- Cálculo de precios y descuentos.
- Documentación interactiva con Swagger UI.
- Ejecución mediante Docker.

---

## 🛠️ Tecnologías

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

</div>

| Tecnología | Función |
|:--|:--|
| **Python** | Lenguaje principal del backend. |
| **FastAPI** | Framework para construir la API REST. |
| **Uvicorn** | Servidor ASGI para ejecutar la aplicación. |
| **Pydantic** | Validación y definición de modelos de datos. |
| **Motor / PyMongo** | Acceso a MongoDB, según la implementación instalada. |
| **python-dotenv** | Carga de variables de entorno, si está configurado en el proyecto. |
| **MongoDB** | Persistencia de los datos del catálogo. |
| **Docker** | Contenerización de la aplicación. |

---

## 📂 Estructura del proyecto

```text
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
```

| Componente | Responsabilidad |
|:--|:--|
| `main.py` | Aplicación FastAPI y registro de rutas. |
| `dataBase/` | Configuración y conexión con MongoDB. |
| `models/` | Modelos de solicitud y respuesta. |
| `routes/` | Definición de endpoints HTTP. |
| `services/` | Operaciones de datos y lógica de negocio. |
| `scripts/` | Scripts de mantenimiento y procesamiento de datos. |

> La estructura es orientativa. Conservá los nombres reales de tus archivos y directorios si difieren de este esquema.

---

## 🚀 Instalación

### Requisitos previos

- Python 3.11 o superior, según las dependencias del proyecto.
- `pip`.
- MongoDB local o MongoDB Atlas.
- Git.
- Docker, opcional.

### 1. Ingresar al directorio

Desde la raíz del repositorio:

```bash
cd Backend
```

### 2. Crear el entorno virtual

```bash
python -m venv .venv
```

### 3. Activar el entorno virtual

**Windows PowerShell:**

```powershell
.\.venv\Scripts\Activate.ps1
```

**Windows CMD:**

```bat
.venv\Scripts\activate.bat
```

**Git Bash:**

```bash
source .venv/Scripts/activate
```

**macOS / Linux:**

```bash
source .venv/bin/activate
```

### 4. Instalar dependencias

```bash
pip install -r requirements.txt
```

Una vez instaladas las dependencias, configurá las variables de entorno antes de iniciar la aplicación.

---

## 🔐 Variables de entorno

Creá un archivo `.env` dentro de `Backend/`.

Ejemplo de configuración local:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=SETSUNAI
ALLOWED_ORIGINS=http://localhost:5173
MONGO_SERVER_SELECTION_TIMEOUT_MS=10000
MONGO_CONNECT_TIMEOUT_MS=10000
```

### Descripción de variables

| Variable | Descripción | Ejemplo |
|:--|:--|:--|
| `MONGO_URL` | URI de conexión a MongoDB. | `mongodb://localhost:27017` |
| `DB_NAME` | Nombre de la base de datos. | `SETSUNAI` |
| `ALLOWED_ORIGINS` | Orígenes permitidos para las solicitudes del navegador. | `http://localhost:5173` |
| `MONGO_SERVER_SELECTION_TIMEOUT_MS` | Tiempo máximo de selección de servidor. | `10000` |
| `MONGO_CONNECT_TIMEOUT_MS` | Tiempo máximo de conexión. | `10000` |

Los valores son ejemplos. Usá los nombres y valores que espera la configuración real de tu backend.

### MongoDB Atlas

Si utilizás MongoDB Atlas, reemplazá la URI local por la cadena de conexión de tu clúster.

No publiques esa cadena si contiene credenciales.

**Importante:** agregá `.env` a `.gitignore` para evitar subir datos sensibles al repositorio.

---

## ▶️ Ejecutar la API

Con el entorno virtual activo y las variables configuradas, ejecutá:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Si la aplicación inicia correctamente, estará disponible en:

**http://localhost:8000**

La opción `--reload` permite reiniciar el servidor automáticamente durante el desarrollo. No es recomendable utilizarla como configuración de producción.

> El comando supone que `main.py` está en la raíz de `Backend/` y contiene el objeto FastAPI llamado `app`. Si tu estructura es diferente, ajustá el módulo de inicio.

---

## 📖 Documentación interactiva

FastAPI genera documentación a partir de las rutas y modelos registrados.

Con el backend en ejecución, podés consultar:

| Dirección | Descripción |
|:--|:--|
| `http://localhost:8000/docs` | Documentación interactiva Swagger UI. |
| `http://localhost:8000/openapi.json` | Especificación OpenAPI. |
| `http://localhost:8000/` | Ruta raíz, si está implementada. |
| `http://localhost:8000/health` | Comprobación de salud, si está implementada. |

Las rutas `/` y `/health` dependen de la implementación real. Si no están definidas, devolverán un error de ruta no encontrada.

---

## 🔌 Endpoints de la API

Los siguientes endpoints representan las rutas documentadas para la gestión del catálogo.

### 🍣 Piezas individuales

**Prefijo:** `/authPiece`

| Método | Endpoint | Descripción |
|:--|:--|:--|
| `GET` | `/authPiece/pieces` | Consulta las piezas de sushi. |
| `POST` | `/authPiece/addPiece` | Crea una pieza. |
| `PUT` | `/authPiece/updatePiece/{code}` | Actualiza una pieza existente. |

El modelo de una pieza contempla información como nombre, descripción, imagen, costo del rollo, categoría y proteína.

El servicio también calcula los precios correspondientes a los tamaños contemplados por el catálogo.

### 🍱 Combinados

**Prefijo:** `/authCombinedPieces`

| Método | Endpoint | Descripción |
|:--|:--|:--|
| `GET` | `/authCombinedPieces/combinedPieces` | Consulta los combinados disponibles. |
| `GET` | `/authCombinedPieces/comboVariants` | Consulta las variantes generadas. |
| `GET` | `/authCombinedPieces/combinedPieces/variants/{comboCode}` | Consulta las variantes de un combinado. |
| `POST` | `/authCombinedPieces/addCombinedPieces` | Crea un combinado. |
| `PUT` | `/authCombinedPieces/updateCombinedPieces/{code}` | Actualiza un combinado existente. |

El modelo contempla nombre, imagen, piezas referenciadas, proteínas y descripción.

La lógica del backend valida las referencias y genera variantes de acuerdo con las reglas implementadas.

### 🥤 Bebidas y productos extra

**Prefijo:** `/authBonusProduct`

| Método | Endpoint | Descripción |
|:--|:--|:--|
| `GET` | `/authBonusProduct/bonusProduct` | Consulta los productos adicionales. |
| `POST` | `/authBonusProduct/addBonusProduct` | Crea un producto adicional. |
| `PUT` | `/authBonusProduct/updateBonusProduct/{code}` | Actualiza un producto adicional. |

Estos productos contemplan campos como nombre, descripción, imagen, tipo y precio.

El campo `type` permite diferenciar las categorías de productos según la implementación.

---

## 🗄️ Modelos de datos

### Colección `pieces`

| Campo | Descripción |
|:--|:--|
| `name` | Nombre del producto. |
| `description` | Descripción del producto. |
| `img` | URL de la imagen. |
| `costRoll` | Costo del rollo. |
| `category` | Categoría del producto. |
| `protein` | Ingrediente o proteína destacada. |
| `code` | Código interno del producto. |
| `state` | Estado lógico del producto. |
| `price_3p` | Precio para 3 piezas. |
| `price_4p` | Precio para 4 piezas. |
| `price_5p` | Precio para 5 piezas. |
| `price_8p` | Precio para 8 piezas. |
| `price_16p` | Precio para 16 piezas. |

### Colección `combinedPieces`

Los combinados contienen información general del producto, referencias a las piezas utilizadas, proteínas, descripción, código interno y estado lógico.

Las variantes se administran en la colección `comboVariants`.

### Colección `comboVariants`

Entre los campos documentados se encuentran:

| Campo | Descripción |
|:--|:--|
| `comboCode` | Código del combinado asociado. |
| `take` | Selección o configuración de la variante. |
| `perRoll` | Cantidad de piezas por tipo de sushi. |
| `pieces` | Información de las piezas incluidas. |
| `totalPieces` | Cantidad total de piezas. |
| `basePrice` | Precio base calculado. |
| `finalPrice` | Precio final. |
| `discounted` | Indicador relacionado con el descuento. |
| `discountPercent` | Porcentaje de descuento aplicado. |

### Colección `bonusProduct`

Los productos adicionales contemplan nombre, descripción, imagen, tipo, precio, código y estado lógico.

Según la lógica documentada, los productos con `state: false` se excluyen de la consulta pública del catálogo.

---

## 💰 Reglas de negocio

> Esta sección describe las reglas documentadas para el proyecto. Antes de modificar los cálculos, contrastalos con el código vigente de los servicios.

### Cálculo de precios de piezas

El cálculo documentado parte del costo del rollo dividido por 8.

Los multiplicadores contemplados son:

| Tamaño | Cálculo del precio |
|:--|:--|
| 3 piezas | `3 × 3.1` sobre el costo unitario |
| 4 piezas | `4 × 3.1` sobre el costo unitario |
| 5 piezas | `5 × 3.1` sobre el costo unitario |
| 8 piezas | `8 × 3.0` sobre el costo unitario |
| 16 piezas | `16 × 2.5` sobre el costo unitario |

Los precios calculados se redondean hacia arriba al siguiente múltiplo de 200.

Cuando se modifica el costo del rollo, el servicio vuelve a calcular los precios correspondientes.

### Generación de variantes de combinados

La lógica documentada contempla selecciones de 3, 4 o 5 tipos de sushi, con 4 u 8 piezas por tipo.

Se excluye la combinación de 3 tipos con 8 piezas por tipo.

La generación de variantes depende de las piezas elegibles y de los precios requeridos por el servicio.

### Descuentos de combinados

| Cantidad total de piezas | Descuento documentado |
|:--|--:|
| 8 o más | 0 % |
| 16 o más | 10 % |
| 24 o más | 15 % |
| 30 o más | 20 % |

El servicio aplica el umbral correspondiente y redondea los precios base y final hacia arriba al siguiente múltiplo de 100, según las reglas documentadas.

### Validaciones

El backend contempla validaciones relacionadas con:

- Nombres duplicados.
- Referencias a piezas existentes.
- Validación de solicitudes mediante Pydantic.
- Generación de códigos internos.
- Reintentos ante colisiones de códigos, cuando corresponde.

---

## 🗃️ MongoDB y mantenimiento

El módulo de configuración documentado es:

```text
dataBase/DBConfing.py
```

Este módulo administra la configuración de conexión con MongoDB.

El proyecto también incluye el script:

```text
scripts/rebuild_combo_variants.py
```

Antes de ejecutar tareas de mantenimiento:

1. Realizá una copia de seguridad.
2. Confirmá la URI de conexión.
3. Verificá el nombre de la base de datos.
4. Revisá las operaciones que realiza el script.
5. Probá el proceso en una base de prueba cuando sea posible.
6. Verificá los resultados antes de utilizar la aplicación.

---

## 🐳 Docker

Si el directorio contiene un `Dockerfile` válido, podés construir la imagen desde `Backend/`.

### Construir la imagen

```bash
docker build -t setsu-api .
```

### Ejecutar el contenedor

El siguiente ejemplo supone que el contenedor escucha en el puerto `8080`:

```bash
docker run --rm -p 8080:8080 \
  -e MONGO_URL="TU_URI_MONGODB" \
  -e DB_NAME="SETSUNAI" \
  -e ALLOWED_ORIGINS="https://tu-dominio-frontend.com" \
  setsu-api
```

Reemplazá los valores de ejemplo por la configuración real.

**Importante:** verificá el puerto expuesto y el comando de inicio definidos en el `Dockerfile`. Si la aplicación escucha en otro puerto, ajustá la publicación de puertos.

No incluyas credenciales reales en scripts o archivos versionados.

---

## 🌐 CORS y seguridad

La configuración documentada utiliza `ALLOWED_ORIGINS` para definir los orígenes permitidos.

Ejemplo para desarrollo local:

```env
ALLOWED_ORIGINS=http://localhost:5173
```

En producción, configurá el dominio real del frontend.

Después de modificar las variables de entorno, reiniciá o volvé a desplegar la API.

> **CORS no reemplaza la autenticación ni la autorización.** Es un mecanismo aplicado por los navegadores para controlar solicitudes entre orígenes.

### Recomendaciones de seguridad

Antes de exponer públicamente los endpoints de escritura:

- Implementá autenticación y autorización adecuadas.
- Restringí los permisos de las credenciales de MongoDB.
- Permití únicamente los orígenes necesarios.
- No subas archivos `.env` ni cadenas privadas de conexión.
- Validá los datos y las reglas de negocio en el servidor.
- Evitá exponer información sensible en los errores.
- Mantené las dependencias actualizadas.
- Realizá copias de seguridad antes de operaciones de mantenimiento.

La documentación disponible no confirma un sistema de autenticación para los endpoints de creación y actualización. Verificá la implementación antes de publicar la API.

---

## 🛠️ Solución de problemas

### La API no inicia

1. Confirmá que el entorno virtual esté activo.
2. Instalá las dependencias de `requirements.txt`.
3. Revisá las variables de entorno.
4. Comprobá que MongoDB sea accesible.
5. Revisá los errores que aparecen en la terminal.

### No conecta con MongoDB

Verificá:

- La URI de conexión.
- El nombre de la base.
- Las credenciales.
- Los permisos de acceso.
- La conectividad de red.
- La configuración de MongoDB Atlas, si corresponde.

### Error de CORS

Comprobá que el origen del frontend esté incluido en `ALLOWED_ORIGINS`.

Reiniciá o volvé a desplegar la API después de modificar la configuración.

### Los endpoints devuelven catálogos vacíos

- Confirmá que la API esté consultando la base correcta.
- Verificá que las colecciones tengan registros.
- Revisá los filtros aplicados por los endpoints.
- Inspeccioná los registros del backend.

### Error por nombre duplicado

Revisá los productos existentes y verificá las reglas de validación antes de volver a intentar la operación.

---

## 📌 Alcance actual

El backend proporciona los servicios de catálogo que necesita la aplicación de clientes.

La funcionalidad documentada incluye:

- Gestión de piezas individuales.
- Gestión de combinados y variantes.
- Cálculo de precios y descuentos.
- Gestión de bebidas y productos extra.
- Persistencia de datos en MongoDB.
- Documentación interactiva de la API.

El flujo de pedidos mediante WhatsApp no implica que exista persistencia de pedidos, procesamiento de pagos en línea o un panel administrativo autenticado.

---

<div align="center">

### SETSU API

<sub>Gestión del catálogo y reglas de negocio.</sub>

<br>

[Volver al README principal](../README.md) · [Documentación del Frontend](../Frontend/README.md)

</div>