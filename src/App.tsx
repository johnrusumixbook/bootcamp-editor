import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Editor from "./components/editor/editor";
import { rootReducer } from "./data/redux/rootReducer";
import "./App.css";
import thunk from "redux-thunk";
import { stateSyncMiddleware } from "./data/redux/stateSyncMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, stateSyncMiddleware))
);
function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Editor />
      </DndProvider>
    </Provider>
  );
}

export default App;
