# 🚀 Guía de Deployment a GitHub Pages

Esta guía te llevará paso a paso para publicar tu **Lienzo Estratégico 3V** en GitHub Pages.

## ✅ Checklist Pre-Deployment

- [x] Proyecto inicializado con Git
- [x] Dependencias instaladas (`gh-pages`)
- [x] Scripts de deploy configurados en `package.json`
- [x] Base URL configurada en `vite.config.ts`
- [x] Primer commit realizado

## 📝 Pasos para Publicar

### 1️⃣ Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `3v`
   - **Description**: `Lienzo Estratégico 3V - Marco de alineación universal para infraestructuras digitales escalables`
   - **Visibility**: Public ✅
   - **NO** marques "Initialize this repository with a README" (ya tenemos uno)
4. Haz clic en **"Create repository"**

### 2️⃣ Conectar tu Repositorio Local con GitHub

Copia y ejecuta estos comandos en tu terminal (reemplaza `augustolzd` con tu usuario de GitHub si es diferente):

```bash
# Agregar el remote de GitHub
git remote add origin https://github.com/augustolzd/3v.git

# Verificar que se agregó correctamente
git remote -v
```

### 3️⃣ Subir el Código a GitHub

```bash
# Push del código a la rama main
git push -u origin main
```

Si es la primera vez que usas Git, puede que te pida autenticación:
- **Opción 1**: Usar GitHub CLI (`gh auth login`)
- **Opción 2**: Usar Personal Access Token
- **Opción 3**: Usar SSH keys

### 4️⃣ Hacer el Deploy a GitHub Pages

```bash
# Este comando hace el build y publica automáticamente
npm run deploy
```

Este comando:
1. ✅ Ejecuta `npm run build` (compila el proyecto)
2. ✅ Crea/actualiza la rama `gh-pages`
3. ✅ Sube el contenido de `/dist` a esa rama
4. ✅ GitHub Pages detecta automáticamente el cambio

### 5️⃣ Configurar GitHub Pages (Solo Primera Vez)

1. Ve a tu repositorio en GitHub: `https://github.com/augustolzd/3v`
2. Haz clic en **Settings** (⚙️)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Haz clic en **Save**

### 6️⃣ Esperar el Deployment

GitHub Pages tardará 1-2 minutos en procesar y publicar tu sitio.

Verás un mensaje como:
```
✅ Your site is live at https://augustolzd.github.io/3v/
```

## 🔄 Actualizaciones Futuras

Cada vez que quieras actualizar el sitio:

```bash
# 1. Hacer cambios en tu código
# 2. Commit de los cambios
git add .
git commit -m "Descripción de los cambios"

# 3. Push a GitHub
git push origin main

# 4. Deploy a GitHub Pages
npm run deploy
```

## 🌐 URLs del Proyecto

- **Repositorio**: `https://github.com/augustolzd/3v`
- **Sitio Web**: `https://augustolzd.github.io/3v/`
- **Rama de código**: `main`
- **Rama de deployment**: `gh-pages`

## 🛠️ Comandos Útiles

```bash
# Ver estado de Git
git status

# Ver historial de commits
git log --oneline

# Ver ramas
git branch -a

# Build local para probar
npm run build
npm run preview

# Linting
npm run lint
```

## ⚠️ Troubleshooting

### Problema: "404 - Page not found"
**Solución**: Verifica que la configuración de GitHub Pages esté en la rama `gh-pages` y carpeta `/ (root)`

### Problema: "Assets no cargan (CSS, JS)"
**Solución**: Verifica que `vite.config.ts` tenga `base: '/3v/'` correctamente configurado

### Problema: "Permission denied" al hacer push
**Solución**: Configura tus credenciales de GitHub:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Problema: El sitio no se actualiza
**Solución**: 
1. Limpia el caché del navegador (Ctrl+Shift+R)
2. Espera 2-3 minutos para que GitHub Pages procese
3. Verifica que el deploy se completó: `git log origin/gh-pages`

## 📊 Verificación del Deploy

Después del deploy, verifica:

1. ✅ El sitio carga en `https://augustolzd.github.io/3v/`
2. ✅ Todos los estilos se aplican correctamente
3. ✅ Los iconos de Lucide React se muestran
4. ✅ La fuente Plus Jakarta Sans carga
5. ✅ El botón de LinkedIn funciona
6. ✅ La función de impresión funciona
7. ✅ El diseño es responsivo en móvil

## 🎉 ¡Listo!

Tu **Lienzo Estratégico 3V** ahora está publicado y accesible para todo el mundo.

Comparte el link: **https://augustolzd.github.io/3v/**

---

**Nota**: Si cambias el nombre del repositorio en el futuro, recuerda actualizar:
- `vite.config.ts` → `base: '/nuevo-nombre/'`
- `package.json` → `homepage: "https://augustolzd.github.io/nuevo-nombre"`
