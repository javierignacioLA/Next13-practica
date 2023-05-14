'use client'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const LikeButton = () => {
    const [like, setLike] = useState(true)
  return (
    <button className='btn btn-primary' onClick={() => setLike(!like)}>
        {like? 'Me gusta': 'No me gusta'}
    </button>
  )
}

export default LikeButton