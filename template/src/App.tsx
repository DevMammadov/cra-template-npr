import React from "react";
import Routes from "routes/route";
import { createHistory } from "db";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = createHistory(history);

const App = () => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
};

export default App;
