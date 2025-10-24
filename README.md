[![Netlify Status](https://api.netlify.com/api/v1/badges/55ebbbbd-f097-4c59-9df9-407100085bce/deploy-status)](https://app.netlify.com/sites/rickandmorty-squarerobin/deploys)

# Rick and Morty Fan Site

This is a fan site for the Rick and Morty universe built as a Next.js 15 application with TypeScript and Tailwind CSS. The project is maintained to be compatible with Spanish unemployment benefits (prestación contributiva de desempleo) regulations.

----

## Compliance with Spanish Unemployment Benefits

This project is designed to maintain compatibility with Spanish unemployment benefits (prestación contributiva de desempleo) through:

- **No profit motive (no ánimo de lucro)**: All operations are non-commercial
- **No habitual income (habitualidad de ingresos)**: Donations are voluntary with no recurring payments
- **Transparent financial reporting**: All donations are used exclusively for hosting and domain expenses
- **Open source licensing**: MIT license ensures community ownership
- **Community-focused purpose**: Site exists solely as a fan resource

For more details on our compliance measures, see our policies:
- [Anti-Habitual Income Policy](./ANTI-HABITUALIDAD-POLICY.md)
- [No Profit Motive Policy](./NO-ANIMO-DE-LUCRO-POLICY.md)
- [Financial Transparency Report](./apps/rickandmorty/app/financial-report/page.tsx)
- [Legal Review](./Legal-Review.md)
- [Ko-fi Donation Implementation](./KO-FI-SETUP.md)

## Donations

This project uses Ko-fi for donations to cover hosting and domain expenses. During the autónomo period, donations are temporarily accepted. After the autónomo period ends, donation functionality may be disabled to maintain compliance with unemployment benefit regulations.

## Environment Configuration

The project uses the following environment variables:

- `NEXT_PUBLIC_GRAPHQL_ENDPOINT`: The GraphQL API endpoint URL (defaults to production API)
- `NEXT_PUBLIC_KOFI_USERNAME`: Your Ko-fi username (optional)
- `NEXT_PUBLIC_KOFI_ENABLED`: Whether to enable the Ko-fi donation button (default: false)
- `NEXT_PUBLIC_BASE_URL`: The base URL for metadata

To configure these, copy `.env.example` to `.env.local` and update the values as needed. The `.env.local` file is git-ignored and safe for local development.

## Copyright Compliance

This project uses images and content from the Rick and Morty television series for educational and fan appreciation purposes only. All content remains the property of Adult Swim and Williams Street. For more details, see [Copyright Compliance](./COPYRIGHT-COMPLIANCE.md).

## Project Structure

The project follows a monorepo structure with the following key directories:

- `apps/rickandmorty`: The main Next.js application
- `apps/api`: The Rick and Morty API with location filtering capabilities
- `packages/`: Shared libraries and utilities
- `docs/`: Documentation files

The Rick and Morty Fan Site features:

- **Landing Page**: An engaging homepage with character exploration and site information
- **Character Browser**: Browse all characters from the Rick and Morty universe with detailed information
- **Donation System**: Support the site through Ko-fi donations (when enabled)
- **Financial Transparency**: Reports on how donations are used to maintain the site

## Development

To run both the frontend and API locally for development:

1. Install dependencies: `pnpm install`
2. Start the PostgreSQL database using Docker: `docker compose up -d`
3. Run database migrations: `cd apps/api && npx prisma migrate dev`
4. Populate the database with Rick and Morty data: `cd apps/api && node scripts/populate-db.js`
5. Run both applications concurrently: `pnpm dev:concurrent`
   - This will start the Next.js app on port 3000
   - And the GraphQL API on port 4000
6. The frontend will automatically connect to the local API endpoint

To run applications separately:
- Frontend only: `pnpm --filter @rickandmorty/app dev`
- API only: `pnpm --filter @rickandmorty/api dev`

## Docker Setup

The project includes Docker configuration for easy database setup:

1. Make sure you have Docker and Docker Compose installed
2. Start the PostgreSQL database: `docker compose up -d`
3. The database will be available at `localhost:5432`
4. To stop the database: `docker compose down`

## Database Setup

The API uses PostgreSQL with Prisma ORM. To set up the database:

1. Start the database with Docker: `docker compose up -d`
2. Navigate to the API directory: `cd apps/api`
3. Run the database migrations: `npx prisma migrate dev`
4. Populate the database with Rick and Morty data: `node scripts/populate-db.js`
5. The location filtering feature will be available once the data is populated

## Features

The Rick and Morty Fan Site features:

- **Landing Page**: An engaging homepage with character exploration and site information
- **Character Browser**: Browse all characters from the Rick and Morty universe with detailed information
- **Location Browser**: Explore locations from the show with associated characters
- **Episode Browser**: Detailed information about episodes across all seasons
- **Donation System**: Support the site through Ko-fi donations (when enabled)
- **Financial Transparency**: Reports on how donations are used to maintain the site
- **Fan Content**: Fan theories, quotes, and community features

## API Enhancement Initiative

This project includes a custom enhanced API based on the original [Rick and Morty API](https://rickandmortyapi.com/) with additional features:

- **Location Filtering**: Enhanced character queries with location filtering capabilities
- **Performance Optimizations**: Improved caching and response times
- **Additional Endpoints**: Extended functionality for fansite features
- **GraphQL Support**: Full GraphQL implementation for flexible data fetching

## Environment Configuration

The project uses the following environment variables:

- `NEXT_PUBLIC_GRAPHQL_ENDPOINT`: The GraphQL API endpoint URL (defaults to production API)
- `NEXT_PUBLIC_KOFI_USERNAME`: Your Ko-fi username (optional)
- `NEXT_PUBLIC_KOFI_ENABLED`: Whether to enable the Ko-fi donation button
- `NEXT_PUBLIC_BASE_URL`: The base URL for metadata

For local development, copy `.env.example` to `.env.local` and update the values as needed. The `.env.local` file is git-ignored and safe for local development.

## Project Goals

The Rick and Morty Fan Site aims to:

- Provide a comprehensive resource for Rick and Morty fans
- Showcase modern web development practices with Next.js, TypeScript, and GraphQL
- Build a vibrant community around the Rick and Morty universe
- Maintain compliance with copyright and legal requirements
- Offer an enhanced API experience with location filtering and other features

## Contributing

We welcome contributions to the Rick and Morty Fan Site! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The Rick and Morty Fan Site uses images and content from the Rick and Morty television series for educational and fan appreciation purposes only. All content remains the property of Adult Swim and Williams Street.