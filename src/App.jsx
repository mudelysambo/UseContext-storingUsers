import AddUser from "./AddUser";
import { UsersContextProvider } from "./context";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";

const App=()=>{

  const users=[{id: 1, name:"sam"}, {id:2, name:"jane"}];
  return(
    <div className="app">
      <UsersContextProvider users={users}>
      <h2>Use Context with Hooks</h2>
      <div className="users-container">
      <UsersList/>
        <UserDetails/>
      </div>
        <AddUser/>
        </UsersContextProvider>
      
    </div>
  );

};
export default App;



