# Especificación técnica frontend — Droguería Vida Sana

## 1. Descripción del proyecto

Diseñar e implementar una página web para una droguería con un enfoque profesional en **UI/UX (interfaz y experiencia de usuario)**, utilizando exclusivamente tecnologías web básicas: **HTML5, CSS3 y JavaScript**.

El sitio será un prototipo frontend orientado a presentar productos, facilitar su búsqueda y simular un carrito de compras. No tendrá backend ni conexión a una base de datos.

## 2. Objetivo general

Crear una experiencia digital clara, accesible y adaptable que permita a los usuarios explorar un catálogo de productos de droguería, filtrar opciones y simular una compra de manera sencilla.

## 3. Referentes de diseño

Como referentes para estudiar patrones habituales de comercio electrónico farmacéutico en Colombia, se pueden consultar:

- **Farmatodo:** https://www.farmatodo.com.co/
- **Cruz Verde:** https://www.cruzverde.com.co/

Se recomienda observar la organización del catálogo, la búsqueda, las categorías, las promociones, la información de producto y las opciones de domicilio. Estos sitios son referencias de análisis; la implementación propuesta debe conservar identidad visual propia y no copiar sus diseños literalmente.

## 4. Alcance del proyecto

### Incluido

- Página de inicio con propuesta de valor.
- Navegación principal.
- Buscador de productos.
- Catálogo con tarjetas de productos.
- Filtros por categoría y ofertas.
- Ordenamiento por precio y nombre.
- Carrito interactivo.
- Modificación de cantidades y eliminación de productos mediante decremento.
- Cálculo del subtotal y total estimado.
- Diseño adaptable a computador, tablet y celular.
- Avisos sobre el carácter demostrativo del catálogo y el uso responsable de medicamentos.

### No incluido

- Backend o API propia.
- Base de datos persistente.
- Inventario real.
- Registro e inicio de sesión.
- Pagos en línea.
- Envío real de pedidos.
- Gestión administrativa de productos.
- Validación de fórmulas médicas con sistemas reales.

Los productos y precios deben considerarse datos de ejemplo hasta que sean sustituidos por información autorizada y verificada del negocio.

## 5. Tecnologías

| Tecnología | Responsabilidad |
|---|---|
| HTML5 | Estructura semántica, navegación, contenido y controles. |
| CSS3 | Identidad visual, tipografía, distribución, animaciones y diseño adaptable. |
| JavaScript | Búsqueda, filtros, ordenamiento, carrito, cantidades, cálculos y mensajes de interfaz. |

No se utilizarán React, Vue, Angular, Bootstrap, Tailwind ni otros frameworks. La versión propuesta puede organizarse en un único archivo HTML para facilitar su ejecución inicial. Para un proyecto más grande, se recomienda separar el código en `index.html`, `styles.css` y `script.js`.

## 6. Especificación de UI/UX

### 6.1 Identidad visual

- Estilo limpio, moderno y cercano.
- Verde como color principal, asociado visualmente con bienestar y salud.
- Blanco como fondo principal y azul suave como color secundario.
- Tipografía sans serif de buena legibilidad.
- Tarjetas con bordes redondeados y sombras discretas.
- Botones de acción claramente identificables.
- Diseño consistente entre todas las secciones.

La identidad visual debe poder personalizarse con el nombre, logotipo y colores reales de la droguería.

### 6.2 Estructura de la página

1. **Barra informativa:** mensaje breve de servicio o promoción.
2. **Encabezado:** logotipo, nombre de la droguería, buscador y acceso al carrito.
3. **Navegación:** enlaces a categorías, productos, ofertas, domicilios y contacto.
4. **Sección principal o hero:** mensaje de bienvenida, propuesta de valor y botón para explorar productos.
5. **Beneficios:** información sobre domicilio, compra informada y atención.
6. **Categorías:** accesos visuales a grupos de productos.
7. **Catálogo:** tarjetas con nombre, categoría, descripción, precio y botón para agregar.
8. **Aviso de uso responsable:** aclaración de que los datos son demostrativos y recordatorio sobre medicamentos sujetos a fórmula.
9. **Pie de página:** información de contacto, enlaces y datos de la droguería.
10. **Panel del carrito:** resumen de productos, cantidades y total.

### 6.3 Experiencia de usuario

- El usuario debe poder encontrar un producto sin recorrer todo el catálogo.
- Las categorías deben tener nombres comprensibles.
- Los botones deben describir claramente sus acciones.
- El carrito debe mostrar el número de unidades seleccionadas.
- Los cambios en cantidades y precios deben reflejarse inmediatamente.
- Si una búsqueda no tiene resultados, debe mostrarse un mensaje y una opción para limpiar filtros.
- El carrito debe poder cerrarse mediante botón, clic fuera del panel o tecla Escape.
- La interfaz debe ofrecer confirmaciones breves cuando se agregue un producto.
- No se deben mostrar afirmaciones falsas sobre disponibilidad, descuentos, entrega o eficacia médica.

## 7. Funcionalidades de JavaScript

### Buscador

- Recibe texto del usuario.
- Busca coincidencias en el nombre, categoría y descripción.
- Actualiza el catálogo mientras se escribe.

### Categorías y ofertas

- Filtra productos por categoría.
- Permite mostrar solo productos marcados como oferta.
- Permite restablecer los filtros.

