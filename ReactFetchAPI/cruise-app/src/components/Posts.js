import React, { useState, useEffect } from 'react'

export default function Posts() {
  const [post, getPost] = useState([])

  const API = 'https://jsonplaceholder.typicode.com/posts';

  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <h2>JOHNSON pls Fetch Data with React & REST API </h2>
      <ul>
        {post.map((item, i) => {
          return <li key={i}>{item.title}</li>
        })}
      </ul>
    </>
  )
}