---
title: Análisis de la capacidad y el riesgo
slug: /sprint3/analisis-capacidad-riesgo
---

# Análisis de la capacidad y el riesgo de Petclinic Services (PSG2-2425-G3-53)

![Logo Universidad de Sevilla](../img/banner.jpg)

## Historial de versiones  

| Versión | Fecha       | Descripción de cambios |
|---------|------------|------------------------|
| 1.0.0   | 29/03/2025 | Versión inicial. Estimación de la demanda de recursoshumanos y materiales |
| 2.0.0   | 30/03/2025 | Demanda de servicio |
| 3.0.0   | 30/03/2025 | Versión final. TCO |

## Índice

1. [Introducción](#1-introducción)
2. [Estimación de la demanda](#2-estimación-de-la-demanda)
   - [Demanda de Recursos Humanos](#21-demanda-de-recursos-humanos)
   - [Demanda de Recursos Materiales](#22-demanda-de-recursos-materiales)
3. [Apis Externas utilizadas](#3-apis-externas-utilizadas)
   - [🐶 Dog API](#31-🐶-dog-api)
   - [🐾 Petfinder API](#32-🐾-petfinder-api)
4. [Estimación de demanda mensual de las APIs](#4-estimación-de-demanda-mensual-de-las-apis)
   - [Tasas y cuotas mensuales](#41-tasas-y-cuotas-mensuales)
   - [Ecosistema DevOps y soporte](#42-ecosistema-devops-y-soporte)
   - [Riesgo de interrupciones por agotamiento de cuotas](#43-riesgo-de-interrupciones-por-agotamiento-de-cuotas)
   - [Resumen mensual de demanda (cuotas)](#44-resumen-mensual-de-demanda-cuotas)
5. [TCO](#5-tco)
   - [OpEx](#51-opex)
   - [CapEx](#52-capex)
   - [Estimación de Costos (TCO)](#53-estimación-de-costos-tco)
   - [Analisis de riesgos](#55-análisis-de-riesgos-de-operacion-y-mantenimiento)


## 1. Introducción

El presente informe técnico se elabora en el marco del proyecto PSG2-2425-G5-53, y se enfoca en la gestión de la demanda y la capacidad del SaaS PetClinic. El objetivo principal de este documento es analizar y estimar la capacidad necesaria para el servicio PetClinic y su servicio de soporte asociado, identificar los riesgos potenciales relacionados con la capacidad y las dependencias externas, y estimar el Coste Total de Propiedad (TCO).

## 2. Estimación de la demanda

Este apartado presenta una estimación de la demanda tanto del servicio de soporte humano como de los recursos materiales necesarios para operar PetClinic, considerando las condiciones y el ecosistema definidos para el proyecto PSG2-2425-G5-53 durante un período de 24 meses.

La demanda del servicio de soporte se estima en función del volumen esperado de interacciones con los usuarios, principalmente a través de incidentes y solicitudes, y se ve fuertemente condicionada por los Acuerdos de Nivel de Servicio (SLA) definidos para los distintos planes de usuario.

Consideramos los siguientes datos:

* Duración del Contrato: 24 meses.

* Usuarios Activos: 10.000 usuarios Basic, 5.000 usuarios Gold y 3.000  usuarios Platinum.

* Promedio Mensual de Interacciones: 120 incidentes y 100 solicitudes.

* Ecosistema DevOps de Soporte: Se considera el soporte dentro del ecosistema de desarrollo y operación descrito, asumiendo el uso de planes no gratuitos para los servicios dependientes.   

La demanda total esperada asciende a un promedio de `120 incidentes/mes+100 solicitudes/mes=220 tickets mensuales`. En 24 meses, esto suma un total estimado de `220 tickets/mes×24 meses=5.280 tickets`.

Basándonos en la distribución de incidencias y peticiones de servicios que se han recibido, y mapeando la urgencia de las solicitudes a la prioridad de los incidentes, tenemos la siguiente estimación del volumen mensual de tickets por categoría y nivel de usuario:

- **Usuarios Gold (5000 usuarios - 62,5% de G+P ):**
    
    * Prioridad Baja: 74 tickets/mes (27 solicitudes + 47 incidencias)
    * Prioridad Media: 11 tickets/mes (9 solicitudes + 2 incidencias)
    * Prioridad Alta: 53 tickets/mes (27 solicitudes + 26 incidencias)

- **Usuarios Platinum (3000 usuarios - 37,5% de G+P):**

    * Prioridad Baja: 44 tickets/mes (16 solicitudes + 28 incidencias)
    * Prioridad Media: 6 tickets/mes (5 solicitudes + 1 incidencia)
    * Prioridad Alta: 31 tickets/mes (16 solicitudes + 15 incidencias)

### 2.1 Demanda de Recursos Humanos

El dimensionamiento del equipo de soporte está impulsado por la necesidad de cumplir con los objetivos de TTR y TTO  definidos en el Customer Agreement para los usuarios Gold y Platinum, así como la necesidad de asegurar la cobertura durante los horarios de soporte comprometidos.

Para dimensionar el equipo, necesitamos estimar la carga de trabajo que representa cada ticket en términos del tiempo activo que un técnico dedica a él. Realizamos suposiciones razonables sobre el AHT (Average Handling Time) basándonos en la prioridad:

* Tickets P1 (Alta): Asumimos un AHT de 4 horas. Requieren atención rápida y experta.

* Tickets P2 (Media): Asumimos un AHT de 2 horas. Complejidad moderada.
* Tickets P3 (Baja): Asumimos un AHT de 1 horas. Problemas o solicitudes sencillas.

Calculamos la carga de trabajo mensual total en "horas de técnico" requeridas para atender el volumen de tickets de Gold y Platinum:

* **Carga de trabajo mensual - Gold:**

    * P1: 53 tickets * 4 horas/ticket = 212 horas

    * P2: 11 tickets * 2 horas/ticket = 22 horas

    * P3: 74 tickets * 1 hora/ticket = 74 horas

    * Total carga Gold: 212 + 22 + 24 = **308 horas/mes**

* **Carga de trabajo mensual - Platinum:**

    * P1: 31 tickets * 4 horas/ticket = 124 horas

    * P2: 6 tickets * 2 horas/ticket = 12 horas

    * P3: 44 tickets * 1 hora/ticket = 44 horas
    
    * Total carga Gold: 212 + 22 + 24 = **180 horas/mes**

**Carga de trabajo mensual total (Gold + Plainum): 308 + 180 = 488 horas/mes** de trabajo activo de técnico.

A continuación, la convertimos a equivalentes a tiempo completo, FTE (Full-Time Equivalent), considerando la capacidad productiva de un técnico. Si asumimos que un técnico productivo dedica aproximadamente 160 horas al mes a trabajar en tickets: 

* **FTEs basados en Carga de trabajo:** 488 horas/mes / 160 horas/FTE ≈ **3.05 FTEs**.

Sin embargo, este cálculo solo considera el volumen de trabajo. La necesidad de cumplir con los TTO y TTR y asegurar la disponibilidad del servicio incrementa el número de personal necesario más allá de la simple carga de trabajo. Para asegurar que las incidencias y solicitudes de servicio se asignen y resuelvan a tiempo, debe haber personal disponible y con las habilidades necesarias en el momento en que llega el ticket, lo que requiere una cobertura continua y suficiente personal en cada turno.

Para estimar el número total de técnicos, debemos combinar la carga de trabajo con los requisitos de disponibilidad de servicio.

Una estimación realista del número de técnicos necesarios para garantizar el cumplimiento de los SLA y la cobertura podría estar entre 4 y 6 técnicos a tiempo completo, dependiendo de cómo se estructuren los turnos, los niveles de habilidad del personal, y la asunción de picos de demanda por encima del promedio. Un equipo de 6 personas, como el tamaño actual del proyecto, podría ser un punto de partida.

Las solicitudes e incidentes de los usuarios Basic serán gestionados con la capacidad excedente disponible, sin SLA garantizados, lo que podría resultar en tiempos de respuesta y resolución más largos para este grupo si la carga de Gold y Platinum es alta.

### 2.2 Demanda de Recursos Materiales

Para proyectar la demanda total de recursos materiales (CPU, memoria, capacidad de base de datos, ancho de banda, etc.), seguimos un proceso que combina el conocimiento de la base de usuarios y el consumo de recursos por operación:

1. **Análisis de la frecuencia de Uso de las APIs por Usuario y Nivel:**

    Los datos de registro de llamadas a la API proporcionan una muestra real de cuántas veces se llamó a cada API por parte de usuarios de cada nivel en un período de tiempo específico (en este caso, un día). Analizando este registro, podemos obtener una frecuencia de uso observada por API y por nivel de usuario durante ese día:

    - `/api/v1/pets` (GET, BASIC): 1 llamada

    - `/api/v1/pets/{id}` (GET, BASIC): 2 llamadas

    - `/api/v1/pets/types` (GET, BASIC): 3 llamadas

    - `/api/v1/pets/{id}` (POST, BASIC): 3 llamadas (URI `/api/v1/pets/1` con método POST y Identifier `/api/v1/pets/_POST_BASIC`)

    - `/api/v1/pets/{id}` (DELETE, GOLD): 2 llamadas (URI `/api/v1/pets/{id}` con método DELETE y Identifier `/api/v1/pets/{id}_DELETE_GOLD`)

    - `/api/v1/vets/vademe/vaccum/illnesses` (GET, GOLD): 1 llamada

    - `/api/v1/vets` (GET, GOLD): 1 llamada

    - `/api/v1/pets/{id}` (POST, GOLD): 2 llamadas (URI `/api/v1/pets/1` con método POST y Identifier `/api/v1/pets/_POST_GOLD`)

    - `/api/v1/pets/{id}` (DELETE, PLATINUM): 1 llamada (URI `/api/v1/pets/{id}` con método DELETE y Identifier `/api/v1/pets/{id}_DELETE_PLATINUM`)

    - `/api/v1/pets/{id}` (GET, PLATINUM): 3 llamadas

    - `/api/v1/pets/types` (GET, PLATINUM): 5 llamadas

    - `/api/v1/vets/vademe/vaccum/illnesses` (GET, PLATINUM): 2 llamadas

    - `/api/v1/consultations/pets/GET_PLATINUM` (GET, PLATINUM): 2 llamadas (Identifier `/api/v1/consultations/_GET_PLATINUM_TICKETS_G`)

    - `/api/v1/consultations/pets/_POST_PLATINUM` (POST, PLATINUM): 3 llamadas (Identifier `/api/v1/consultations/_POST_PLATINUM_TICKETS_G`)

    - `/api/v1/visit/api/v1/pets/{id}/visits` (POST, PLATINUM): 2 llamadas (Identifier `/api/v1/visit/_POST_PLATINUM_TICKETS_P`)

2. **Proyección de la Carga Total del Sistema:**

    Se calcularía el consumo total de CPU y memoria por cada API y nivel de usuario multiplicando el consumo promedio por llamada por el número total esperado de llamadas a esa API por parte de todos los usuarios de ese nivel en un mes **frecuencia observada diaria * número de días en un mes * número de usuarios por nivel / número de usuarios que generaron el log**.

    Sumando el consumo de todas las APIs y niveles, se obtiene la carga total mensual proyectada de CPU y memoria que la infraestructura debe soportar.

3. **Determinación de la Infraestructura Necesaria (Refinada por SLA de Rendimiento y Disponibilidad):**

    Con las estimaciones de carga total más precisas (CPU, Memoria) y considerando los requisitos de rendimiento y disponibilidad (SLA), podemos dimensionar la infraestructura material

    * Los SLA de TRT (500 ms para Gold, 300 ms para Platinum) requieren que la infraestructura pueda procesar las solicitudes dentro de esos tiempos. La estimación debe asegurar que la infraestructura dimensionada permita cumplir estos TRT bajo la carga máxima esperada.

    * Los SLA de disponibilidad (99.5% y 99.9%) demandan múltiples instancias de servidores de aplicación y base de datos, balanceadores de carga, etc., lo que incrementa la cantidad de recursos materiales necesarios.

4. **Recursos del Ecosistema DevOps:**

    Además de la infraestructura de la aplicación principal, se deben estimar los recursos materiales para otros componentes del ecosistema DevOps (base de datos, monitorización, CI/CD) operando con planes no gratuitos.

Para realizar la estimación de la demanda de recursos materiales, primero es necesario calcular la frecuencia de uso de las APIs por nivel de usuario. Al combinar esta frecuencia con los datos de rendimiento por operación y el número total de usuarios, se puede proyectar una carga total más precisa de CPU y memoria. 

Esta carga, junto con los SLA de disponibilidad y TRT para usuarios Gold y Platinum, determinará la cantidad y el tipo de infraestructura necesaria (servidores, base de datos, red), requiriendo probablemente redundancia y componentes de alto rendimiento.

## 3. Apis Externas utilizadas

| Duración del contrato | 24 meses      |
|---------|------------|
| Usuarios activos   | Básico: 10 000 Gold: 5 000 | Platinum: 3 000 |
| Incidentes promedio mensuales  | 120 |
| Solicitudes de servicio mensuales   | 100 |
| Total de usuarios activos  | 18 000 |

### 3.1 🐶 Dog API
Uso: Mostrar razas de perros, datos y curiosidades.

Límite: 60 peticiones por minuto por cliente.

Restricción importante: Solo uso personal/no comercial.

### 3.2 🐾 Petfinder API
Uso: Mostrar mascotas disponibles, buscar refugios u organizaciones asociadas.

Límite: 1000 llamadas por día y 50 peticiones por minuto.

Acceso: Requiere autenticación (OAuth2).

## 4. Estimación de demanda mensual de las APIs

Dog API: Cada usuario accede 1 vez por semana → 4 llamadas al mes.

Petfinder API: Cada usuario consulta 2 veces al mes.

| API | Cálculo mensual | Llamadas mensuales estimadas |
|---------|------------|--------|
|Dog API | 18,000 usuarios × 4 llamadas | 72,000 |
|Petfinder API | 18,000 usuarios × 2 llamadas | 36,000 |

### 4.1. Tasas y cuotas mensuales

|API | Límite actual        | Demanda estimada | ¿Se excede?     | Acción requerida
|---------|----------------------|--------|-----------------|---|
|Dog API | 60/min (~86,400/día) | ~2,400/día | Riesgo moderado | Contactar para clave comercial
|Petfinder API | 1000/día             | ~1,200/día | Si              | Contactar para ampliar límites

### 4.2. Ecosistema DevOps y soporte

Gestión de eventos de monitoreo y logs (por incidentes/solicitudes):

(120 + 100) × 5 logs/evento = 1,100 eventos/mes

### 4.3. Riesgo de interrupciones por agotamiento de cuotas

|API | Riesgo de interrupción | Causa                                                | Consecuencias para Petclinic |
|---------|------------------------|------------------------------------------------------|---|
Dog API | Medio-Alto             | Límite de 60 peticiones por minuto, uso no comercial | Fallos al cargar datos de razas
Petfinder API | Alto                   | Límite de 1000 peticiones al día                     | Carga lenta o pérdida de información externa para adoptar mascotas

### 4.4. Resumen mensual de demanda (cuotas)

|API | Llamadas/mes | Límite estimado |
|---------|------------|-----------------|
|Dog API | 72,000 | ~86,400/día     |
|Petfinder API | 36,000 | 30,000/mes      |

## 5. TCO

### 5.1. OpEx
Distribución mensual de tickets (Gold + Platinum):

| Plan / Prioridad | Baja (P3) | Media (P2) | Alta (P1) | Total tickets | Horas/mes |
|------------------|-----------|------------|-----------|---------------|-----------|
| Gold             | 74        | 11         | 53        | 138           | 308       |
| Platinum         | 44        | 6          | 31        | 81            | 180       |
| **Total**        | 118       | 17         | 84        | 219           | **488**   |

- **FTEs sin buffer** = 488 h ÷ 160 h/FTE ≈ **3,05 FTE**

Aquí partimos de que el equipo de soporte acumula 488 horas de trabajo al mes. Un FTE (“Full-Time Equivalent”) estándar se asume en 160 horas de trabajo productivo al mes (aproximadamente 40 h/semana × 4 semanas). Dividiendo las 488 h entre 160 h/FTE obtenemos 3,05, es decir, necesitas el equivalente a 3,05 personas a tiempo completo para cubrir la carga de 488 h.

- **Buffer pico (20%)** → 3,05 × 1,20 ≈ **3,66 FTE**  

Los picos de demanda requieren tener un margen de seguridad (como del 20%). Añadimos el 20% adicional sobre los 3,05 FTE para asegurarnos de poder absorber esos picos sin colapsar el servicio.

- **FTE recomendado**: **4 técnicos** mínimos.

 Esto es porque ambos calculos superan el numero 3 de tecnicos, y 4 son justos para ambas situaciones.

 ### 5.2. CapEx

Suponemos los siguientes datos de la infraestructura SaaS:

| Recurso        | Demanda diaria      | Capacidad unitaria        | Instancias mínimas | Con redundancia (20%) |
|----------------|---------------------|---------------------------|--------------------|-----------------------|
| CPU/RAM        | 10 000 transac./día | 1 000 transac./inst/día   | 10                 | 12                    |
| Storage        | 500 GB/mes          | 50 GB/instancia           | 10                 | 12                    |
| Ancho de banda | 2 TB/mes            | 0,2 TB/instancia          | 10                 | 12                    |

## 5.3. Estimación de Costos (TCO)
**Supuestos semestrales de variación:**
- APIs externas, servicios: ±2%–10%
- Salarios: ±0,5%–3%

| Elemento                         | Costo Base | Variación | Costo Ajustado Anual | Notas                    |
|----------------------------------|------------|-----------|----------------------|--------------------------|
| **Soporte Humano**               |            |           |                      |                          |
| - 4 FTE                          | €200 000   | +1,5%     | €203 000             | Incluye formación y rotación |
| - Infraestructura interna        | €20 000    | +5%       | €21 000              | Licencias, hardware       |
| - Herramientas y APIs            | €15 000    | +3%       | €15 450              | Planes no gratuitos      |
| **PetClinic SaaS**               |            |           |                      |                          |
| - Infraestructura Cloud (12 inst)| €50 000    | +4%       | €52 000              | Compute, storage, red    |
| - APIs y servicios terceros      | €30 000    | +6%       | €31 800              |                          |
| - Operación y Mantenimiento (O&M)| €25 000    | +2%       | €25 500              | Soporte de actualizaciones|
| **TCO Anual Total**              |            |           | **€348 750**         |                          |

Para 24 meses seria aproximadamente = 348 750 x 2 ≈ **697 500€**.
El TCO durante 12 meses es de **348 750€**, con un CapEx de **109 300€** y un OpEx de **239 450€**.


## 5.4. Cálculo de TCO Mensual y Precio Objetivo

1. **TCO Mensual** = €348 750 / 12 ≈ **€29 062,50**
2. **Precio objetivo** = TCO anual × 1,15 ≈ **€401 062,50**

El precio objetivo nos garantiza al menos un 15% de beneficio.

## 5.5. Análisis de Riesgos de Operacion y Mantenimiento

| Riesgo                        | Impacto   | Probabilidad | Estrategia de mitigación                             |
|-------------------------------|-----------|--------------|----------------------------------------|
| Sobrecarga de soporte         | Alto      | Media        | Añadir un FTE extra o turnos flexibles para repartir la carga         |
| Saltos de precio en APIs     | Medio-Alto| Alta         | Pactar contratos semestrales o anuales con cláusulas con un tope máximo de subida      |
| Variación salarial elevada    | Medio     | Baja   | Incluir cláusulas de revisión salarial en los contratos de trabajo    |


