import UserProvider from "./componetns3/UserContext";
import UserProfile from "./componetns3/UserProfile";



function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </>
  )
}

export default App;
