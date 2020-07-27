import React, {Suspense} from "react";
const Hello  = React.lazy(()=>import("./compoents/Hello"));

function App() {
  return (
    <div>
      <h1>App</h1>
        <Suspense fallback={<div>Loading</div>}>
        <Hello />
        </Suspense>
    </div>
  );
}

export default App;
