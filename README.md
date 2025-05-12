# 🍕 Food Delivery App

A responsive and interactive food delivery web application built with **React.js**, featuring restaurant listings, dynamic menus, a live search bar, and a cart system using **Redux**. This project mimics the core features of platforms like Swiggy or Zomato.

---

## 📸 Demo

🚧 Live Demo: *Coming Soon*  
📷 Screenshots: Add preview images here for Home, Restaurant Details, and Cart views

---

## ✨ Features

- 🔍 **Live Search** – Filter restaurants by name in real time.
- 📋 **Restaurant Details Page** – View dishes for each restaurant using dynamic routing.
- 🛒 **Redux Cart System** – Add/remove dishes with quantity updates.
- 🔐 **Sign-In Page** – Placeholder for future user authentication system.
- 🎁 **Offers Page** – Route reserved for displaying promotional offers.
- ⚠️ **Error Page** – Handles undefined routes with a fallback UI.

---

## 🧰 Tech Stack

| Feature         | Tech Used                 |
|----------------|----------------------------|
| Frontend        | React.js (via Vite)        |
| Routing         | React Router DOM           |
| State Management| Redux Toolkit              |
| Styling         | Tailwind CSS               |
| Data Source     | Local mock data (JSON)     |

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Anchal-Mishra/Food-Delivery-App.git
cd Food-Delivery-App
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📌 How It Works

- **Routing**: Configured in `main.jsx` using `createBrowserRouter` from React Router.
- **Mock Data**: Comes from `MockData.js` which includes sample restaurant and dish info.
- **Cart Logic**: Managed in Redux with actions to add/remove items and handle quantities.
- **SearchBar**: Filters restaurant list based on user input, using `toLowerCase` match.
- **RestaurantDetails**: Uses `useParams` to fetch and display data dynamically for a restaurant.

---

## 📸 Screenshots (To Add)

- 🏠 Home Page with restaurant list
- 🍽️ Restaurant Details with menu
- 🛒 Cart with dish quantity control

---

## 🚧 Future Enhancements

- ✅ Add real-time backend with Node.js + MongoDB or Firebase
- ✅ Implement user authentication with JWT/Firebase
- ✅ Add persistent cart storage using localStorage or backend
- ✅ Improve UI/UX with loaders, skeletons, and transitions
- ✅ Add unit and integration tests

---

## 🧑‍💻 Author

Developed by [**Anchal Mishra**](https://github.com/Anchal-Mishra)  
📫 Feel free to connect for collaborations or feedback.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
