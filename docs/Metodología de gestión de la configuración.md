---
title: Metodología de gestión de la configuración
slug: /metodologia
---
# Metodología de gestión de la configuración v1.5.2

![Logo Universidad de Sevilla](./img/banner.jpg) 

## Miembros del equipo

| Nombre                        |
|-------------------------------|
| Adrián Robles Borrego         | 
| Lucía Ponce García de Sola    | 
| Lidia Ning Fernández Casillas | 
| Javier Luque Ruíz             | 
| Raquel Ortega Almirón         | 
| Borja Vera Casal              | 

## Historial de versiones  

| Versión | Fecha       | Descripción de cambios |
|---------|------------|------------------------|
| 1.0.0   | 10/02/2025 | Versión inicial        |
| 1.1.0   | 10/02/2025 | Estándares de código |
| 1.2.0   | 12/02/2025 | Políticas de versionado |
| 1.3.0   | 13/02/2025 | Definicion de hecho|
| 1.4.0   | 13/02/2025 | Estrategia de ramas|
| 1.5.0   | 13/02/2025 | Políticas de versionado para el proyecto y para documentación|
| 1.5.1   | 13/02/2025 | Cambio de la versión en el título|
| 1.5.2   | 14/02/2025 | Corrección de estrategia de ramas|
| 1.5.3   | 16/02/2025 | Cómo serán manejados los documentos generados durante el desarrollo del proyecto |
| 1.5.4   | 17/02/2025 | Estructura de repositorios y ramas por defecto|

## Índice

