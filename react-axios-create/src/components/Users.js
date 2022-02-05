import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Users() {
  const [items, setItem] = useState([])
  const [naveProp, initNameProp] = useState('')
  const URI = 'http://localhost:5555/users'
  const sendRequest = async () => {
    try {
      const res = await axios.get(URI)
      setItem(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    window.addEventListener('load', sendRequest)
    return () => {
      window.removeEventListener('load', sendRequest)
    }
  }, [items])
  const onFormSubmit = async (e) => {
    e.preventDefault()
    const post = { name: naveProp }
    try {
      const res = await axios.post(URI, post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  const removeUser = async (id) => {
    try {
      console.log('Item successfully deleted.')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={naveProp}
            placeholder="Add name"
            onChange={(e) => {
              initNameProp(e.target.value)
            }}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3 mb-4">
          Create
        </button>
      </form>
      <ul className="list-group">
        {items.map((res) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={res.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{res.name}</div>
                <small className="remove" onClick={() => removeUser(res.id)}>
                  Delete
                </small>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}