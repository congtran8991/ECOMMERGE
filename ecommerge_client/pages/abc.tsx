import { useSelector, useDispatch } from "react-redux";
import type { RootState } from '../store/store'
import { increment } from "../store/reducer/counterSlice"

export default function Home() {
  const count = useSelector((state: RootState) => state?.counter?.value)
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(increment())}>Click + {count}</button> 
  )
}
