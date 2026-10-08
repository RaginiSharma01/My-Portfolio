import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: "AIzaSyBVX2QxsuM9TVFuDcMWHPhGg0QZsuvO35w",
  authDomain: "myportfolio-4da91.firebaseapp.com",
  projectId: "myportfolio-4da91",
  storageBucket: "myportfolio-4da91.firebasestorage.app",
  messagingSenderId: "1024424887481",
  appId: "1:1024424887481:web:ab9a042bc9d30bf5f44768",
  measurementId: "G-VXDV5CYYQ8"
};

export const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported in this environment
  });
}
