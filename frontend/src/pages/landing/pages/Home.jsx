import React from 'react'
import UserCard from '../components/UserCard'
const Home = () => {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <UserCard name="John Doe" email="jd@gmail.com" />
    </div>
  )
}

export default Home
