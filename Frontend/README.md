<div align="center">

# 🍣 Setsu — Frontend

### La experiencia web para descubrir y pedir sushi artesanal

<br>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

<br>

[Funcionalidades](#-funcionalidades) ·
[Instalación](#-instalación-y-ejecución) ·
[API](#-integración-con-la-api) ·
[Despliegue](#-despliegue-en-vercel)

</div>

---

## 📌 Descripción

El frontend de **Setsu** es la aplicación web que permite a los clientes explorar el catálogo de sushi, seleccionar piezas y combinados, elegir variantes disponibles, administrar el carrito y preparar un pedido.

La interfaz obtiene la información del catálogo mediante la API REST del proyecto.

> **Alcance actual:** el frontend prepara un mensaje para WhatsApp. El flujo descrito no registra el pedido en MongoDB ni procesa pagos en línea.

---

## 📑 Contenido

- [Funcionalidades](#-funcionalidades)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Variables de entorno](#-variables-de-entorno)
- [Comandos disponibles](#-comandos-disponibles)
- [Rutas de la aplicación](#-rutas-de-la-aplicación)
- [Integración con la API](#-integración-con-la-api)
- [Flujo del pedido](#-flujo-del-pedido)
- [Despliegue en Vercel](#-despliegue-en-vercel)
- [Solución de problemas](#-solución-de-problemas)

---

## ✨ Funcionalidades

| Área | Descripción |
|:--|:--|
| 🏠 **Inicio** | Acceso a las principales secciones de la tienda. |
| 🍣 **Catálogo** | Consulta de piezas individuales y productos disponibles. |
| 🍱 **Combinados** | Selección de combinados y variantes publicadas por la API. |
| 🥤 **Productos extra** | Consulta de bebidas y complementos. |
| 🛒 **Carrito** | Organización de productos, cantidades y total estimado. |
| 👤 **Datos del cliente** | Captura de la información necesaria para preparar el pedido. |
| 💬 **WhatsApp** | Generación de un mensaje con el resumen del pedido. |
| 🔄 **Estado global** | Administración del estado compartido mediante Redux Toolkit. |

---

## 🛠️ Tecnologías

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111827)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

</div>

| Tecnología | Función |
|:--|:--|
| **React** | Construcción de la interfaz por componentes. |
| **Vite** | Servidor de desarrollo y compilación. |
| **React Router** | Navegación entre pantallas. |
| **Redux Toolkit** | Administración del estado global. |
| **Axios** | Solicitudes HTTP a la API. |
| **styled-components** | Estilos asociados a componentes. |
| **Framer Motion** | Animaciones de interfaz. |
| **React Icons** | Iconografía. |
| **ESLint** | Revisión estática del código. |

---

## 📂 Estructura del proyecto

```text
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
```

> Esta estructura representa la organización documentada del proyecto. Si algún directorio cambió, actualizá el esquema para reflejar la estructura real.

---

## 🚀 Instalación y ejecución

### Requisitos previos

- Node.js.
- npm.
- Backend de Setsu configurado y disponible.

Comprobá que Node.js y npm estén instalados:

```bash
node --version
npm --version
```

### 1. Instalar las dependencias

Desde la raíz del repositorio:

```bash
cd Frontend
npm install
```

El comando instala las dependencias declaradas en `package.json`.

> **Importante:** si el directorio solo contiene `package-lock.json` y no tiene `package.json`, primero recuperá el archivo original. El archivo de bloqueo por sí solo no permite ejecutar los scripts del proyecto.

### 2. Configurar el entorno

Creá el archivo `.env` dentro de `Frontend/`:

```env
VITE_API_URL=http://localhost:8000
```

La variable debe apuntar a la URL base del backend.

En este ejemplo, FastAPI se ejecuta localmente en el puerto `8000`. Si utilizás otro puerto o una URL remota, ajustá el valor.

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación. Habitualmente es:

**http://localhost:5173**

Mantené el backend en ejecución para que el frontend pueda consultar el catálogo.

---

## 🔐 Variables de entorno

| Variable | Descripción | Ejemplo |
|:--|:--|:--|
| `VITE_API_URL` | URL base de la API REST. | `http://localhost:8000` |

Ejemplo de archivo `.env`:

```env
VITE_API_URL=http://localhost:8000
```

### Consideraciones

- Reiniciá Vite después de modificar las variables.
- En producción, configurá la variable en el proveedor de hosting.
- Volvé a generar la compilación después de cambiar la configuración.
- No guardes tokens privados ni contraseñas en variables `VITE_*`.

Las variables con prefijo `VITE_` pueden quedar incluidas en el código que se entrega al navegador. Por eso, deben contener únicamente valores públicos.

---

## 📜 Comandos disponibles

Ejecutá los comandos desde la carpeta `Frontend/`.

| Comando | Descripción |
|:--|:--|
| `npm install` | Instala las dependencias. |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm run preview` | Previsualiza la compilación generada. |
| `npm run lint` | Ejecuta ESLint. |

Antes de desplegar, ejecutá:

```bash
npm run lint
npm run build
```

Estos comandos permiten detectar problemas de lint y comprobar si la aplicación puede compilarse.

---

## 🧭 Rutas de la aplicación

| Ruta | Pantalla |
|:--|:--|
| `/` | Página de inicio. |
| `/pieces` | Catálogo de sushi. |
| `/placeOrder` | Creación del pedido. |

La configuración de rutas se encuentra documentada en:

```text
src/routes/Routes.jsx
```

La disponibilidad exacta de cada ruta depende de la configuración actual del router.

---

## 🔌 Integración con la API

El frontend utiliza solicitudes HTTP para consultar los productos del catálogo.

El módulo `src/api.js` centraliza la URL base y proporciona la función `apiUrl(path)` para construir las rutas de los endpoints.

### Endpoints utilizados

| Método | Endpoint | Propósito |
|:--|:--|:--|
| `GET` | `/authPiece/pieces` | Obtener piezas de sushi. |
| `GET` | `/authCombinedPieces/combinedPieces` | Obtener combinados. |
| `GET` | `/authCombinedPieces/comboVariants` | Obtener variantes de combinados. |
| `GET` | `/authCombinedPieces/combinedPieces/variants/{comboCode}` | Obtener las variantes de un combinado. |
| `GET` | `/authBonusProduct/bonusProduct` | Obtener bebidas y productos extra. |

### Si la API no responde

1. Verificá el valor de `VITE_API_URL`.
2. Confirmá que el backend esté en ejecución.
3. Probá los endpoints directamente.
4. Revisá la consola del navegador.
5. Inspeccioná las solicitudes en la pestaña **Network**.
6. Comprobá la configuración CORS del backend.

---

## 🛒 Flujo del pedido

El flujo general del cliente es el siguiente:

1. Ingresa a la tienda.
2. Explora las piezas de sushi y los combinados.
3. Selecciona las variantes disponibles.
4. Agrega productos al carrito.
5. Revisa las cantidades y el total estimado.
6. Completa los datos solicitados.
7. Selecciona las opciones disponibles en el formulario.
8. La aplicación prepara un resumen del pedido.
9. WhatsApp se abre con el mensaje listo para coordinar el pedido.

El carrito se administra mediante Redux Toolkit.

> El flujo descrito prepara el pedido para WhatsApp. No debe interpretarse como un sistema de persistencia de pedidos o procesamiento de pagos en línea.

### Configuración de WhatsApp

La ubicación documentada de la lógica de envío es:

```text
src/components/NavBar/OrderSent/OrderSent.jsx
```

Si cambia el número de contacto del comercio, actualizá el valor correspondiente y probá el flujo tanto en escritorio como en dispositivos móviles.

---

## 🌐 Despliegue en Vercel

### Configuración

1. Importá el repositorio en Vercel.
2. Configurá `Frontend` como directorio raíz del proyecto.
3. Utilizá el comando de compilación:

   ```bash
   npm run build
   ```

4. Configurá `dist` como directorio de salida.
5. Definí `VITE_API_URL` con la URL pública del backend.
6. Desplegá la aplicación.
7. Verificá la comunicación entre frontend y backend.

El repositorio incluye un archivo `vercel.json` para la configuración del despliegue.

### Lista de verificación

- [ ] La URL de la API es correcta.
- [ ] El backend está disponible.
- [ ] CORS permite el dominio publicado.
- [ ] `npm run lint` finaliza correctamente.
- [ ] `npm run build` finaliza correctamente.
- [ ] Las rutas funcionan al actualizar el navegador.
- [ ] Las imágenes y los recursos externos se cargan.
- [ ] El flujo de WhatsApp funciona correctamente.

---

## 🛠️ Solución de problemas

### Error `ENOENT: package.json`

Verificá que la terminal esté dentro del directorio correcto:

```bash
cd Frontend
```

En Windows PowerShell podés listar los archivos con:

```powershell
Get-ChildItem
```

En macOS, Linux o Git Bash:

```bash
ls -la
```

El directorio debe contener `package.json`. Si solo existe `package-lock.json`, recuperá el archivo original antes de continuar.

### El catálogo no se carga

- Verificá `VITE_API_URL`.
- Confirmá que FastAPI esté en ejecución.
- Probá los endpoints de la API.
- Revisá la configuración CORS.
- Inspeccioná los errores en la consola del navegador.
- Confirmá que la base de datos contenga los productos esperados.

### Los cambios del archivo `.env` no se aplican

Detené y reiniciá el servidor de desarrollo.

En producción, actualizá la variable del entorno de despliegue y generá una nueva compilación.

### Error durante la compilación

Ejecutá:

```bash
npm run lint
npm run build
```

Revisá la salida para identificar los archivos y las líneas que necesitan corrección.

---

## 🔐 Buenas prácticas

- Mantené sincronizados `package.json` y `package-lock.json`.
- No publiques archivos `.env`.
- No subas `node_modules/` ni `dist/` al repositorio.
- No expongas credenciales privadas en variables del frontend.
- Mantené las reglas de negocio importantes en el backend.
- Probá el flujo completo después de modificar el carrito o los precios.
- Revisá la compilación antes de desplegar.

---

<div align="center">

### SETSU · FRONTEND

<sub>Una experiencia web para descubrir sushi artesanal.</sub>

<br>

[Volver al README principal](../README.md) · [Documentación del Backend](../Backend/README.md)

</div>