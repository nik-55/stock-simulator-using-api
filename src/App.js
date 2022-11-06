import Navbar from "./components/navbar/Navbar"
import BasicRoutes from "./routes/BasicRoutes";
import { AuthProvider } from "./contexts/AuthContext"
import "./helpers/chart"

const myDate = new Date(112160000);
console.log(myDate.getHours());

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <BasicRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
