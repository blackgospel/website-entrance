import { useEffect, useState } from 'react'
import useEntranceStore from 'zustands/stores/entrance'
import useInterval from './useInterval'

const useEntrance = () => {
  const [loading, setLoading] = useState(true)
  const { entranceMaxDelay, setMaxEntranceDelay } = useEntranceStore()

  const handleEntranceExit = () => setLoading(false)

  useInterval(handleEntranceExit, 2500)

  useEffect(() => {
    setMaxEntranceDelay()
  }, [])

  return { loading, entranceMaxDelay }
}

export default useEntrance
