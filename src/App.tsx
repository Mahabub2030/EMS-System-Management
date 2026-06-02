import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <p>This is the home page.</p>
      <Outlet />
    </div>
  );
}

export default App;
