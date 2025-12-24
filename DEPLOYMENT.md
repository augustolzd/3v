# Deployment Guide - 3V Strategy Canvas

## 📋 Pre-Deployment Checklist

- [ ] Todas las dependencias instaladas (`npm install`)
- [ ] Build de producción exitoso (`npm run build`)
- [ ] Tests pasando (si aplica)
- [ ] Variables de entorno configuradas
- [ ] SEO meta tags verificados
- [ ] Favicon y OG images en `/public`
- [ ] Sitemap.xml actualizado

## 🚀 Opciones de Deployment

### 1. Vercel (Recomendado)

**Ventajas**: Deploy automático, CDN global, SSL gratis, preview deployments

#### Método A: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

#### Método B: GitHub Integration

1. Push tu código a GitHub
2. Visita [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Selecciona tu repositorio
5. Configuración automática detectada ✅
6. Click "Deploy"

**Configuración Vercel** (`vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

### 2. Netlify

**Ventajas**: Formularios gratis, funciones serverless, split testing

#### Deploy Manual

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

#### Deploy con Git

1. Push a GitHub/GitLab/Bitbucket
2. Visita [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Conecta tu repositorio
5. Configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

**Configuración Netlify** (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Ventajas**: Gratis para repositorios públicos, integración con GitHub

#### Configuración

1. Instalar gh-pages:

```bash
npm install -D gh-pages
```

2. Agregar scripts a `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configurar base en `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/3v/', // nombre de tu repositorio
  plugins: [react()],
})
```

4. Deploy:

```bash
npm run deploy
```

5. Habilitar GitHub Pages en Settings → Pages → Source: gh-pages branch

---

### 4. Firebase Hosting

**Ventajas**: CDN global de Google, SSL automático, integración con Firebase

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Configuración:
# - Public directory: dist
# - Single-page app: Yes
# - GitHub integration: Optional

# Build
npm run build

# Deploy
firebase deploy --only hosting
```

---

### 5. AWS S3 + CloudFront

**Ventajas**: Escalabilidad infinita, control total, integración AWS

#### Pasos:

1. **Crear bucket S3**:
   - Nombre único
   - Región cercana a usuarios
   - Habilitar "Static website hosting"

2. **Build y upload**:

```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. **Configurar CloudFront**:
   - Origin: Tu bucket S3
   - SSL certificate: AWS Certificate Manager
   - Custom error pages: 404 → /index.html

4. **Automatizar con GitHub Actions**:

```yaml
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

---

## 🔧 Configuración de Dominio Personalizado

### Vercel

```bash
vercel domains add 3v-strategy.japifon.com
```

Luego configura DNS:
```
CNAME: 3v-strategy → cname.vercel-dns.com
```

### Netlify

1. Site settings → Domain management
2. Add custom domain
3. Configurar DNS:
```
CNAME: 3v-strategy → your-site.netlify.app
```

---

## 🌍 Variables de Entorno

### Desarrollo (`.env.local`)

```env
VITE_APP_TITLE=3V Strategy Canvas
VITE_API_URL=http://localhost:3000
```

### Producción

**Vercel**: Settings → Environment Variables  
**Netlify**: Site settings → Build & deploy → Environment  
**GitHub Actions**: Repository → Settings → Secrets

---

## 📊 Monitoreo Post-Deployment

### Google Analytics

Agregar a `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

---

## ✅ Verificación Post-Deploy

- [ ] Sitio accesible en URL de producción
- [ ] Favicon visible en pestaña del navegador
- [ ] Meta tags correctos (inspeccionar con View Source)
- [ ] OG image preview en redes sociales ([opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Funcionalidad de impresión/export
- [ ] Responsive en móvil, tablet, desktop
- [ ] SSL/HTTPS activo (candado verde)

---

## 🐛 Troubleshooting

### Error: "Failed to load module"

**Solución**: Verificar que `base` en `vite.config.ts` coincida con la ruta de deployment

### Imágenes no cargan

**Solución**: Usar rutas absolutas desde `/public` (ej: `/favicon.png` no `./favicon.png`)

### Tailwind no funciona en producción

**Solución**: Verificar que `tailwind.config.js` tenga los paths correctos en `content`

### 404 en rutas (si usas React Router)

**Solución**: Configurar redirects/rewrites en tu hosting:
- Vercel: `vercel.json` con rewrites
- Netlify: `_redirects` file o `netlify.toml`

---

## 📞 Soporte

Para asistencia con deployment, contactar a:
- **CTO Office**: cto@japifon.com
- **DevOps Team**: devops@japifon.com

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.0.0
