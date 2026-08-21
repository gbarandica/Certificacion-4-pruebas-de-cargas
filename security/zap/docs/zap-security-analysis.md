# Análisis de Seguridad con OWASP ZAP

## Certificación 4 - Pruebas de Carga y Seguridad

### Laboratorio: OWASP ZAP + OWASP Juice Shop


## 2. Ejecución del ZAP Baseline Scan

El análisis se ejecutó contra OWASP Juice Shop utilizando la comunicación interna proporcionada por la red Docker `zapnet`.

Target analizado:

```text
http://juice-shop:3000
```

El Baseline Scan procesó un total de **88 URLs**.

El resultado general obtenido fue:

```text
FAIL-NEW: 0
FAIL-INPROG: 0
WARN-NEW: 8
WARN-INPROG: 0
INFO: 0
IGNORE: 0
PASS: 59
```

El análisis identificó ocho tipos de alertas nuevas. Para el proceso de triage se seleccionaron cinco hallazgos representativos teniendo en cuenta su severidad, evidencia técnica y posible impacto.

---

# 3. Triage de hallazgos de seguridad

De las ocho alertas nuevas identificadas por OWASP ZAP, se seleccionaron cinco
hallazgos representativos para realizar el proceso de triage. Aunque el reto
solicita seleccionar tres hallazgos, se analizaron cinco con el objetivo de
tener una evaluación más completa de los resultados obtenidos.

## 3.1 Matriz de hallazgos

| # | Hallazgo | Riesgo | Evidencia | Impacto potencial | Remediación | Validación |
|---|---|---|---|---|---|---|
| 1 | Content Security Policy (CSP) Header Not Set | Medium | Ausencia del header `Content-Security-Policy` en las respuestas analizadas | Reduce las defensas adicionales del navegador frente a determinados ataques de inyección de contenido y XSS | Definir una política CSP adecuada según los recursos utilizados por la aplicación | Confirmar la ausencia del header mediante los Response Headers |
| 2 | Cross-Domain Misconfiguration | Medium | `Access-Control-Allow-Origin: *` | Una configuración CORS demasiado permisiva podría permitir acceso cross-origin a recursos cuando las demás condiciones de seguridad lo permitan | Restringir `Access-Control-Allow-Origin` únicamente a los orígenes autorizados | Analizar los Response Headers y verificar especialmente endpoints sensibles o autenticados |
| 3 | Dangerous JS Functions | Low | Uso de `bypassSecurityTrustHtml(` detectado en `main.js` | Podría omitir mecanismos de sanitización si la función procesa información proveniente de fuentes no confiables | Evitar funciones de bypass cuando no sean necesarias y validar/sanitizar correctamente las entradas | Determinar el origen de los datos enviados a la función antes de confirmar una vulnerabilidad |
| 4 | Cross-Origin-Embedder-Policy Header Missing or Invalid | Low | Header `Cross-Origin-Embedder-Policy` ausente o inválido en las respuestas detectadas | Reduce mecanismos adicionales de aislamiento para determinados recursos cross-origin | Evaluar los requerimientos de la aplicación y configurar una política COEP apropiada cuando corresponda | Revisar los Response Headers de los recursos afectados |
| 5 | Timestamp Disclosure - Unix | Low | Valores compatibles con timestamps Unix como `1666666667`, `1839622642` y `1528301887` | Podrían revelar información temporal o interna útil para reconocimiento si los valores tienen significado sensible | Evitar exponer información temporal interna innecesaria y revisar el contexto de los valores encontrados | Determinar qué representa cada timestamp y si contiene información relevante para la seguridad |

---

# 4. Análisis de 3 hallazgos

## 4.1 Content Security Policy (CSP) Header Not Set

**Riesgo:** Medium

OWASP ZAP detectó que diferentes respuestas de la aplicación no contienen el encabezado HTTP `Content-Security-Policy`.

CSP permite establecer restricciones sobre las fuentes desde las cuales el navegador puede cargar contenido como scripts, imágenes, estilos y otros recursos.

