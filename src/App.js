import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Technologies = () => {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Team</a>
    </div>
  );
};

export default App;
