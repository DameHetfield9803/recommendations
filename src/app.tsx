import { Router, Route } from "@solidjs/router";
import About from "./routes/about";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Home from "./routes";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
