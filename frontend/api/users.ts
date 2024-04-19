import { useEffect, useState } from "react";

export function Vehicles() {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetch('localhost:8080/api/users')
      .then((res) => res.json())
      .then((user) => {
        setUser(user)
        setLoading(false)
      })
  }, [])

  if (isLoading) {
    console.log('Loading...')
  }

  if (!user) {
    console.log('No user data')
  }
}
