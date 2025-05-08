---
title: Sprint Review
slug: /sprint3/review
sidebar_position: 2
---

# Sprint Review

![Logo Universidad de Sevilla](../img/banner.jpg) 

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
| 1.0.0   | 30/04/2025 | Versión inicial        |


## Índice
1. [Introducción](#1-introducción)
2. [Contenido](#2-contenido)
3. [Conclusiones](#3-conclusiones)

## 1. Introducción

El presente informe tiene como objetivo recopilar los avances correspondientes al Sprint 3, los cuales estaban previstos para ser presentados el pasado lunes 28 de abril en la Sprint Review con el Product Owner. Sin embargo, debido a un apagón de electricidad a nivel nacional ocurrido alrededor de las 12:30 del mediodía de ese mismo día, y la posterior cancelación de todas las actividades universitarias a través de un correo electrónico enviado por el rector, la reunión programada para el turno de tarde no pudo llevarse a cabo.

Ante esta situación imprevista, este documento detalla las funcionalidades desarrolladas durante el sprint, así como los objetivos alcanzados, con el fin de dejar constancia del trabajo realizado y proporcionar una base informativa para futuras revisiones y la planificación del próximo sprint. Debido a la imposibilidad de realizar la reunión, el presente informe tendrá una estructura diferente a la de los documentos correspondientes a otros sprints, ya que no incluye la retroalimentación directa del Product Owner ni los comentarios surgidos en la reunión.

## 2. Contenido

A continuación, se presenta una tabla con el estado del proyecto en el momento de la reunión:

| Funcionalidad                         | Estado      | Comentarios                          |
|---------------------------------------|-------------|--------------------------------------|
| A3.2 Acuerdo de Cliente (CA)          | ✅ Completado  | Todas las subtareas finalizadas a excepción de la subtarea *precios*, ya que se tenía pensado cambiar el estilo de la tabla que mostraba los diferentes planes de precios, así como modificar el nivel de soporte ofrecido en cada plan. Esto fue debido a que el actual estaba demasiado alejado de la realidad dentro del contexto del proyecto educativo. |
| A3.3 Pricing4SaaS Frontend            | 🔄 En progreso | Estaba casi completado, sin embargo, era necesario tener la parte de backend para terminarla. |
| A3.3 Pricing4SaaS Backend             | 🔄 En progreso | Estaba todo implementado, sin embargo, había que corregir algunos fallos e inconsistencias que quedaban dentro de la lógica de negocio del proyecto que impedían implementar correctamente el Pricing4SaaS. Entrando en detalle, nuestro proyecto estaba modelado de manera que los Pet Owners pudieran cambiar de plan, lo que no era correcto debido a que los Clinic Owners, al ser los clientes, son los únicos que tendrían que poder hacerlo. |
| A3.4 APIs                             | ✅ Completado  | Ambas APIs implementadas correctamente. Se integraron las APIs PetFinder y DogAPI, ambas disponibles y accesibles desde la interfaz. Por un lado PetFinder permite acceder a información sobre animales en adopción, pudiendo aplicar diferentes filtros. Por otro lado, DogAPI proporciona información sobre más de 340 razas de perros, 20 grupos de razas y datos curiosos. |
| A3.5 Release y Despliegue             | ⏳ Pendiente  | Al no tener algunas funcionalidades implementadas ni funcionando correctamente al 100%, el equipo decidió posponer el despliegue para así desplegar solo contenido totalmente funcional. |
| A3.6 Actuar como clientes             | ✅ Completado  |Todos los miembros del grupo reportaron una incidencia y solicitud de servicio al grupo  indicado por el profesorado. |
| A3.7 Gestión del servicio de asistencia de Petclinic | ✅ Completado | Todos los miembros del grupo resolvieron incidentes y solicitudes de servicio reportados por clientes en el portal de iTop correctamente. |
| A3.8 Monitorización del Acuerdo de Cliente de PetClinic Services | 🔄 En progreso | Algunos de los miembros del grupo añadieron información sobre cómo habían llevado a cabo el trabajo para supervisar el CA, sin embargo, todavía faltaba información por añadir de otros miembros. |
| A3.9 Gestión de la demanda y capacidad| ⏳ Pendiente | Ninguna de las subtareas había sido comenzada por el momento. |
| A3.10.1 Trabajo en equipo             | ⏳ Pendiente | No había sido comenzada por el momento. |
| A3.10.2 Sprint Planning               | ✅ Completado  | Completada correctamente. |
| A3.10.3 Sprint Review                 | ⏳ Pendiente  | Esta subtarea no había sido comenzada debido a que el documento no puede ser realizado hasta el momento después de llevarse a cabo la respectiva reunión con el Product Owner. |
| A3.10.4 Sprint Retrospective          | ⏳ Pendiente  | Se había realizado la plantilla del documento, sin embargo, ningún contenido había sido añadido debido a que este mismo no puede ser completado hasta el final del sprint. |
| A3.10.5 Informes Clockify             | ⏳ Pendiente  | Esta subtarea no había sido comenzada debido a que los documentos a añadir contienen información de tiempo de trabajo que no podemos obtener al completo hasta el final del sprint. |
| A3.10.6 Actas de reunión             | 🔄 En progreso  | El documento como tal no había sido comenzado, sin embargo, el miembro responsable de este mismo, en cada reunión redactó el acta de lo sucedido en cada una de las reuniones llevadas a cabo, con la aportación de cada miembro del grupo en ella y los datos necesarios. |
| A3.10.7 Análisis Niko Niko           | 🔄 En progreso  | El análisis del calendario Niko Niko no había sido comenzado ya que dicho documento no se puede realizar hasta que el sprint se de por finalizado y se tengan todos los emoticonos de todas las semanas del sprint por cada uno de los miembros del grupo, los cuales se estaban añadiendo cada día de trabajo. |

## 3. Conclusiones

A pesar de la imposibilidad de realizar la Sprint Review de manera presencial debido al corte eléctrico y la cancelación de las actividades universitarias, el equipo logró avanzar significativamente en el desarrollo de las tareas correspondientes al Sprint 3. Se completaron funcionalidades clave como el Acuerdo de Cliente, la integración de APIs externas (Petfinder y DogAPI), la gestión del servicio de asistencia y la simulación del rol de cliente. Otras tareas, aunque en progreso, presentan un alto nivel de desarrollo y requieren ajustes puntuales, principalmente relacionados con la lógica de negocio y la dependencia entre frontend y backend.

Asimismo, varias subtareas vinculadas a documentación, análisis y planificación están pendientes, ya que dependen del cierre oficial del sprint o de la disponibilidad completa de datos. El equipo ha mostrado organización y compromiso, posponiendo estratégicamente ciertas entregas para asegurar la calidad del producto final. Este informe, por tanto, deja constancia de los avances alcanzados y servirá como referencia para retomar el trabajo en el próximo sprint de forma estructurada y eficiente.



