# 🍣 Setsu --- Frontend

```{=html}
<p align="center">
```
`<strong>`{=html}Aplicación web para los clientes de la tienda de sushi
artesanal Setsu.`</strong>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
React · Vite · Redux Toolkit · Axios · styled-components
```{=html}
</p>
```

------------------------------------------------------------------------

## 📌 Descripción

El frontend de Setsu ofrece la interfaz para explorar el catálogo de
sushi, seleccionar piezas y combinados, personalizar un pedido,
administrar el carrito y preparar un mensaje para coordinarlo por
WhatsApp.

La aplicación se comunica con la API REST de Setsu para obtener la
información del catálogo.

## ✨ Funcionalidades

-   Página de inicio y navegación adaptable.
-   Catálogo dinámico de sushi.
-   Búsqueda de productos y navegación por categorías.
-   Piezas individuales y variantes de combinados.
-   Selección de productos y personalizaciones disponibles.
-   Bebidas y extras.
-   Carrito con cantidades y totales estimados.
-   Formulario con datos del cliente y método de pago.
-   Generación de mensajes de pedido para WhatsApp.
-   Navegación mediante rutas del cliente.
-   Gestión del estado global con Redux Toolkit.

> El frontend prepara el pedido para coordinarlo por WhatsApp. No
> procesa pagos en línea ni persiste pedidos en el backend.

------------------------------------------------------------------------

## 🧰 Tecnologías

  Tecnología          Función
  ------------------- -----------------------------
  React 19            Construcción de la interfaz
  Vite 7              Desarrollo y compilación
  JavaScript          Lógica de la aplicación
  React Router        Navegación
  Redux Toolkit       Estado global
  React Redux         Integración de Redux
  Axios               Solicitudes HTTP
  styled-components   Estilos por componentes
  Framer Motion       Animaciones
  React Icons         Iconos
  ESLint              Calidad del código

------------------------------------------------------------------------

## 📂 Estructura del proyecto

``` text
Frontend/
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── eslint.config.js
├── vercel.json
│
├── public/
│
└── src/
    ├── api.js
    ├── App.jsx
    ├── main.jsx
    │
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
    │
    ├── hooks/
    ├── pages/
    │   ├── Home/
    │   ├── Pieces/
    │   └── PlaceOrder/
    │
    ├── routes/
    ├── store/
    │   ├── slice/
    │   └── store.js
    │
    └── Styles/
```

### Directorios principales

  Directorio      Responsabilidad
  --------------- --------------------------------------------
  `components/`   Componentes reutilizables de la interfaz
  `pages/`        Pantallas principales
  `routes/`       Configuración de rutas
  `store/`        Store y slices de Redux
  `hooks/`        Hooks personalizados
  `Styles/`       Estilos y recursos de presentación
  `api.js`        URL base y construcción de rutas de la API

------------------------------------------------------------------------

## 🚀 Instalación y ejecución

### Requisitos previos

-   Node.js 20.19+ o 22.12+ recomendado.
-   npm.
-   API backend de Setsu en funcionamiento.

Comprobá las versiones instaladas:

``` bash
node --version
npm --version
```

### 1. Instalar dependencias

Desde la raíz del repositorio:

``` bash
cd Frontend
npm install
```

### 2. Configurar las variables de entorno

Creá un archivo `.env` dentro de `Frontend/`:

``` env
VITE_API_URL=http://localhost:8000
```

`VITE_API_URL` debe apuntar a la URL base del backend.

El ejemplo supone que FastAPI se ejecuta localmente en el puerto 8000.

> Las variables con prefijo `VITE_` quedan expuestas en el código
> enviado al navegador. No guardes contraseñas, claves privadas ni
> credenciales de base de datos en ellas.

### 3. Iniciar el servidor de desarrollo

``` bash
npm run dev
```

Vite mostrará la dirección local, habitualmente:

`http://localhost:5173`

Abrí esa dirección en el navegador.

------------------------------------------------------------------------

## 📜 Comandos disponibles

Ejecutá estos comandos desde `Frontend/`:

  Comando             Descripción
  ------------------- --------------------------------------
  `npm install`       Instala las dependencias
  `npm run dev`       Inicia el servidor de desarrollo
  `npm run build`     Genera la versión de producción
  `npm run preview`   Permite previsualizar la compilación
  `npm run lint`      Ejecuta ESLint

Antes de desplegar, ejecutá:

``` bash
npm run lint
npm run build
```

Corregí los errores que aparezcan antes de publicar una nueva versión.

------------------------------------------------------------------------

## 🧭 Rutas de la aplicación

  Ruta            Pantalla
  --------------- ---------------------
  `/`             Página de inicio
  `/pieces`       Catálogo de sushi
  `/placeOrder`   Creación del pedido

La configuración de rutas se encuentra en `src/routes/Routes.jsx`.

------------------------------------------------------------------------

## 🔌 Integración con el backend

El módulo `src/api.js` centraliza la URL base de la API y proporciona la
función `apiUrl(path)` para construir las rutas de los endpoints.

