import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;
  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let index = 0; index < LIST_SIZE; index++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "load"
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}

export default App;
