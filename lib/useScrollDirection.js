"use client"

import { useEffect, useState } from "react"

export default function useScrollDirection(threshold = 80) {
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > threshold) {
        if (currentScrollY < lastScrollY) {
          setVisible(true)   // scrolling up
        } else {
          setVisible(false)  // scrolling down
        }
      } else {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY, threshold])

  return visible
}
