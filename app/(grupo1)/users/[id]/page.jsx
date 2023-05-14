import Link from "next/link"

const obtenerDatos = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return data
}

const User = async ({params}) => {
    const { id } = params
    const user = await obtenerDatos(id)
  return (
    <div> 
      <h4>{user.name}</h4>
      <p>{user.email} - {user.phone} {user.address.city}</p>
    </div>
  )
}

export default User