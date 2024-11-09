import { Provider } from 'react-redux'
import { store } from '../../store'

interface TeyvatologyContextProps {
  children: React.ReactNode
}

export default function TeyvatologyContext(props: TeyvatologyContextProps) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}