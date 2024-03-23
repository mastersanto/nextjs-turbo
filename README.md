# Nextjs Turbo

Turbo repo with Next js.

## Apps and Packages

- `host`: a Next.js host application
- `conferences`: a Next.js conferences application

## Running

```bash
pnpm install
pnpm build
pnpm dev
```

### Microfrontends

- Host: [localhost:3000](http://localhost:3000/)
- Conferences: [localhost:3001](http://localhost:3001/)

## Other Dependencies

To generate graphs:
`brew install graphviz`
`pnpm turbo run build --graph=graph.pdf`
