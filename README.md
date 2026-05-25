# kyd480.github.io

Personal site for Kevin Duong. See [`PLAN.md`](./PLAN.md) for design and [`IMPLEMENTATION.md`](./IMPLEMENTATION.md) for the build plan.

## Develop

```bash
nvm use 22       # or any Node >= 22
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve ./dist locally
```

## Deploy

Pushes to `main` deploy to `kyd480.github.io` via GitHub Actions.
