🍣 Setsu --- Tienda de sushi artesanal

**Una experiencia digital para descubrir sushi,

personalizar combinados y preparar pedidos.**

Desarrollado con React, Vite, FastAPI y MongoDB.

📌 Acerca del proyecto

Setsu es una aplicación web diseñada para presentar un menú de sushi

artesanal y facilitar la experiencia de pedido de los clientes.

La plataforma permite explorar piezas individuales, descubrir

combinados, seleccionar variantes disponibles, agregar bebidas y extras,

revisar el carrito y preparar el pedido para confirmarlo mediante

WhatsApp.

El proyecto utiliza una arquitectura frontend/backend que separa la

interfaz del cliente de la API y la base de datos.

🎯 Objetivos principales

  Presentar el catálogo de productos mediante una interfaz web

    moderna.

  Permitir explorar piezas individuales y combinados disponibles.

  Ofrecer un carrito con cantidades, personalizaciones y totales

    estimados.

  Centralizar la gestión del catálogo mediante una API REST.

  Almacenar la información del catálogo en MongoDB.

  Facilitar la coordinación de pedidos mediante WhatsApp.

Alcance actual: los pedidos se preparan para coordinar su

confirmación por WhatsApp. La aplicación no guarda actualmente los

pedidos en MongoDB ni procesa pagos en línea.

✨ Funcionalidades

🛍️ Experiencia del cliente

  Página de inicio adaptable que presenta la marca Setsu.

  Catálogo dinámico de sushi.

  Búsqueda de productos y navegación por categorías.

  Piezas individuales con descripciones e imágenes.

  Combinados de sushi con variantes generadas.

  Selección de tamaños y opciones de personalización disponibles.

  Selección de bebidas, salsas, acompañamientos y extras cuando

    corresponda.

  Carrito con cantidades, detalles de los productos y totales

    estimados.

  Formulario para ingresar el nombre y seleccionar el método de pago.

  Generación de mensajes de pedido para WhatsApp.

  Navegación adaptable a computadoras y dispositivos móviles.

⚙️ Funcionalidades del backend

  API REST desarrollada con FastAPI.

  Persistencia del catálogo en MongoDB.

  Gestión de piezas individuales de sushi.

  Gestión de combinados de sushi.

  Generación automática de variantes de combinados.

  Cálculo de precios y reglas de descuentos.

  Gestión de bebidas y productos extra.

  Validación de nombres duplicados.

  Generación de códigos internos para los productos.

  Endpoint de estado para comprobar la conexión con la base de datos.

  Documentación interactiva de la API mediante Swagger UI.

🏗️ Arquitectura

La aplicación se divide en tres capas principales:

text

                         CLIENTE

                            |

                            v

                 +----------------------+

                 |       FRONTEND       |

                 |      React + Vite    |

                 |                      |

                 |    React Router      |

                 |    Redux Toolkit     |

                 |    Axios             |

                 +----------+-----------+

                            |

                      Solicitudes HTTP

                            |

                            v

                 +----------------------+

                 |       BACKEND        |

                 |       FastAPI        |

                 |                      |

                 |    Rutas REST        |

                 |    Modelos Pydantic  |

                 |    Servicios         |

                 +----------+-----------+

                            |

                            v

                 +----------------------+

                 |      BASE DE DATOS   |

                 |       MongoDB        |

                 +----------------------+

                   CONFIRMACIÓN PEDIDO

                            |

                            v

                         WhatsApp

Frontend

Responsable de la interfaz visual, la navegación, la presentación del

catálogo, el carrito, la selección de productos y la preparación del

mensaje del pedido.

Backend

Responsable de los endpoints del catálogo, la validación de solicitudes,

las reglas de negocio, los cálculos de precios y las operaciones con la

base de datos.

Base de datos

MongoDB almacena la información del catálogo que utiliza el frontend.

Integración con WhatsApp

El frontend prepara un resumen del pedido y abre WhatsApp para que el

cliente pueda coordinarlo con el comercio.

🧰 Tecnologías utilizadas

Frontend

  Tecnología          Uso

  ------------------- --------------------------------------

  React 19            Construcción de la interfaz

  Vite 7              Servidor de desarrollo y compilación

  JavaScript          Lógica de la aplicación

  React Router        Navegación entre páginas

  Redux Toolkit       Gestión del estado global

  React Redux         Integración de Redux con React

  Axios               Solicitudes HTTP

  styled-components   Estilos por componentes

  Framer Motion       Animaciones

  React Icons         Iconografía

  ESLint              Análisis de calidad del código

Backend

  Tecnología      Uso

  --------------- ---------------------------------------------

  Python 3.11+    Lenguaje del backend

  FastAPI         Framework para la API REST

  Uvicorn         Servidor ASGI

  Pydantic        Validación de datos

  Motor           Acceso asíncrono a MongoDB

  PyMongo         Herramientas de acceso a MongoDB

  python-dotenv   Configuración mediante variables de entorno

  MongoDB         Base de datos

  Docker          Contenerización

