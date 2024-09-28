## Configuración de Linting y Formateo

### Durante el Desarrollo

- **ESLint**: Analiza el código en tiempo real para identificar y corregir problemas, mejorando la calidad y la legibilidad.
- **Prettier**: Formatea el código automáticamente, asegurando un estilo consistente a lo largo del proyecto.

**Configuración:**

- **`.prettierrc`**: Archivo de configuración que define las reglas de formateo de código.
- **`eslint.config.js`**: Configura ESLint y su integración con Prettier para un análisis de código óptimo.

### Durante el Commit

- **Commitlint**: Verifica que los mensajes de commit sigan un formato específico, facilitando la generación automática de changelogs y mejorando la comprensión del historial del proyecto.
- **Husky**: Administra hooks de Git para ejecutar herramientas de linting y formateo antes de cada commit, asegurando la calidad del código.
- **lint-staged**: Linta y formatea únicamente los archivos modificados antes de confirmar los cambios, optimizando el proceso de commit.

**Configuración:**

- **`commitlint.config.ts`**: Define las reglas para el formato de los mensajes de commit.
- **`lint-staged.config.js`**: Configura qué archivos deben ser linted y formateados antes del commit.

### Buenas Prácticas Adoptadas

- **Conventional Commits**: Se utiliza el estándar de Conventional Commits para asegurar que los mensajes de commit sean claros y estructurados, facilitando la colaboración y la generación de changelogs.
- **Reglas de Formateo y Linting**: Aplicadas para mantener un código limpio y consistente, evitando errores comunes y facilitando el mantenimiento del proyecto.
- **Arquitectura de Componentes**: Se ha implementado una arquitectura de componentes que promueve la **reutilización de componentes** y facilita el desarrollo.
- **Atomic Design**: Se aplica este método de diseño para estructurar componentes de manera jerárquica y coherente.
- **Rutas Absolutas**: Se han establecido rutas absolutas para mejorar la organización y la visión del proyecto.
- **Patrones de Diseño**: Se han utilizado patrones de diseño como **Adapter**, **Singleton**, y **Observable**.
  - El patrón **Adapter** se utiliza para transformar datos de un formato a otro, facilitando la integración entre diferentes partes del sistema.
  - El patrón **Singleton** se ha implementado en el uso del Context API para asegurar que haya una única instancia del contexto compartido en la aplicación.
  - El **Context API** actúa también como un **Observable**, permitiendo que los componentes se suscriban a cambios de estado y se actualicen automáticamente cuando se producen cambios, facilitando la comunicación entre componentes y optimizando la gestión del estado en la aplicación.

### Instalación de Dependencias

- **Bootstrap**: Se instala Bootstrap para utilizar componentes de formulario:

  ```bash
  npm install react-bootstrap bootstrap
  ```

- **React Router DOM**: Instalación del enrutador para la navegación:

  ```bash
  npm install react-router-dom

  ```

- **Sass y Axios**: Instalación de Sass para estilos y Axios para realizar solicitudes HTTP:

  ```bash
  npm install sass axios
  ```

- **Formik y Zod**: Se utilizan para la gestión de formularios y validaciones:

  ```bash
  npm install formik zod

  ```

### Configuración de Pruebas

Para establecer pruebas en el proyecto, se utiliza el siguiente instalador:

```bash
  npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-transform-vite-meta-env @testing-library/react
  npm install --save-dev whatwg-fetch jest-environment-jsdom
  npm install --save-dev identity-obj-proxy

```

- **Nota**: El paquete identity-obj-proxy permite que Jest haga un "mock" de los módulos de CSS, asignando un objeto vacío o una identidad para los nombres de clase, sin procesar el contenido del archivo de estilo.
