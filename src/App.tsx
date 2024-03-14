
import AddForm from "./components/AddForm";
import Container from "./components/Container";
import Header from "./components/Header";
import List from "./components/List";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <TodoContextProvider>
        <Container>
          <Header />
          <AddForm />
          <List />
        </Container>
      </TodoContextProvider>
    </div>
  );
}

export default App;
