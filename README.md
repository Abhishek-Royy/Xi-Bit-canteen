# Xi-Bit Canteen Management System

A full-stack web application for managing a college canteen, built with React, Node.js, and Supabase.

## Features

- User authentication (Students and Canteen Staff)
- Menu management
- Order placement and tracking
- Real-time order status updates
- Payment integration
- Admin dashboard

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/xi-bit-canteen.git
cd xi-bit-canteen
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables as described above.

4. Start the development server:
```bash
npm run dev
```

This will start both the backend server (port 5000) and the frontend development server (port 3000).

## Project Structure

```
xi-bit-canteen/
├── backend/
│   ├── middleware/
│   │   ├── auth.js
│   │   └── role.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── menu.js
│   │   └── orders.js
│   └── server.js
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   └── utils/
├── .env
├── package.json
└── README.md
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/user - Get user data

### Menu
- GET /api/menu - Get all menu items
- POST /api/menu - Add menu item (Canteen only)
- PUT /api/menu/:id - Update menu item (Canteen only)
- DELETE /api/menu/:id - Delete menu item (Canteen only)

### Orders
- GET /api/orders - Get user's orders
- POST /api/orders - Create new order
- PUT /api/orders/:id - Update order status (Canteen only)
- GET /api/orders/canteen - Get all orders (Canteen only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
