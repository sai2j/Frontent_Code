import React from "react";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <div className="parents">
        <Card
          user="Fiber Foods"
          age={18}
          img="https://plus.unsplash.com/premium_photo-1784611906097-e17e9d0f343e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Malik Dinner"
          age={21}
          img="https://plus.unsplash.com/premium_photo-1784611905984-e0b8cdb381f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};
export default App;
