import Link from "next/link"
import LikeButton from "./LikeButton"
const obtenerDatos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
}


export default async function FetchUsers() {
    const data = await obtenerDatos()
   
    return (
      <div>
        <h6>{data.map(user => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}><ul style={{margin: '5px'}}>{user.name}</ul></Link>
            <LikeButton />
          </div>
      ))}</h6>
      </div>
    )
  }