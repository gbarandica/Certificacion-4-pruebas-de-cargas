# Certificación 4 - Pruebas de Rendimiento y Seguridad

Repositorio correspondiente a las prácticas y laboratorios desarrollados durante la **Certificación 4**.

El proyecto contiene ejercicios de pruebas de rendimiento utilizando **k6 y Apache JMeter**, además de pruebas de seguridad dinámica (**DAST**) utilizando **OWASP ZAP** sobre OWASP Juice Shop.

---

## Tecnologías utilizadas

- k6
- Apache JMeter
- OWASP ZAP
- OWASP Juice Shop
- Docker Desktop
- Docker
- WSL 2
- Git / GitHub

---

# Estructura del repositorio

```text
Certificacion-4-pruebas-de-cargas/
│
├── K6/
│   └── labs/
│       └── Pruebas realizadas con k6
│
├── jmeter/
│   └── labs/
│       └── Pruebas realizadas con Apache JMeter
│
├── results/
│   └── Resultados de las pruebas de rendimiento
│
├── security/
│   └── zap/
│       ├── docs/
│       │   └── zap-security-analysis.md
│       │
│       ├── evidence/
│       │   ├── 01-juice-shop-container-running.png
│       │   ├── 02-zap-baseline-execution.png
│       │   ├── 03-csp-header-not-set.png
│       │   ├── 04-cross-domain-misconfiguration.png
│       │   ├── 05-dangerous-js-functions.png
│       │   ├── 06-coep-header-missing.png
│       │   ├── 07-timestamp-disclosure.png
│       │   └── 08-zap-daemon.png
│       │
│       └── reports/
│           ├── zap-baseline.html
│           └── zap.yaml
│
└── README.md
```

---

# Laboratorio OWASP ZAP + OWASP Juice Shop

## Objetivo

El laboratorio tiene como propósito implementar un escenario de pruebas de seguridad dinámica (**DAST**) utilizando OWASP ZAP contra una instancia local y deliberadamente vulnerable de **OWASP Juice Shop**.

La aplicación y la herramienta de seguridad fueron desplegadas mediante Docker utilizando una red denominada:

```text
zapnet
```

Esto permite que OWASP ZAP pueda comunicarse con Juice Shop internamente mediante:

```text
http://juice-shop:3000
```

---

# Entregables del laboratorio

Los entregables solicitados se encuentran organizados dentro de:

```text
security/zap/
```

## 1. Reporte OWASP ZAP

El reporte HTML generado automáticamente por ZAP Baseline se encuentra en:

```text
security/zap/reports/zap-baseline.html
```

El análisis procesó:

```text
88 URLs
```

Resultado general:

```text
FAIL-NEW: 0
WARN-NEW: 8
PASS: 59
```

> Para visualizar el reporte completo se recomienda descargar/clonar el repositorio y abrir `zap-baseline.html` en un navegador.

---

## 2. Matriz y análisis de hallazgos

El análisis técnico completo se encuentra en:

```text
security/zap/docs/zap-security-analysis.md
```

Este documento contiene:

- Matriz de hallazgos.
- Evidencia técnica.
- Impacto potencial.
- Remediación propuesta.
- Validación de los hallazgos.
- Security Gate.
- Resultado del Security Gate.
- Propuesta de integración con CI/CD.
- Conclusión técnica.

---

## 3. Hallazgos seleccionados

Los tres hallazgos analizados fueron:

| # | Hallazgo | Riesgo |
|---:|---|---|
| 1 | Content Security Policy (CSP) Header Not Set | Medium |
| 2 | Cross-Domain Misconfiguration | Medium |
| 3 | Dangerous JS Functions | Low |


---

## 4. Evidencias

Las capturas correspondientes a la ejecución y análisis se encuentran en:

```text
security/zap/evidence/
```

Entre ellas se incluyen evidencias de:

- OWASP Juice Shop ejecutándose mediante Docker.
- Ejecución de OWASP ZAP Baseline.
- Hallazgos identificados durante el análisis.
- Evidencia de configuración CORS.
- Funciones JavaScript potencialmente peligrosas.
- Headers de seguridad.
- Timestamp Disclosure.
- OWASP ZAP ejecutándose en modo daemon.

---

## 5. Security Gate

Para el laboratorio se definió el siguiente criterio:

| Severidad | Resultado |
|---|---|
| Critical | FAIL |
| High | FAIL / EXCEPTION |
| Medium | REVIEW |
| Low | PASS + seguimiento |
| Informational | PASS |

### Resultado obtenido

```text
SECURITY GATE: REVIEW
```

El resultado se clasifica como `REVIEW` debido a la existencia de hallazgos de severidad **Medium**.

No se identificaron hallazgos **High** o **Critical** dentro de los resultados seleccionados que provoquen un bloqueo automático.

---

# Integración con CI/CD

Como propuesta de automatización, OWASP ZAP puede incorporarse dentro de un pipeline CI/CD después del despliegue de la aplicación en un ambiente autorizado de pruebas.

```text
Git Push / Pull Request
        │
        ▼
      Build
        │
        ▼
 Automated Tests
        │
        ▼
 Deploy ambiente QA
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
   ┌────┴────┐
   │         │
 PASS      FAIL
   │         │
   ▼         ▼
Continuar   Bloquear
```

Los reportes generados por ZAP pueden conservarse como artefactos del pipeline y utilizarse para aplicar reglas automáticas de seguridad antes de permitir un despliegue.

---

# Conclusión

El laboratorio permitió aplicar conceptos de **DAST, triage de vulnerabilidades, análisis de evidencia, evaluación de impacto y Security Gates** utilizando OWASP ZAP.

Un aspecto fundamental del ejercicio es comprender que una alerta generada automáticamente por una herramienta de seguridad no representa necesariamente una vulnerabilidad confirmada.

Los hallazgos deben ser analizados considerando:

```text
Alerta
  ↓
Evidencia
  ↓
Contexto
  ↓
Impacto
  ↓
Remediación
  ↓
Security Gate
```

Este enfoque permite integrar las pruebas de seguridad dentro de una estrategia de automatización y CI/CD sin depender únicamente del resultado automático proporcionado por la herramienta.