El frontend utiliza Axios para obtener los datos del catálogo.

  -----------------------------------------------------------------------------------------------------------
  Método                  Endpoint                                                    Función
  ----------------------- ----------------------------------------------------------- -----------------------
  GET                     `/authPiece/pieces`                                         Obtener piezas de sushi

  GET                     `/authCombinedPieces/combinedPieces`                        Obtener combinados

  GET                     `/authCombinedPieces/comboVariants`                         Obtener variantes de
                                                                                      combinados

  GET                     `/authCombinedPieces/combinedPieces/variants/{comboCode}`   Obtener variantes de un
                                                                                      combinado

  GET                     `/authBonusProduct/bonusProduct`                            Obtener bebidas y
                                                                                      extras
  -----------------------------------------------------------------------------------------------------------

El backend debe estar activo y configurado para permitir solicitudes
desde el origen del frontend.

------------------------------------------------------------------------

## 🛒 Flujo de pedido

El proceso actual para el cliente es el siguiente:

1.  El cliente abre la pantalla de pedido.
2.  Explora las piezas individuales y los combinados.
3.  Selecciona tamaños y personalizaciones disponibles.
4.  Agrega productos al carrito.
5.  Revisa las cantidades, las opciones elegidas y el total estimado.
6.  Ingresa su nombre y selecciona un método de pago.
7.  La aplicación genera un resumen del pedido.
8.  WhatsApp se abre con el mensaje preparado para coordinar el pedido.

El carrito se gestiona mediante el estado de Redux. La implementación
actual no guarda el pedido en MongoDB ni procesa una transacción de
pago.

### Configuración de WhatsApp

El destino de WhatsApp está definido en:

`src/components/NavBar/OrderSent/OrderSent.jsx`

Si cambia el número de contacto del comercio, actualizá el valor
correspondiente y probá el flujo tanto en computadoras como en
dispositivos móviles.

------------------------------------------------------------------------

## 🌐 Despliegue en Vercel

El frontend puede desplegarse de forma independiente del backend.

### Pasos de despliegue

1.  Importá el repositorio de GitHub en Vercel.
2.  Configurá `Frontend` como directorio raíz.
3.  Utilizá `npm run build` como comando de compilación.
4.  Configurá `dist` como directorio de salida.
5.  Agregá `VITE_API_URL` con la URL pública del backend.
6.  Desplegá la aplicación.
7.  Verificá las rutas principales.
8.  Confirmá que el backend permita el origen publicado.

El repositorio incluye una configuración de reescritura en `vercel.json`
para la navegación de la aplicación.

### Lista de verificación para producción

-   [ ] `VITE_API_URL` apunta a la API de producción.
-   [ ] El backend es accesible públicamente.
-   [ ] CORS permite el dominio del frontend.
-   [ ] La compilación de producción termina correctamente.
-   [ ] Las rutas funcionan al actualizar el navegador.
-   [ ] Las imágenes y los recursos externos se cargan.
-   [ ] El flujo de pedido por WhatsApp funciona correctamente.

------------------------------------------------------------------------

## 🛠️ Resolución de problemas

### Error `ENOENT: package.json`

Comprobá que la terminal esté dentro de `Frontend/`:

``` bash
pwd
ls -la
```

El directorio debe contener `package.json`.

Si solamente contiene `package-lock.json`, localizá o recuperá el
`package.json` original antes de instalar las dependencias.

### No se carga el catálogo

-   Revisá `VITE_API_URL`.
-   Verificá que el backend esté en ejecución.
-   Consultá los endpoints del catálogo.
-   Inspeccioná la consola del navegador y la pestaña Network.
-   Revisá la configuración CORS del backend.
-   Comprobá que MongoDB contenga los registros esperados.

### Errores de CORS

Agregá el origen exacto del frontend a `ALLOWED_ORIGINS` en el backend.

Reiniciá o volvé a desplegar la API después de cambiar sus variables de
entorno.

### Los cambios del `.env` no se aplican

Reiniciá el servidor de desarrollo de Vite.

En producción, generá una nueva compilación y volvé a desplegar la
aplicación, ya que las variables `VITE_*` se incorporan durante el
proceso de compilación.

### Errores de compilación o lint

Ejecutá los comandos por separado:

``` bash
npm run lint
npm run build
```

Revisá la salida para identificar los archivos afectados.

------------------------------------------------------------------------

## 🔐 Buenas prácticas

-   Mantené sincronizados `package.json` y `package-lock.json`.
-   No subas archivos `.env`.
-   No subas `node_modules/` ni `dist/`.
-   No expongas credenciales privadas en las variables del frontend.
-   Mantené organizados los componentes reutilizables.
-   Validá las reglas de negocio importantes en el backend.
-   Probá el flujo de pedido después de modificar el carrito o los
    precios.

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<strong>`{=html}Setsu Frontend`</strong>`{=html}`<br>`{=html} Una
experiencia adaptable para descubrir y pedir sushi artesanal.
```{=html}
</p>
```
