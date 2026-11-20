# Flora — Frontend

React + Vite client for the Flora ecommerce platform.

## Scripts

```bash
npm install
npm run dev      # start the development server
npm run build    # create a production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Configuration

The API base URL is read from `VITE_API_URL` and defaults to `http://localhost:3000`:

```env
VITE_API_URL=http://localhost:3000
```

## Structure

```
src/
├── api/         # API helpers
├── assets/      # brand assets
├── components/  # shared UI components
├── constants/   # configuration constants
├── context/     # React contexts
└── pages/       # route-level pages
```
