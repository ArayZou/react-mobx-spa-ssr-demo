import { createBrowserHistory } from 'history'
import { createMemoryHistory } from 'history';

const history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory()

export default history
