# Helpme Text - Guía para el Proyecto `UniversiTurno`

## Introducción

El proyecto **`unlp-fi-tyh`** es una aplicación web desarrollada con **Vue 3 y Vite**, pensada para gestionar turnos y reservas en un entorno universitario. Se estructura en diferentes vistas y componentes reutilizables, lo que permite mantener una interfaz modular y escalable.

## Arquitectura del Sistema

El sistema está basado en una arquitectura **SPA (Single Page Application)** utilizando Vue Router para la navegación entre páginas. Las vistas están organizadas en la carpeta `src/views/`, mientras que los componentes reutilizables se encuentran en `src/components/`.

---

## Principales Vistas (`src/views/`)

Las vistas representan las pantallas de la aplicación y están vinculadas mediante **Vue Router**:

- **`HomeView.vue`**: Página principal de la app, con branding y un formulario inicial para interactuar con el sistema.
- **`ScheduleView.vue`**: Muestra la programación de turnos, integrando el componente `Schedule.vue` y un menú de navegación lateral (`navComponent.vue`).
- **`FieldsView.vue`**: Maneja la visualización y gestión de espacios o recursos disponibles.
- **`PeopleView.vue`**: Pantalla de administración de usuarios o registros relacionados con las reservas.
- **`SettingsView.vue`**: Página para la configuración del sistema.

---

## Componentes Clave (`src/components/`)

El sistema se basa en varios componentes reutilizables para manejar diferentes aspectos de la interfaz:

- **`Schedule.vue`**: Componente central de la planificación, mostrando las reservas en una estructura visual clara.
- **`PeopleTable.vue`**: Una tabla interactiva para mostrar y gestionar personas en el sistema.
- **`ModalBooking.vue`**: Un modal que permite realizar y gestionar reservas.
- **`Railnav.vue` y `Sidenav.vue`**: Componentes de navegación que estructuran el acceso a diferentes secciones.
- **`navComponent.vue`**: Un menú de navegación presente en varias vistas.

---

## Navegación y Rutas

La navegación entre páginas está definida en **`src/router/index.js`**, donde se especifican las rutas principales:

```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('../views/ScheduleView.vue'),
    },
    {
      path: '/fields',
      name: 'Fields',
      component: () => import('../views/FieldsView.vue'),
    },
    {
      path: '/people',
      name: 'People',
      component: () => import('../views/PeopleView.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
});
```

Esto permite que la aplicación funcione como una SPA con transiciones fluidas entre secciones.

---

## Cómo Funciona el Sistema

1. **Inicio**: El usuario accede a la **`HomeView.vue`**, donde se encuentra con una interfaz clara con branding y accesos rápidos.
2. **Gestión de turnos**: En **`ScheduleView.vue`**, el usuario puede ver la disponibilidad de turnos y gestionar reservas utilizando `Schedule.vue`.
3. **Administración de personas**: La vista **`PeopleView.vue`** permite gestionar datos de usuarios a través del componente `PeopleTable.vue`.
4. **Configuraciones**: En **`SettingsView.vue`**, se pueden modificar ajustes del sistema.

---

## Instalación y Ejecución

Para correr el proyecto localmente, seguir estos pasos:

```sh
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo con hot-reload
npm run dev

# Construir para producción
npm run build

# Linter para revisar código
npm run lint
```

---

## Conclusión

Este sistema está pensado para ser modular y escalable, con una clara separación entre vistas y componentes. Se utiliza **Vue Router** para la navegación y los componentes están organizados para maximizar la reutilización y mantenibilidad.
