"use client";

import { useCurrency } from "@/contexts/CurrencyContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 text-sm md:text-base text-gray-800 hover:text-gray-900 transition-colors focus:outline-none focus:ring-0"
        >
          <span>{currency === "USD" ? "$" : "₹"}</span>
          <span>{currency}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          onClick={() => setCurrency("USD")}
          className={currency === "USD" ? "bg-muted" : ""}
        >
          <span className="mr-2">$</span>
          <span>USD</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setCurrency("INR")}
          className={currency === "INR" ? "bg-muted" : ""}
        >
          <span className="mr-2">₹</span>
          <span>INR</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

