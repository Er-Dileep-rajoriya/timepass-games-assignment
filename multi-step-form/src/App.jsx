import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="parent-container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </Provider>
  );
}

export default App;