La ausencia de CSP no demuestra por sí sola la existencia de una vulnerabilidad XSS, pero elimina una capa adicional de protección que puede ayudar a reducir el impacto de determinados ataques de inyección de contenido.

**Remediación propuesta:**

Implementar una política `Content-Security-Policy` adaptada a los requerimientos reales de la aplicación, evitando políticas excesivamente permisivas.

**Validación:**

Revisar manualmente los Response Headers de los recursos afectados para confirmar la ausencia del encabezado.

---

## 4.2 Cross-Domain Misconfiguration

**Riesgo:** Medium

ZAP identificó la siguiente configuración:

```http
Access-Control-Allow-Origin: *
```

Esta configuración permite acceso cross-origin desde cualquier origen para los recursos donde se aplica.

Aunque esto no demuestra automáticamente que exista una vulnerabilidad explotable, una política CORS demasiado permisiva puede representar un riesgo dependiendo del tipo de información expuesta, los mecanismos de autenticación utilizados y los endpoints afectados.

**Remediación propuesta:**

Restringir los orígenes permitidos únicamente a aquellos requeridos por la aplicación.

Por ejemplo, conceptualmente:

```http
Access-Control-Allow-Origin: https://frontend-autorizado.example
```

en lugar de:

```http
Access-Control-Allow-Origin: *
```

**Validación:**

Analizar los Response Headers y comprobar la configuración CORS particularmente sobre endpoints que manejen información sensible o autenticada.

---

## 4.3 Dangerous JS Functions

**Riesgo:** Low

OWASP ZAP detectó en:

```text
http://juice-shop:3000/main.js
```

la utilización de:

```javascript
bypassSecurityTrustHtml(
```

Esta función puede permitir que determinado contenido HTML sea considerado confiable, evitando algunos mecanismos de sanitización proporcionados por el framework.

Sin embargo, encontrar la función no demuestra automáticamente la existencia de una vulnerabilidad XSS.

Para determinar el riesgo real sería necesario analizar el origen de los datos que llegan a la función y comprobar si estos pueden ser controlados por un usuario o atacante.

**Remediación propuesta:**

Evitar funciones de bypass de seguridad cuando no sean estrictamente necesarias. Cuando su utilización sea requerida, garantizar que el contenido provenga de fuentes confiables y que cualquier entrada externa sea correctamente validada y sanitizada.

**Validación:**

Realizar análisis adicional sobre el flujo de los datos procesados por la función antes de clasificar el hallazgo como una vulnerabilidad explotable.

---

# 5. Propuesta de Security Gate

Un Security Gate permite establecer criterios automáticos para determinar si una aplicación puede continuar dentro de un pipeline de CI/CD después de ejecutar las pruebas de seguridad.

Para este laboratorio se propone el siguiente criterio:

| Severidad | Resultado | Acción |
|---|---|---|
| Critical | FAIL | Bloquear automáticamente el pipeline |
| High | FAIL / EXCEPTION | Bloquear el pipeline salvo excepción formalmente analizada y aprobada |
| Medium | REVIEW | Requiere análisis antes de aprobar la ejecución |
| Low | PASS + seguimiento | No bloquea automáticamente, pero el hallazgo debe registrarse |
| Informational | PASS | Registrar para análisis cuando corresponda |

Adicionalmente:

- La generación correcta del reporte de seguridad es obligatoria.
- Un error técnico que impida ejecutar el análisis debe ser investigado.
- No deben ejecutarse pruebas DAST sobre targets que no estén expresamente autorizados.

---

## 6. Resultado del Security Gate

El Baseline Scan presentó:

```text
FAIL-NEW: 0
WARN-NEW: 8
PASS: 59
```

Dentro de los cinco hallazgos seleccionados para el triage se identificaron:

```text
2 Medium
3 Low
0 High
0 Critical
```

Aplicando el Security Gate definido para el laboratorio, el resultado general se establece como:

## REVIEW

No se identificaron hallazgos High o Critical que provoquen un bloqueo automático.

Sin embargo, existen hallazgos Medium que requieren revisión antes de considerar el resultado como un PASS definitivo.

---

# 7. Integración propuesta en CI/CD

OWASP ZAP puede integrarse dentro de un pipeline CI/CD para ejecutar pruebas DAST automáticamente sobre un ambiente de pruebas autorizado.

Un flujo simplificado podría ser:

```text
Developer
    │
    ▼
Git Push / Pull Request
    │
    ▼
CI Pipeline
    │
    ├── Build
    │
    ├── Unit Tests
    │
    ├── Integration Tests
    │
    ├── Deploy ambiente QA
    │
    ▼
OWASP ZAP
    │
    ▼
DAST Scan
    │
    ▼
Security Gate
    │
 ┌──┴──────────────┐
 │                 │
PASS/REVIEW       FAIL
 │                 │
 ▼                 ▼
Continuar       Bloquear
pipeline        pipeline
```

El pipeline debería almacenar el reporte generado por ZAP como artefacto de ejecución.

Posteriormente, los resultados pueden evaluarse mediante reglas automáticas que determinen si el pipeline continúa o se bloquea dependiendo de la severidad de los hallazgos.

Las pruebas DAST más ligeras pueden ejecutarse con mayor frecuencia, mientras que análisis más completos pueden reservarse para ambientes controlados, ejecuciones nocturnas o etapas previas a un release.

Es importante que estos análisis se ejecuten únicamente sobre ambientes y sistemas expresamente autorizados.

---

# 8. Conclusión técnica

El laboratorio permitió implementar un escenario práctico de pruebas de seguridad dinámicas utilizando OWASP ZAP y OWASP Juice Shop sobre una arquitectura basada en Docker.

La utilización de una red Docker permitió establecer comunicación entre los contenedores mediante sus nombres internos, permitiendo que OWASP ZAP analizara Juice Shop utilizando `http://juice-shop:3000` sin depender de la dirección `localhost` del host.

El ZAP Baseline Scan procesó 88 URLs y generó ocho tipos de alertas nuevas, sin registrar hallazgos clasificados como `FAIL-NEW`. Durante el proceso de triage se seleccionaron cinco hallazgos representativos, incluyendo problemas relacionados con Content Security Policy, configuración cross-domain, funciones JavaScript potencialmente peligrosas, políticas de aislamiento cross-origin y exposición de timestamps.

Uno de los principales aprendizajes del laboratorio es que una alerta generada automáticamente por una herramienta DAST no debe interpretarse inmediatamente como una vulnerabilidad confirmada. Cada hallazgo debe analizarse considerando su evidencia, contexto, severidad, impacto potencial y reproducibilidad antes de tomar una decisión.

A partir de los resultados se propuso un Security Gate donde los hallazgos Critical y High pueden bloquear el pipeline, los Medium requieren revisión y los Low pueden permitir continuar el proceso manteniendo seguimiento. Debido a la presencia de hallazgos Medium, el resultado general de este laboratorio fue clasificado como `REVIEW`.

Finalmente, la ejecución de OWASP ZAP mediante Docker demuestra cómo las pruebas DAST pueden incorporarse posteriormente dentro de procesos CI/CD, permitiendo generar reportes automáticos y utilizar criterios de seguridad como parte de las decisiones de calidad antes de desplegar una aplicación.

---

# 9. Evidencias

El laboratorio cuenta con las siguientes evidencias:

- Reporte generado por OWASP ZAP: `zap-baseline.html`.
- Captura de OWASP Juice Shop ejecutándose mediante Docker.
- Captura de la configuración de OWASP ZAP y la red Docker `zapnet`.
- Captura de la ejecución del ZAP Baseline Scan.
- Evidencias del triage de los hallazgos seleccionados.
- Captura de Juice Shop y OWASP ZAP ejecutándose como contenedores Docker.

---