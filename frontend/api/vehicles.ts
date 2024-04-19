import { useEffect, useState } from "react";

export function Vehicles() {
  const [vehicle, setVehicle] = useState(null)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetch('localhost:8080/api/vehicles')
      .then((res) => res.json())
      .then((vehicle) => {
        setVehicle(vehicle)
        setLoading(false)
      })
  }, [])

  if (isLoading) {
    console.log('Loading...')
  }

  if (!vehicle) {
    console.log('No vehicle data')
  }
}
