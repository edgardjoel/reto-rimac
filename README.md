## Configuración de Linting y Formateo

### Durante el Desarrollo

- **ESLint**: Analiza el código en tiempo real para identificar y corregir problemas.
- **Prettier**: Formatea el código automáticamente para mantener un estilo consistente.

**Configuración:**

- **`.prettierrc`**: Define las reglas de formateo de código.
- **`eslint.config.js`**: Configura ESLint y su integración con Prettier.

### Durante el Commit

- **Commitlint**: Verifica que los mensajes de commit sigan un formato específico, facilitando la generación automática de changelogs y la comprensión del historial del proyecto.
- **Husky**: Administra hooks de Git para ejecutar herramientas de linting y formateo antes de cada commit.
- **lint-staged**: Linta y formatea solo los archivos modificados antes de confirmar los cambios.

**Configuración:**

- **`commitlint.config.ts`**: Define las reglas para el formato de los mensajes de commit.
- **`lint-staged.config.js`**: Configura qué archivos deben ser linted y formateados antes del commit.

### Buenas Prácticas Adoptadas

- **Conventional Commits**: Utiliza el estándar de Conventional Commits para asegurar que los mensajes de commit sean claros y estructurados, lo que facilita la colaboración y la generación de changelogs.
- **Reglas de Formateo y Linting**: Aplicadas para mantener un código limpio y consistente, evitando errores comunes y facilitando el mantenimiento del proyecto.

Estas herramientas y prácticas aseguran un desarrollo eficiente y colaborativo, mejorando la calidad del código y facilitando el trabajo en equipo.

-Se esta instalando bootrap para utilizar componentes para formulario
npm install react-bootstrap bootstrap

-Se instalado router dom
npm i react-router-dom

-Se instalo sass, axios

-Se instalo formik y zod
npm install formik zod
