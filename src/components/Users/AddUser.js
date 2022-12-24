import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useState } from 'react'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const addUserHandler = (e) => {
    e.preventDefault()
    // console.log(e.target)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log('empty')
    }

    if (+enteredAge < 1) {
      console.log('enteredAge < 1')
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(Year)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
