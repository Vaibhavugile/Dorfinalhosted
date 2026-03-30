// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

// -----------------------------
// Your Firebase Project Config
// -----------------------------
const firebaseConfig = {
 apiKey: "AIzaSyBjebW9qO8lO8qTQmMTA4z5FPUOuNhHBe8",
  authDomain: "dressonrent-e51be.firebaseapp.com",
  projectId: "dressonrent-e51be",
  storageBucket: "dressonrent-e51be.firebasestorage.app",
  messagingSenderId: "606101530729",
  appId: "1:606101530729:web:69d0edad2c83628813daf8",
  measurementId: "G-759JN35XL3"
};

// -----------------------------
// Firebase Initialization
// -----------------------------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ explicitly bind Storage to your bucket (good even if config changes)
const storage = getStorage(app, "gs://dressonrent-e51be.firebasestorage.app");

// ✅ Functions in asia-south1 (matches your deploy)
const functions = getFunctions(app, "asia-south1");

// -----------------------------
// SAVE RENTAL ORDER FUNCTION
// -----------------------------
export const saveRentalOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      orderStatus: "Awaiting Payment",
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving rental order:", error);
    throw new Error("Failed to save order to the database: " + error.message);
  }
};

// -----------------------------
// CLOUD FUNCTION CALLS (region-aware)
// -----------------------------
export const checkPincodeServiceability = httpsCallable(
  functions,
  "checkPincodeServiceability"
);

// ✅ callable used by BulkProductsWizard CSV import
export const commitProductRow = httpsCallable(functions, "commitProductRow");

// -----------------------------
// EXPORTS FOR PROJECT USE
// -----------------------------
export { app, db, storage, functions };