1. [Estándares de código](#1-estándares-de-código)
2. [Políticas de mensajes de commit](#2-políticas-de-mensajes-de-commit)
3. [Estructura de repositorios y ramas por defecto](#3-estructura-de-repositorios-y-ramas-por-defecto)
4. [Estrategia de branching](#4-estrategia-de-branching)
   1. [Cómo desarrollar ramas de funcionalidad](#41-cómo-desarrollar-ramas-de-funcionalidad)
   2. [Cómo preparar releases](#42-cómo-preparar-releases)
   3. [Cómo solucionar bugs en producción](#43-cómo-solucionar-bugs-en-producción)
5. [Políticas de versionado](#5-políticas-de-versionado)
6. [Definición de "hecho"](#6-definición-de-hecho)
7. [Cómo serán manejados los documentos generados durante el desarrollo del proyecto](#7-cómo-serán-manejados-los-documentos-generados-durante-el-desarrollo-del-proyecto)

## 1. Estándares de código

Estos estándares asegurarán la consistencia, mantenibilidad y calidad del código.

### Convencion de nombres

- Utilizar nombres descriptivos y significativos.
- Usar camelCase para los nombres de las variables y funciones.
- Usar PascalCase para los nombres de las clases.
- Usar SNAKE_CASE para constantes.

### Formato del código

- Utilizar indentación consistente.
- Incluir espacios detrás de las comas y alrededor de operadores.
- Usar llaves siempre.

### Comentarios

- Usar comentarios cortos explicativos que describan el por qué de la función (y no qué hace la función, eso debe ser intuido por el nombre).
- Evitar el uso de comentarios innecesarios.

### Modularidad del código

- Cada función debe realizar una única tarea (Principio de responsabilidad única).
- Dividir el código en funciones reutilizables de menor tamaño.
- Agrupar las clases relacionadas en un mismo módulo.



## 2. Políticas de mensajes de commit

- Los mensajes deben ser descriptivos.
- Se debe añadir uno de los siguientes tipos: feat (nueva funcionalidad), fix (corrección de error), docs (documentación), refactor (reestructuración de código), test (añadir o correguir pruebas).
- Relacionar los commits con las tareas o incidencias.
- Los asuntos deben ser cortos y precisos
- Commits pequeños y frecuentes, centrados en una sola tarea.
- Un commit no puede dejar el proyecto en un estado inestable.
- El formato debe ser:  
    ```
  <tipo>: <asunto> (<incidencia>)

  <breve descripción>
    ```
  Ejemplo:
  ```
  docs: Política de commits (#1)

  Se añade a la documentación la política de commits para el proyecto 
    ```

## 3. Estructura de repositorios y ramas por defecto

El repostorio se estructura en las siguientes carpetas y archivos principales:

#### <u>Carpetas</u>
- **Docs**: Contiene documentación del proyecto, como el historial  del proyecto, o la metodología de la gestión de la configuración.
- **frontend**: Contiene el código en React correspondiente a la interfaz de usuario de la aplicación.  
- **src**: Contiene el código fuente principal del proyecto, relacionado al backend. Además, contiene archvivos de configuración y tests de las distintas funcionalidades.

#### <u>Archivos</u>
- **README.md**: Documento con información clave del proyecto, junto con la guía de instalación y ejecución.
- **info.yml**: Archivo de configuración en formato YAML que contiene metadatos del proyecto.
- **mvnw y mvnw.md**: Scripts que permiten ejecutar Maven Wrapper.
- **pom.xml**: Archivo Maven que gestiona dependencias, plugins y configuración de despliegue.



Las ramas por defecto del proyecto son: 
- Main (main): Rama estable y lista para producción.
- Develop (develop): Integra características completas antes de su lanzamiento. 
- Ramas de funcionalidad (feature): Se utilizan para desarrollar nuevas funcionalidades.
- Ramas de lanzamiento (release): Preparan una versión para su implementación.
- Ramas de corrección urgente (hotfix/RamaFix): Corrigen errores críticos en producción.

## 4. Estrategia de branching basado en GitFlow
Git Flow es un modelo de branching que organiza el desarrollo a través de ramas estructuradas, las que se han explicado en la sección anterior: main, develop, feature, release y hotfix/RamaFix.

### 4.1. Cómo desarrollar ramas de funcionalidad
1. Crear una rama de funcionalidad(feature) desde develop:

  ```
  git checkout -b feature/myFeature develop
  ```

2. Implementar la funcionalidad y realizar commits siguiendo las normas de mensajes de commit.
3. Se vuelve a develop y se fusiona la rama de funcionalidad(feature)
  ```
  git checkout develop
  git merge --no-ff feature/myFeature
  ```
4. Abrir un Pull Request (PR) para fusionar con la rama develop.
5. Realizar una revisión por pares antes de aprobar la fusión.
6. Resolver conflictos si es necesario y fusionar la rama.
7. Eliminar la rama de características después de la fusión.

### 4.2. Cómo preparar releases
1. Crear una rama de funcionalidad desde develop:

  ```
  git checkout -b release/1.0.0 develop
  ```

2. Probar y estabilizar la versión.
3. Realizar una revisión por pares y resolver los problemas detectados.
4. Fusionar en main y develop.
  ```
  git checkout main
  git merge --no-ff release/1.0.0
  git tag -a 1.0.0
  git checkout develop
  git merge --no-ff release/1.0.0
  ```
5. Eliminar la rama de lanzamiento.

### 4.3. Cómo solucionar bugs en producción
1. Crear una rama de hotfix desde main:

  ```
  git checkout -b hotfix/1.2.1 main
  ```

2. Aplicar la corrección, hacer commit y subir la rama.
3. Abrir un Pull Request y realizar una revisión por pares.
4. Fusionar en main y develop
  ```
  git checkout main
  git merge --no-ff hotfix/1.2.1
  git tag -a 1.2.1
  git checkout develop
  git merge --no-ff hotfix/1.2.1
  ```
5. Eliminar la rama de hotfix.

### 4.4. Proceso de Revisión de Pull Request
- Asignar a un revisor para cada Pull Request.
- Seguir estándares de codificación y políticas de mensajes de commit.
- El revisor debe aprobar antes de fusionar.
- Discutir cambios y solicitar modificaciones si es necesario.
- Fusionar solo después de la aprobación y pruebas exitosas.
- Se pueden asignar dos revisores a una Pull Request, si el desarrollador considera necesario por motivos de complejidad o seguridad.


## 5. Políticas de versionado

### 5.1. Políticas de versionado del proyecto
Estas políticas establecen las normas para el control de versiones de este documento.  

#### Esquema de Versionado
Se utilizará el siguiente formato de versión:  

```text
[Mayor].[Menor].[Revisión]
```

- **Mayor (X.0.0):** Cambios mayores, que provoquen la incompatibilidad con la versión anterior.  
- **Menor (X.Y.0):** Cambios menores, que implementan funcionalidades o mejoras sustanciales.  
- **Revisión (X.Y.Z):** Corrección de errores (bugs).  

### 5.2. Política de versionado de documentos

#### Esquema de Versionado
Se utilizará el siguiente formato de versión:  

```text
[Mayor].[Menor].[Revisión]
```

- **Mayor (X.0.0):** Número del sprint.  
- **Menor (X.Y.0):** Adición, eliminación o reestructuración del contenido.  
- **Revisión (X.Y.Z):** Correcciones ortográficas, de estilo o pequeños ajustes en el contenido.  

#### Registro de cambios 
Cada actualización debe registrarse en la sección **Historial de versiones**, indicando:  
- **Número de versión**  
- **Fecha del cambio**  
- **Descripción breve del cambio**  

Formato de ejemplo en Markdown:  

```markdown
## Historial de versiones  

| Versión | Fecha       | Descripción de cambios |
|---------|------------|------------------------|
| 1.0.0   | 10/02/2024 | Versión inicial        |
| 1.1.0   | 12/02/2024 | Se añadió la sección X |
| 1.1.1   | 13/02/2024 | Corrección ortográfica |
```


## 6. Definición de "hecho"

Para que una tarea o funcionalidad se considere completada en nuestro proyecto, debe cumplir con los siguientes criterios:

### 1. Documentación
- La documentación debe estar bien estructurada y organizada.
- No debe contener faltas de ortografía ni errores gramaticales.
- Debe ser clara y comprensible para cualquier miembro del equipo.

### 2. Código
- La persona asignada a la issue debe comprobar que el código está completo y sin errores.
- Otro miembro del equipo debe revisar el código para verificar su calidad y funcionamiento.
- Todo el código debe seguir las buenas prácticas de desarrollo establecidas en el proyecto.

### 3. Pruebas
- El código debe pasar correctamente todos los tests automatizados y manuales requeridos.

### 4. Integración y Revisión
- La funcionalidad debe estar integrada en la rama principal del proyecto (`develop`).
- No debe haber conflictos con otras partes del código.


## 7. Cómo serán manejados los documentos generados durante el desarrollo del proyecto

Para garantizar un adecuado seguimiento y documentación del proyecto, se establecerán las siguientes pautas para la gestión de los documentos generados:

  **Actas de Reunión**

  - Durante cada reunión, se designará a una persona responsable de registrar los temas tratados, las decisiones adoptadas, los problemas identificados y los aspectos positivos destacados.
  - No será necesario transcribir la conversación de manera literal, pero sí recoger los puntos clave que permitan un adecuado seguimiento del proyecto, tales como decisiones tomadas, propuestas por parte de los miembros del equipo, problemas afrontados, etc.
  - Las actas deberán ser subidas al repositorio antes de la siguiente reunión, asegurando que la documentación se mantenga actualizada y accesible para todos los miembros del equipo.
  
  **Informes Técnicos y Documentación del Proyecto**

  - Cualquier modificación en el plan de proyecto, en los informes técnicos, en la estrategia del proyecto o en documentos existentes deberá reflejarse en la documentación correspondiente lo más pronto posible.
  - Se buscará mantener siempre una versión actualizada y consistente, lo que facilitará el seguimiento del proyecto, la mantenibilidad de la documentación y la resolución de posibles conflictos estratégicos.
  - Las actualizaciones deberán registrarse en el repositorio con un control de versiones adecuado, permitiendo la trazabilidad de los cambios y asegurando la alineación de la documentación con la evolución del proyecto.
    
Todas estas medidas permitirán optimizar la gestión documental, garantizando un acceso eficiente a la información relevante y facilitando la toma de decisiones informadas a lo largo del desarrollo del proyecto, dejando consistencia sobre ella continuamente dentro del repositorio.
