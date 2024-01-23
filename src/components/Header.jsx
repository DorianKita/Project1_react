import reactImg from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  const index = Math.floor(Math.random() * max);
  return index;
}

export default function Header() {
  const description = reactDescription[genRandomInt(reactDescription.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
