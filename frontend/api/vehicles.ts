"use client";
import { useEffect, useState } from "react";

export function useVehicles() {
  const [vehicles, setVehicles] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("localhost:8080/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
        setLoading(false);
      });
  }, []);

  return { vehicles, isLoading };
}
