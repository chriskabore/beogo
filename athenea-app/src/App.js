import './App.css';

const Greeting = props => <p>Hello {props.name}!</p>

const App = props => (
    <>
      <div>
        <h1>Athenea M&E</h1>
        <br/>
        <Greeting name="Christian" />
      </div>
    </>
);

export default App;
