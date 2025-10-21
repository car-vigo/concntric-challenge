# GitHub Actions - Cypress Tests

## 📋 Configuración

### 1. Configurar Secrets en GitHub

Ve a: `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

**Secrets necesarios:**

| Secret Name | Descripción | Ejemplo |
|-------------|-------------|---------|
| `CYPRESS_HOST` | URL base para los tests | `https://concntric.com/` |

**Opcional (si necesitas autenticación):**
- `CYPRESS_USERNAME` - Usuario para login
- `CYPRESS_PASSWORD` - Password para login

### 2. Habilitar GitHub Pages (opcional)

Si quieres publicar el reporte en GitHub Pages:

1. Ve a: `Settings` → `Pages`
2. **Source**: `GitHub Actions`
3. Guarda los cambios

El reporte estará disponible en:
```
https://<tu-usuario>.github.io/<nombre-repo>/
```

---

## 🚀 Uso

### Ejecución Automática

El workflow se ejecuta automáticamente cuando:
- Haces `push` a `main`, `master` o `develop`
- Abres un `pull request` a esas ramas

### Ejecución Manual

1. Ve a `Actions` en GitHub
2. Selecciona `Cypress Tests`
3. Click en `Run workflow`
4. Selecciona la rama
5. Click en `Run workflow`

---

## 📊 Artifacts Generados

Después de cada ejecución, podrás descargar:

### 1. **Test Report** (siempre disponible)
- Reporte HTML completo con Mochawesome
- Videos de todos los tests
- Screenshots de tests fallidos
- Estadísticas y gráficos

**Ubicación en GitHub:**
`Actions` → Click en el workflow → Sección `Artifacts` → `test-report`

### 2. **Cypress Videos** (siempre disponible)
- Videos de ejecución de cada test
- Formato: MP4

**Ubicación:**
`Actions` → Sección `Artifacts` → `cypress-videos`

### 3. **Cypress Screenshots** (solo si hay fallos)
- Screenshots del momento del fallo
- Formato: PNG

**Ubicación:**
`Actions` → Sección `Artifacts` → `cypress-screenshots`

---

## 🔧 Personalización

### Cambiar la versión de Node.js

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Cambia a la versión que necesites
```

### Agregar más secrets

```yaml
env:
  CYPRESS_HOST: ${{ secrets.CYPRESS_HOST }}
  CYPRESS_API_KEY: ${{ secrets.CYPRESS_API_KEY }}
  CYPRESS_USERNAME: ${{ secrets.CYPRESS_USERNAME }}
```

### Cambiar retención de artifacts

```yaml
retention-days: 7  # De 30 días a 7 días
```

### Ejecutar solo en ciertos archivos

```yaml
on:
  push:
    paths:
      - 'cypress/**'
      - 'package.json'
```

---

## 📈 Ver Resultados

### En GitHub Actions

1. Ve a la pestaña `Actions`
2. Click en el workflow que se ejecutó
3. Verás:
   - ✅ Tests que pasaron
   - ❌ Tests que fallaron
   - ⏱️ Tiempo de ejecución
   - 📦 Artifacts disponibles para descargar

### Reporte HTML

**Opción 1: Descargar artifact**
1. Click en `test-report` en la sección Artifacts
2. Descarga el ZIP
3. Extrae y abre `index.html`

**Opción 2: GitHub Pages (si está habilitado)**
1. Ve a la URL de GitHub Pages de tu repo
2. El reporte se actualiza automáticamente

---

## 🐛 Troubleshooting

### Error: "CYPRESS_HOST is not set"

**Solución:** Asegúrate de configurar el secret `CYPRESS_HOST` en GitHub.

### Error: "npm ci failed"

**Solución:** Verifica que tu `package-lock.json` esté committeado.

### Tests fallan en CI pero pasan localmente

**Posibles causas:**
- Timeouts muy cortos (aumenta en `cypress.config.ts`)
- Recursos lentos en CI (agrega más `cy.wait()`)
- Variables de ambiente diferentes

### No se generan artifacts

**Solución:** Verifica que los paths en el workflow coincidan con tu configuración:
```yaml
path: cypress/reports/html/  # Debe coincidir con tu reportDir
```

---

## 📝 Ejemplo de Badge

Agrega este badge a tu README.md para mostrar el estado:

```markdown
[![Cypress Tests](https://github.com/<usuario>/<repo>/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/<usuario>/<repo>/actions/workflows/cypress-tests.yml)
```

Reemplaza `<usuario>` y `<repo>` con tus valores.

---

## 🔐 Seguridad

- ✅ **Nunca** commitees secrets en el código
- ✅ Usa GitHub Secrets para información sensible
- ✅ Los artifacts tienen retención limitada (30 días)
- ✅ Los artifacts son privados (solo accesibles con permisos en el repo)

---

## 📚 Referencias

- [Cypress GitHub Action](https://github.com/cypress-io/github-action)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

