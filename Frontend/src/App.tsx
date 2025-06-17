
import './App.css';

import RouteApp from './routes/Route';
import ChatProvider from './contexts/ChatContext';

function App() {

  return (
    <>
      <ChatProvider>
        <RouteApp />
      </ChatProvider>
    </>
  )
}

export default App
