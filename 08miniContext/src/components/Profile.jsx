import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h2>you are not logged in bro!!</h2>
  return (
    <div>
      <h2>welcome {user.name}</h2>
    </div>
  )
}

export default Profile
