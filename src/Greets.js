import "./styles.css";

import React from "react";
/**
 * propsを子要素にわたす
 */
const Greets = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_) => (
        <p>
          Hello, {name}! {children}
        </p>
      ))}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <p>Greets.js propsを子要素にわたす</p>
      <Greets name="Patty" times={4}>
        <span role="img" aria-label="rabbit">
          🐰
        </span>
      </Greets>
    </div>
  );
}
