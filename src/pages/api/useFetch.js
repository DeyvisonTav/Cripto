import { useState, useEffect } from 'react'
import axios from 'axios'
export function useFetch() {
  const [data, setData] = useState([{}])
  const [isFetching, setIsFetching] = useState(true)

  const url = 'https://api.coincap.io/v2/assets'

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data.data)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])
  return { data, isFetching }
}