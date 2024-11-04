# Clone the repository
git clone https://github.com/your-username/moderate-jokes-service.git

# Navigate to the project directory
cd moderate-jokes-service

# Install dependencies
npm install

# Create .env file and update with your values
cp .env.example .env

# Start the development server
npm run start:dev

# For production
npm run start

# Login to get JWT token
POST /api/auth/login
Content-Type: application/json

{
    "username": "admin@admin.com",
    "password": "admin123"
}

http://localhost:3003/api-docs
