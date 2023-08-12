import React, { useState, useEffect } from "react"

const useFirstMount = () => {
  const [isMount, setIsMount] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMount(true)
    }, 100)
  }, [])

  return {
    isMount,
  }
}

export default useFirstMount
