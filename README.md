# Gym Payment Application

A React Native Expo application for handling gym membership payments and subscriptions.

## Features

- View different gym membership plans
- Interactive payment processing
- Secure card information storage
- Payment status verification
- Responsive design
- Real-time card information preview

## Technologies Used

- React Native
- Expo Router for navigation
- Expo SecureStore for data persistence
- React Context for state management
- React Native Picker

## Installation

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npx expo start
```

## Usage

The app consists of several screens:

1. **Home Screen**: Displays available gym plans
2. **Plan Details**: Shows detailed information about selected plan
3. **Payment Screen**: Card information input with live preview
4. **Payment Confirmation**: Review payment details
5. **Payment Status**: Shows success/failure of transaction

## Security

- Card information is stored securely using Expo SecureStore
- No sensitive data is stored in plain text
- Card numbers are masked for display

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


