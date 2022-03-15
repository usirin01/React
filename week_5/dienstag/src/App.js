import {useState, useEffect} from "react";

const App = () => {

  const [userList, setUserList] = useState(null)

  useEffect(() => {
    getUserList()
  })

  const getUserList = async () => {
    const response = await fetch("http://localhost:3001/posts");
    const data = await response.json();
    setUserList(data);
  };
  if (userList !== null) {
    console.log("user list", userList);
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
