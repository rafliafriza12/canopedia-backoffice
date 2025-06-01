"use client";

import { useState, useEffect } from "react";

export function useLocalStorage(keyName: string, defaultValue: any) {
  // Create state variable - initialized with defaultValue
  const [storedValue, setStoredValue] = useState(defaultValue);

  // Only run localStorage operations on the client, after mount
  useEffect(() => {
    // Function to get value from localStorage
    const getStoredItem = () => {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      try {
        const item = window.localStorage.getItem(keyName);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.warn(`Error reading localStorage key "${keyName}":`, error);
        return defaultValue;
      }
    };

    // Set the state with the value from localStorage
    setStoredValue(getStoredItem());
  }, [keyName, defaultValue]);

  // Function to update both localStorage and state
  const setValue = (value: any) => {
    if (typeof window === "undefined") {
      console.warn("Cannot set localStorage value server-side");
      return;
    }

    try {
      // If value is a function, use the previous state
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save to state
      setStoredValue(valueToStore);

      // Save to localStorage
      window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${keyName}":`, error);
    }
  };

  return [storedValue, setValue];
}

// This is how you'd import it
// import { useLocalStorage } from './path-to-this-file';
