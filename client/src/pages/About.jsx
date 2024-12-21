import { useTokenContext } from "../context/TokenContext"

const About = () => {
  const {user} = useTokenContext()
  return (
    <div>
      <h1>Hello, {user ? user.username: ""}</h1>
    </div>
  )
}

export default About