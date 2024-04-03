import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
