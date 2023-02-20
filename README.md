![LoginPage](https://user-images.githubusercontent.com/93931081/217845609-a15ca13a-60d3-4e02-bf4a-6a69baa1b918.jpg)

<h3 align="center">Shopping E-commerce Website</h3>

<p align="center">This repository contains a shopping app built using React, the React-redux toolkit, Firebase authentication, and Razorpay. It is an e-commerce website with a home page and a cart page where you can buy products and pay with Razorpay Gateaway.  </p>

## 📝 Table of Contents

- [Usage](#usage)
- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🎈 Usage or Demo <a name="usage"></a>

Live Website(https://stately-starlight-fac4de.netlify.app/)

Please watch the following demo video for usage of the website:

https://user-images.githubusercontent.com/93931081/217846699-844ad1f5-bbff-429a-947c-56f6e87a18c8.mp4

## 🧐 About <a name = "about"></a>

The main idea is to create a minimal e-commerce website that can handle tasks such as loading product data from a third-party API and then showing it on the home page. Following that, we can add the products to the cart, from which we can remove them if we no longer require them. And finally, we can checkout or make a payment using the Razorpay payment gateway in test mode.

This project improved my understanding of the Redux toolkit, which is used for state management, as well as reduced my extra tasks, such as creating users, loading products, and working in the cart section.This project also provided me with the opportunity to work on Firebase authentication by integrating it with Gmail-based login.As the project progressed, the concept of react-routing became clearer.

The problem faced by me during the project is working with local storage, which has scope for improvement in this project. Other libraries can be used to help with the user persistence process.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

Please follow the instructions below to run the application on your local machine.

1. Clone the repo :

```
git clone https://github.com/AbhayKadam57/Ecommerce-Shopping-Website.git
```

2. Install the project's packages with the following commands:

```
npm install
```

3. Create an account with Firebase, start a new project in the console, and read the Firebase Doc(https://firebase.google.com/docs/web/setup?hl=en&authuser=0). The required configuration will be provided by Firebase, which you can add in the file ``firebase.js` path--> src/firebase.js.

4. Create an `.env` file in root folder. and add all of the following firebase configuration ids and keys to the.env file with their respective keys and values.

```javascript
REACT_APP_FIREBASE_ID = "Your firebase id";

REACT_APP_FIREBASE_AUTH_DOMAIN = "Your firebase auth Domain";

REACT_APP_FIREBASE_PROJECT_ID = "Your firebae project id";

REACT_APP_STORAGE_BUCKET = "Your storage bucket";

REACT_APP_MESSAGE_ID = "Your messaging sender id";

REACT_APP_APP_ID = "Your app Id";
```

then modify your configuration `firebase.js` as follows:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
};
```

4. Create an Razorpay account and consult Docs [Razorpay](https://razorpay.com/docs/#home-payments) for payment gateway integration. Razorpay will provide you with a unique ID, which you can use in the filename "cart.js."Add the razorpay Id to the '.env' file as follows:

```javascript
REACT_APP_RAZORPAY_ID = "Your Razorpay Id";
```

and replace the key in `cart.js`

```javascript
key: process.env.REACT_APP_RAZORPAY_ID;
```

5. Don't forget to add `.env` in `.gitignore`

6. Finally, to run the project, use the following command:

```
    npm start
```

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJs](https://beta.reactjs.org/) - JavaScript Library
- [FakeStoreAPI](https://fakestoreapi.com/) - API for Product details.
- [Firebase](https://console.firebase.google.com/) - User authentication
- [Razorpay](https://razorpay.com/) - Payment Gateway
- [React-razorpay](https://www.npmjs.com/package/react-razorpay)- Payment gateway Library

## ✍️ Authors <a name = "authors"></a>

- [@AbhayKadam57](https://github.com/AbhayKadam57) - Idea & Initial work
