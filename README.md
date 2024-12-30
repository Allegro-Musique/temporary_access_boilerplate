# Temporary Access Boilerplate

A Vue 3 + TypeScript + Vite boilerplate project with a built-in temporary access system. This project provides a secure way to implement temporary access to your application using URL-based authentication tokens.

## Features

- 🔐 Temporary access system with URL-based authentication
- ⚡️ Vue 3 + Vite + TypeScript
- 🎨 TailwindCSS for styling
- 📦 Pinia for state management
- 🛣️ Vue Router with authentication guards
- 🔧 TypeScript support
- 📱 Responsive design

## Project Structure

```
temporary_access/
├── src/
│   ├── api/          # API integration
│   ├── components/   # Vue components
│   ├── router/       # Route definitions and guards
│   ├── stores/       # Pinia stores
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
└── ...config files
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   VITE_API_URL=your_api_url
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## How to Use

### Authentication Flow

1. Generate a temporary access URL with a key
2. Share the URL with your users
3. When users access the URL, the system will:
   - Validate the key
   - If valid, grant temporary access
   - Store the authentication token
   - Redirect to the protected content

### Example URL

```
https://your-domain.com/?key=temporary_access_key
```

## Security Considerations

- Access tokens are stored in localStorage and cleared on page refresh
- All protected routes are guarded by authentication middleware
- Invalid or expired keys result in access denial

## Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
- Create your feature branch: `git checkout -b feature/my-feature`
- Commit your changes: `git commit -am 'Add new feature'`
- Push to the branch: `git push origin feature/my-feature`
- Submit a pull request
