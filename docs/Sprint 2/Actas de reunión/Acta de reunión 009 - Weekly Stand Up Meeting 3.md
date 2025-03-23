---
title: Weekly Stand-Up Meeting 3
slug: /sprint2/reunion4
---

# Acta de reunión: Weekly Stand Up Meeting 3

- **Fecha y hora:** 17/03/2025 - 15:30-15:45
- **Lugar:** Aula A0.30

## Asistentes

| Nombre                        | Correo                    | Presente/Ausente |
|-------------------------------|---------------------------|------------------|
| Lidia Ning Fernández Casillas | lidiaestudios14@gmail.com | ✅ Presente     |
| Javier Luque Ruiz             | javluqrui@alum.us.es      | ✅ Presente     |
| Raquel Ortega Almirón         | raqortalm@alum.us.es      | ✅ Presente     |
| Lucía Ponce García de Sola    | lucpongar@alum.us.es      | ✅ Presente     |
| Adrián Robles Borrego         | adrrobbor@alum.us.es      | ✅ Presente     |
| Borja Vera Casal              | borvercas@alum.us.es      | ✅ Presente     |

## Orden del día

1. Avance general de las tareas

## Desarrollo de la reunión

Raquel terminó el backend de Reservas y Lidia su respectivo frontend. Javier realizó los test del servicio de reservas y avanzó con la documentación de métricas del Sprint 1.

Se resolvieron varias incidencias:
| ID       | Descripción                                                                                         | Miembro que la resolvió |
|----------|-----------------------------------------------------------------------------------------------------|-------------------------|
| I-000311 | Cambiar de plan utilizando la página de planes                                                      | Adrián                  |
| I-000149 | Cambiar colores de botones de la página de mascotas                                                 | Javier                  |
| I-000290 | Borrado de usuarios como admin y desencriptado de contraseñas en la edición                         | Javier                  |
| I-000127 | Cambiar el título de la página de inicio                                                            | Lucía                   |
| I-000428 | Crear una restricción para que los clinic owners solo puedan crear una habitación para sus clínicas | Raquel                  |

Surgió un problema en relación a las incidencias, puesto que en el documento de Metodología y gestión de la configuración no se explicaba correctamente el proceso para realizar hotfixes. Las incidencias se resolvieron en ramas nombradas como hotfix/incidencia, pasaban por el proceso de revisión y posteriormente se mergeaban con main y develop.

## Acuerdos y decisiones

- Durante la sesión de prácticas se revisarán algunas tareas y se seguirán resolviendo incidencias.
- A partir de esta reunión las ramas hotfix/incidencia sólo se mergearán a develop y, al momento de realizar la release, se aplicarán a main.

## Próxima reunión

- **Fecha y hora sugerida:** 23/03/2025 - 20:00
- **Lugar sugerido:** Discord
- **Asunto(s) a tratar:** 
    - Despliegue de nueva release