# Pensula Curată

Site de prezentare pentru servicii de zugrăveli interioare în Târgoviște și județul Dâmbovița.

🔗 **Website live**: [https://pensulacurata.ro](https://pensulacurata.ro)

## Descriere

Pensula Curată oferă servicii profesionale de zugrăveli interioare și reparații mici de zidărie pentru locuințe și birouri în Târgoviște și împrejurimi.

## Tehnologii

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Router** - Client-side routing

## Comenzi disponibile

```bash
# Instalare dependențe
npm install

# Server de dezvoltare
npm run dev

# Build pentru producție
npm run build

# Preview build producție
npm run preview

# ESLint
npm run lint
```

## Deployment

### Vercel (Recomandat)

1. Push codul pe GitHub
2. Conectează repo-ul la Vercel
3. Vercel va detecta automat configuratia Vite
4. Build command: `npm run build`
5. Output directory: `dist`

### Configurație Vercel

Fișierul `vercel.json` este deja configurat pentru:
- SPA routing (toate rutele către index.html)
- Cache optimizat pentru assets

## Structura proiectului

```
src/
├── components/    # Componente reutilizabile
├── pages/         # Pagini (route-level)
├── sections/      # Secțiuni de pagină
├── hooks/         # Custom React hooks
├── lib/           # Utilități
└── ...
public/
├── images/        # Imagini statice
└── ...
```

## Contact

📞 Telefon: 0774 613 207