📂 Estructura del repositorio

text

Setsunai/

│

├── README.md

│

├── Frontend/

│   ├── README.md

│   ├── package.json

│   ├── package-lock.json

│   ├── index.html

│   ├── vite.config.js

│   ├── vercel.json

│   │

│   ├── public/

│   │

│   └── src/

│       ├── api.js

│       ├── components/

│       ├── hooks/

│       ├── pages/

│       ├── routes/

│       ├── store/

│       └── Styles/

│

└── Backend/

    ├── README.md

    ├── main.py

    ├── requirements.txt

    ├── Dockerfile

    │

    ├── dataBase/

    ├── models/

    ├── routes/

    ├── services/

    └── scripts/

El frontend y el backend tienen dependencias y archivos de configuración

separados. Cada aplicación puede desarrollarse y desplegarse de forma

independiente.

🚀 Primeros pasos

Requisitos previos

Instalá las siguientes herramientas:

  Git.

  Node.js 20.19+ o 22.12+.

  npm.

  Python 3.11 o superior.

  MongoDB local o MongoDB Atlas.

1. Clonar el repositorio

bash

git clone <URL_DEL_REPOSITORIO>

cd Setsunai

Reemplazá \<URL_DEL_REPOSITORIO> por la URL real del repositorio de

GitHub.

2. Configurar el backend

Entrá en la carpeta del backend:

bash

cd Backend

Creá un entorno virtual:

bash

python -m venv .venv

Activación en Windows PowerShell:

powershell

..venv\Scripts\Activate.ps1

Activación en Git Bash:

bash

source .venv/Scripts/activate

Instalá las dependencias:

bash

pip install -r requirements.txt

Creá un archivo .env dentro de Backend/:

env

MONGO_URL=mongodb://localhost:27017

DB_NAME=SETSUNAI

ALLOWED_ORIGINS=http://localhost:5173

MONGO_SERVER_SELECTION_TIMEOUT_MS=10000

MONGO_CONNECT_TIMEOUT_MS=10000

Si usás MongoDB Atlas, reemplazá la URI local por tu cadena de conexión.

3. Iniciar el backend

Desde la carpeta Backend/:

bash

uvicorn main:app --reload --host 127.0.0.1 --port 8000

La API debería estar disponible en:

http\://localhost:8000

4. Configurar el frontend

Abrí una segunda terminal y entrá en la carpeta del frontend:

bash

cd Frontend

Instalá las dependencias:

bash

npm install

Creá un archivo .env dentro de Frontend/:

env

VITE_API_URL=http://localhost:8000

5. Iniciar el frontend

bash

npm run dev

Vite mostrará la dirección local, habitualmente:

http\://localhost:5173

Abrí esa dirección en el navegador.

🔌 Resumen de la API

El backend expone los siguientes grupos de recursos:

  -----------------------------------------------------------------------

  Recurso                 Ruta base               Descripción

  ----------------------- ----------------------- -----------------------

  Piezas individuales     /authPiece            Catálogo de piezas y

                                                  precios

  Combinados y variantes  /authCombinedPieces   Combinados y variantes

                                                  generadas

  Bebidas y extras        /authBonusProduct     Productos adicionales

  -----------------------------------------------------------------------

Endpoints principales

  ---------------------------------------------------------------------------------------------------

  Método                  Endpoint                                            Función

  ----------------------- --------------------------------------------------- -----------------------

  GET                     /authPiece/pieces                                 Listar piezas de sushi

  POST                    /authPiece/addPiece                               Crear una pieza

  PUT                     /authPiece/updatePiece/{code}                     Actualizar una pieza

  GET                     /authCombinedPieces/combinedPieces                Listar combinados

  GET                     /authCombinedPieces/comboVariants                 Listar variantes de

                                                                              combinados

  POST                    /authCombinedPieces/addCombinedPieces             Crear un combinado

  PUT                     /authCombinedPieces/updateCombinedPieces/{code}   Actualizar un combinado

  GET                     /authBonusProduct/bonusProduct                    Listar bebidas y extras

                                                                              activos

  POST                    /authBonusProduct/addBonusProduct                 Crear un producto

                                                                              adicional

  PUT                     /authBonusProduct/updateBonusProduct/{code}       Actualizar un producto

                                                                              adicional

  ---------------------------------------------------------------------------------------------------

Para consultar los cuerpos exactos de las solicitudes y las respuestas,

utilizá la documentación interactiva de la API.

📖 Documentación de la API

