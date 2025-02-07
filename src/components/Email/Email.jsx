import { useSelector, useDispatch } from "react-redux"
import { changeEmail } from '@/redux/userSlice'

export default function Email() {

  const dispatch = useDispatch()
  const email = useSelector((state) => state.user.email)

  const handleChange = (event) => {
    dispatch(changeEmail(event.target.value))
  }


  return (
    <input type="email" value={email} placeholder="email" onChange={handleChange} />
  )
}
