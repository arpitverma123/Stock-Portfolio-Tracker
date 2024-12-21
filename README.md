# Stock Portfolio Tracker

Welcome to the [Stock Portfolio Tracker](https://arpit-stock-portfolio-tracker.netlify.app/)!

This web application helps you manage and monitor your stock portfolio with ease. Track real-time prices, calculate portfolio value, and visualize your investments, all from one user-friendly interface.

---

## 🚀 Features

### 1. **Real-Time Stock Prices**
- Fetch live stock prices using the Finnhub API.
- Displays essential data such as:
  - Current price
  - Change (absolute and percentage)
  - High/low prices of the day
  - Open price and previous close.

### 2. **Portfolio Management**
- Automatically initialize a portfolio with randomly selected stocks.
- Add or remove stocks manually to customize your portfolio.
- Track individual stock performance.

### 3. **Portfolio Value Calculation**
- Calculates the total value of your portfolio in real-time.
- Takes into account the current price and quantity of each stock.

### 4. **User-Friendly Interface**
- Intuitive dashboard to view and manage your stocks.
- Clean, responsive design optimized for both desktop and mobile devices.

### 5. **Integration with Supabase**
- Save and retrieve user-specific portfolios securely using Supabase as the backend.

---

## 🌐 Demo

Check out the live application here: [Stock Portfolio Tracker](https://arpit-stock-portfolio-tracker.netlify.app/)

---

## 📋 Usage Instructions

### Getting Started
1. Visit the live website.
2. Create a new user or log in (if applicable).
3. Explore your initialized portfolio or add stocks manually.

### Managing Portfolio
- Use the dashboard to view real-time prices.
- Add or remove stocks from your portfolio.
- Calculate your portfolio’s total value in a single click.

### View Stock Details
- Select a stock to view its latest performance data.
- Monitor trends and make informed decisions.

---

## 🛠️ Technology Stack

### Frontend
- **React.js**: Dynamic UI and component-based architecture.
- **Axios**: For making API calls to Finnhub.
- **Netlify**: Hosting the web application.

### Backend
- **Supabase**: Backend-as-a-Service for managing user-specific portfolio data.
- **MySQL**: For writing queries related to data.

### APIs
- **Finnhub API**: For fetching real-time stock data.

---

## 📝 Development Setup

### Prerequisites
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/arpitboss/stock-portfolio-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stock-portfolio-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your Finnhub API key:
   ```env
   REACT_APP_FINNHUB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Limitations
> The API rate limit is very less.
> So, to resolve this i have made a MOCK data to show if API rate limit is reached.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Stock Portfolio Tracker! Happy investing! 🎉