Con el backend en ejecución, están disponibles estas direcciones:

  --------------------------------------------------------------------------

  URL                                    Descripción

  -------------------------------------- -----------------------------------

  http\://localhost:8000/               Estado general del servicio

  http\://localhost:8000/health         Comprobación de conexión con

                                         MongoDB

  http\://localhost:8000/docs           Documentación interactiva Swagger

  http\://localhost:8000/openapi.json   Especificación OpenAPI

  --------------------------------------------------------------------------

💰 Reglas de negocio

Piezas individuales

El backend calcula los precios según el costo del rollo, el tamaño de la

porción y los multiplicadores implementados en el servicio de precios.

Los tamaños contemplados son:

  3 piezas.

  4 piezas.

  5 piezas.

  8 piezas.

  16 piezas.

La implementación aplica distintos multiplicadores según el tamaño y

redondea los importes al siguiente múltiplo de 200.

Combinados de sushi

El backend genera variantes a partir de las piezas elegibles y las

reglas implementadas en los servicios.

Las variantes incluyen información como:

  Piezas seleccionadas.

  Cantidad de piezas por tipo.

  Cantidad total de piezas.

  Precio base.

  Precio final.

  Porcentaje de descuento.

La lógica actual aplica descuentos configurados según la cantidad total

de piezas.

Bebidas y extras

Los productos adicionales se almacenan en MongoDB y se clasifican

mediante el campo type.

El frontend utiliza esa información para distinguir las bebidas de los

demás extras.

Los precios y descuentos se calculan en el backend. Revisá el código

de los servicios antes de modificar las reglas comerciales.

🌐 Despliegue

Frontend --- Vercel

 Importá el repositorio en Vercel.

 Configurá Frontend como directorio raíz del proyecto.

 Utilizá npm run build como comando de compilación.

 Configurá dist como directorio de salida.

 Definí VITE_API_URL con la URL pública del backend.

 Desplegá la aplicación.

 Verificá que el backend permita solicitudes desde el dominio

    publicado.

El frontend incluye una configuración de reescritura en vercel.json

para permitir la navegación de una aplicación de página única.

Backend --- Docker

Desde Backend/:

bash

docker build -t setsu-api .

Ejecutá el contenedor:

bash

docker run --rm -p 8080:8080 


  -e MONGO_URL="TU_URI_MONGODB" 


  -e DB_NAME="SETSUNAI" 


  -e ALLOWED_ORIGINS="https://tu-dominio-frontend.com" 


  setsu-api

Reemplazá los valores de ejemplo por la configuración real del entorno.

Base de datos

El backend necesita una instancia accesible de MongoDB. Configurá la URI

de conexión y el nombre de la base antes de iniciar el servicio.

🔐 Seguridad

Antes de desplegar el proyecto públicamente:

  No subas archivos .env ni credenciales.

  No expongas cadenas privadas de conexión a MongoDB.

  Excluí los entornos virtuales y las carpetas de dependencias de Git.

  Restringí CORS a los dominios del frontend autorizados.

  No guardes credenciales privadas en variables VITE_*.

  Incorporá autenticación y autorización para las operaciones de

    escritura.

  Utilizá permisos mínimos en las credenciales de MongoDB.

Importante: el backend actual no implementa autenticación ni

autorización para los endpoints de creación y actualización revisados.

CORS no reemplaza el control de acceso a la API.

🛠️ Resolución de problemas

No se encuentra `package.json

Ejecutá los comandos de npm desde la carpeta Frontend/.

Comprobá la ubicación actual:

bash

pwd

ls -la

La carpeta del frontend debe contener package.json. Si solamente

existe package-lock.json, buscá o recuperá el archivo original antes

de intentar instalar las dependencias.

Error de conexión con MongoDB

Revisá MONGO_URL, la disponibilidad de la base de datos, la

conectividad de red y las credenciales.

Errores de CORS

Agregá el origen exacto del frontend a ALLOWED_ORIGINS y reiniciá o

volvé a desplegar el backend.

El catálogo aparece vacío

Comprobá que MongoDB tenga los registros esperados y que los endpoints

devuelvan datos.

El frontend no puede conectarse a la API

Revisá VITE_API_URL e inspeccioná la consola del navegador y la

pestaña Network.

📌 Alcance actual del proyecto

Setsu ofrece actualmente:

  Catálogo de productos para clientes.

  Carrito y flujo de selección de productos.

  API REST para los datos del catálogo.

  Persistencia de productos en MongoDB.

  Cálculos de precios y variantes de combinados.

  Coordinación de pedidos mediante WhatsApp.

La implementación actual no incluye procesamiento de pagos en línea,

registro persistente de pedidos ni un panel administrativo autenticado.

👨‍💻 Documentación técnica

Cada parte del sistema cuenta con documentación propia:

  [Frontend --- Instalación, desarrollo y

    despliegue](Frontend/README.md)

  [Backend --- API, base de datos y reglas de

    negocio](Backend/README.md)

**Setsu --- Sushi

artesanal**
Descubrí el menú. Personalizá

tu selección. Disfrutá la experiencia.