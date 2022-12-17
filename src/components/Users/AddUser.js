import styles from './AddUser.module.css'
import Card from '../UI/Card'

const AddUser = () => {
  return (
    <div>
      <label>Username</label>
      <input className={styles.input}/>
      <Card />
    </div>
  )
}

export default AddUser
