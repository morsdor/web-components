import "./App.css";
// import Card from "./Card/Card.tsx";
// import Dialog from "./Dialog/Dialog.tsx";
import Sidebar, {
  SidebarItemGroup,
  SidebarItemLabel,
  SiderbarItem,
  SiderbarItemIcon,
} from "./SideBar/Sidebar.tsx";

// import Signup from "./Signup/Signup.tsx";
// import Input from "./Input/Input.tsx";
// import styles from "./App.module.css";

import Searchbar from "./Searchbar/Searchbar.tsx";

function App() {
  const handleOnClick = (ev) => {
    console.log(ev);
  };

  return (
    <div className="app">
      <Sidebar>
        <SidebarItemGroup onClick={handleOnClick}>
          <SiderbarItem onClick={handleOnClick}>
            <SiderbarItemIcon onClick={handleOnClick}>Icon</SiderbarItemIcon>
            <SidebarItemLabel onClick={handleOnClick}>
              Label In the first go
            </SidebarItemLabel>
          </SiderbarItem>
        </SidebarItemGroup>

        <SidebarItemGroup>
          <SiderbarItem>
            <SiderbarItemIcon>Icon</SiderbarItemIcon>
            <SidebarItemLabel>Label 2</SidebarItemLabel>
          </SiderbarItem>
        </SidebarItemGroup>
      </Sidebar>

      <div className="main-content">
       <Searchbar />
      </div>
    </div>
  );
}

export default App;
