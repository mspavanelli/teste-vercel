import { useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  function handleAddCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>Contador!</h2>

      <hr/>

      <button type="button" onClick={handleAddCounter}>
        +
      </button>

      <p>Valor: {counter}</p>
    </div>
  );
};

const Index = () => {
  return <Contador />;
};

export default Index;
