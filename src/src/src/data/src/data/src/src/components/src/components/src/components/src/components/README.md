# Test de Orientación Vocacional CHASIDE · UPDS Sucre

Aplicación web estática (React 18 + Vite + TailwindCSS) para aplicar el test
CHASIDE en ferias de orientación vocacional de la Universidad Privada Domingo
Savio, sede Sucre.

## Características

- 98 preguntas Sí/No con plantilla oficial de corrección.
- Cálculo de perfil por áreas CHASIDE (intereses y aptitudes por separado).
- Dos radares independientes (Recharts): Intereses (0–10) y Aptitudes (0–4).
- Recomendación de las 14 carreras UPDS Sucre según pesos 60/40.
- Mobile-first, 100% anónimo, sin backend.
- Compartir resultado (Web Share API) o copiar al portapapeles.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # probar el build localmente
```

## Deploy en Vercel

1. Subí el repo a GitHub.
2. En [vercel.com](https://vercel.com) → **New Project** → importá el repo.
3. Framework preset: **Vite**.
4. Build command: `npm run build` — Output directory: `dist`.
5. Deploy.

## Cómo probarlo en 5 pasos

1. `npm install`
2. `npm run dev`
3. Abrí la URL que muestra Vite en tu navegador.
4. Tocá **Comenzar test** y respondé las 98 preguntas.
5. Al finalizar se muestran las áreas top, los dos radares y las 3 carreras
   recomendadas. Probá **Compartir** y **Reiniciar**.

## Cómo generar el QR para la feria

Opción A — desde la URL de Vercel:

1. Copiá la URL pública del deploy (ej. `https://test-vocacional-upds.vercel.app`).
2. Entrá a [qr-code-generator.com](https://www.qr-code-generator.com/) o usá
   `qrencode` desde terminal:
   ```bash
   qrencode -o qr-upds.png -s 10 "https://test-vocacional-upds.vercel.app"
   ```
3. Imprimí el PNG en tamaño mínimo 8×8 cm y colocalo en el stand.

Opción B — QR por mesa/carrera: si querés un QR por cada puesto de la feria,
agregá un parámetro `?puesto=medicina` a la URL y generá un QR distinto por
cada uno (el parámetro es solo informativo, no afecta el test).

## Nota sobre el logo

La app espera el logo en `public/logo-upds.png`. Si el archivo no existe, la
imagen se oculta automáticamente sin romper el layout.

## Créditos del instrumento

CHASIDE ® – De León & Rodríguez. Adaptación para UPDS Sucre.
