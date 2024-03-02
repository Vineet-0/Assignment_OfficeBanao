import Header from './components/Header.jsx'
import BodyContent from './components/BodyContent.jsx'

function App() {
  return (
    <div className="flex-col w-full min-h-screen custom-scrollbar">
      <Header />
      <BodyContent className="flex-grow" />
    </div>
  );
}

export default App;
