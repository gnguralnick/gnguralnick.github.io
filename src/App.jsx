import './App.scss';
import LinkList from './components/LinkList/LinkList';

function App() {
  return (
    <div className="App">
      <div>
        <p>Under construction...</p>
        <LinkList>
          <a href='#' onClick={e => e.preventDefault()}>I'm a Link!</a>
        </LinkList>
      </div>
    </div>
  );
}

export default App;
