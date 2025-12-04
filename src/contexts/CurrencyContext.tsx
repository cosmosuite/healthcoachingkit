"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Currency = "USD" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdPrice: number) => string;
  getPrice: (usdPrice: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCY_STORAGE_KEY = "weddingkit_currency";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (stored === "USD" || stored === "INR") {
        return stored;
      }
    }
    return "USD";
  });

  // Detect location on every visit (even after manual selection)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect location using IP geolocation on every visit
    const detectLocation = async () => {
      try {
        // Using ipapi.co free API (no API key required for basic usage)
        const response = await fetch("https://ipapi.co/json/", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Location detection failed");
        }

        const data = await response.json();
        
        // Check if country is India
        if (data.country_code === "IN" || data.country_name === "India") {
          setCurrencyState("INR");
          localStorage.setItem(CURRENCY_STORAGE_KEY, "INR");
        } else {
          // Default to USD for all other countries
          setCurrencyState("USD");
          localStorage.setItem(CURRENCY_STORAGE_KEY, "USD");
        }
      } catch (error) {
        // On any error, default to USD
        console.log("Location detection failed, defaulting to USD:", error);
        setCurrencyState("USD");
        localStorage.setItem(CURRENCY_STORAGE_KEY, "USD");
      }
    };

    detectLocation();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    }
  }, [currency]);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
  };

  const formatPrice = (usdPrice: number): string => {
    if (currency === "INR") {
      return `₹${usdPrice === 9 ? 499 : Math.round(usdPrice * 55.44)}`;
    }
    return `$${usdPrice}`;
  };

  const getPrice = (usdPrice: number): number => {
    if (currency === "INR") {
      return usdPrice === 9 ? 499 : Math.round(usdPrice * 55.44);
    }
    return usdPrice;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, getPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

