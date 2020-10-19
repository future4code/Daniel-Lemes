import React from "react";
import styled from "styled-components";
import UserListPage from "./components/userListPage";
import CreateUserFormPage from "./components/createUserFormPage";


const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "createUserFormPage"
  };

  changePage = () => {
    this.state.currentPage === "createUserFormPage"
      ? this.setState({ currentPage: "userListPage" })
      : this.setState({ currentPage: "createUserFormPage" });
  };

  render () {
    const currentPage = () => {
      if (this.state.currentPage === "createUserFormPage") {
        return <CreateUserFormPage />;
      } else if (this.state.currentPage === "userListPage") {
        return <UserListPage />;
      }else if(this.state.currentPage === "createUserId"){
        return <userCreateId />
      }
    };

    return (
      <AppContainer>
        {currentPage()}
        <button onClick={this.changePage}>Trocar de página</button>
      </AppContainer>
    );
  }
}

export default App;