### Ordenamiento

Opciones sugeridas:

- Recomendados.
- Menor precio.
- Mayor precio.
- Nombre de A a Z.

### Carrito

- Agregar productos.
- Incrementar o reducir cantidades.
- Quitar un producto al llegar a cero unidades.
- Calcular el total estimado.
- Mostrar un estado vacío cuando no haya productos.
- Actualizar el contador del carrito.

### Continuar pedido

En esta versión, el botón debe mostrar un aviso que indique que se trata de una demostración. No debe fingir que se ha realizado una compra, un pago o el envío de un pedido.

## 8. Diseño adaptable y accesibilidad

- Usar CSS Grid y Flexbox para organizar los elementos.
- Incluir la etiqueta `meta viewport`.
- Ajustar el número de columnas según el ancho disponible.
- Mantener controles cómodos para pantallas táctiles.
- Utilizar HTML semántico y etiquetas accesibles.
- Añadir nombres accesibles a botones e inputs.
- Mantener contraste suficiente entre texto y fondo.
- Garantizar navegación por teclado y estados de foco visibles.
- Respetar la preferencia del sistema para reducir animaciones.
- No depender exclusivamente del color para comunicar un estado.

## 9. Modelo de datos de demostración

Cada producto puede representarse con las siguientes propiedades:

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| `id` | Número o texto | Identificador único del producto. |
| `name` | Texto | Nombre del producto. |
| `category` | Texto | Categoría del catálogo. |
| `description` | Texto | Presentación o descripción breve. |
| `price` | Número | Precio de demostración en pesos colombianos. |
| `emoji` o `image` | Texto | Representación visual del producto. |
| `offer` | Booleano | Indica si aparece en el filtro de ofertas. |

Los datos se mantienen en memoria del navegador durante la sesión. Si se recarga la página, el carrito puede reiniciarse; no existe persistencia en servidor.

## 10. Estructura de archivos recomendada

Para una versión sencilla, se puede utilizar un solo archivo HTML con CSS y JavaScript integrados. Para facilitar el mantenimiento, la estructura recomendada es:

```text
drogueria-vida-sana/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    └── icons/
```

- `index.html`: contenido y estructura.
- `css/styles.css`: estilos, componentes y reglas responsive.
- `js/script.js`: datos de ejemplo y comportamiento interactivo.
- `assets/`: imágenes y recursos visuales propios o con licencia adecuada.

## 11. Seguridad, confianza y responsabilidad

- No solicitar ni almacenar información sensible en el prototipo.
- No pedir datos de tarjetas bancarias.
- No afirmar que el sitio valida fórmulas o inventario.
- No recomendar tratamientos ni prometer resultados médicos.
- Identificar los precios y productos de ejemplo como demostrativos.
- Antes de publicar, revisar las obligaciones legales y sanitarias aplicables a la venta de medicamentos en Colombia.
- Los productos que requieren fórmula deben manejarse conforme a la normativa aplicable y con los controles necesarios en una futura implementación real.

## 12. Criterios de aceptación

El prototipo se considera funcional cuando:

- La página abre en un navegador moderno sin instalación adicional.
- Se visualizan las secciones principales de la droguería.
- La búsqueda filtra productos correctamente.
- Las categorías y el filtro de ofertas funcionan.
- El ordenamiento cambia el orden de los productos.
- Se pueden agregar productos al carrito y modificar cantidades.
- El total se calcula correctamente en pesos colombianos.
- El carrito puede abrirse y cerrarse.
- Se muestra un estado vacío cuando no hay productos o resultados.
- La interfaz se adapta a escritorio y móvil.
- Se informa claramente que los pedidos no son reales.

## 13. Pruebas manuales sugeridas

1. Abrir `index.html` en Chrome, Edge o Firefox.
2. Buscar un producto existente y comprobar los resultados.
3. Buscar un término que no exista y comprobar el mensaje de vacío.
4. Seleccionar cada categoría y verificar los productos.
5. Activar y desactivar el filtro de ofertas.
6. Ordenar por menor y mayor precio.
7. Agregar varios productos al carrito.
8. Aumentar y reducir cantidades y verificar el total.
9. Quitar todos los productos y comprobar el estado vacío.
10. Abrir y cerrar el carrito con el botón, clic en el fondo y tecla Escape.
11. Cambiar el ancho de la ventana para probar el diseño móvil.
12. Navegar con el teclado y verificar que el foco sea visible.

## 14. Evolución futura

Cuando el prototipo visual esté aprobado, las siguientes etapas podrían incluir:

- Separar HTML, CSS y JavaScript en archivos independientes.
- Reemplazar los datos de ejemplo por un catálogo autorizado.
- Añadir imágenes reales y textos revisados.
- Integrar un canal de pedidos real.
- Conectar inventario, usuarios y pedidos mediante servicios seguros.
- Incorporar pagos solo mediante un proveedor adecuado y con controles de seguridad.
- Realizar pruebas de usabilidad con clientes reales.

Estas mejoras futuras requieren servicios y controles que no forman parte del alcance actual de frontend básico.

---

## Resultado esperado

Una página web de droguería moderna, accesible, adaptable y fácil de utilizar, construida exclusivamente con HTML5, CSS3 y JavaScript. La primera entrega funciona como prototipo visual e interactivo, sin backend ni operaciones comerciales reales.
