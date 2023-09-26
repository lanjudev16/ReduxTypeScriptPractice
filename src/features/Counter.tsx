import { useSelector, useDispatch } from 'react-redux'
import {increment } from '../features/webTheme/themeSlice'
import { RootState } from '../app/store'

export function Counter() {
  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{theme}</span>
      </div>
    </div>
  )
}