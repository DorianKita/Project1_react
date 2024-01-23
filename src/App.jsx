const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  const index = Math.floor(Math.random() * max);
  console.log(index);
  return index;
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomInt(reactDescription.length)]} React concepts
        you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
