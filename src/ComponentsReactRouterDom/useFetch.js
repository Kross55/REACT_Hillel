import {useEffect, useState} from "react";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function useFetch(method, path, initialData, transform = (res) => res) {
  const [status, setStatus] = useState('loading')
  const [data, setData] = useState(initialData)

  useEffect(() => {
    fetch(`${API_ENDPOINT}${path}`, { method })
      .then(res => res.json())
      .then(data => {
        setData(transform(data))
        setStatus('success')
      })
      .catch(() => {
        setStatus('failure')
      })
  }, [method, path])

  return {
    status,
    data
  };
}

export default useFetch;

//const { status, data } = useFetch('GET', '/users', [], (res) => { ...res /* pass it only if you need to transform data structure */})

//const { status, data } = useFetch('GET', '/albums', [], (res) => { ...res /* pass it only if you need to transform data structure */})