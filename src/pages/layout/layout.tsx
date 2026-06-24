// import { Sidebar } from "@shared/ui/sidebar/sidebar";
// import { TaskHeader } from "@shared/ui/task-header/task-header";

import { Suspense } from "react";
import styles from "./layout.module.css";
import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={styles.rootLayout}>
      {/* <Sidebar /> */}
      <div className={styles.sidebar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
      <div className={styles.rightPart}>
        {/* <TaskHeader title="Управление задачами" tagContent={"6 задач"} /> */}
        <h2>TaskHeader</h2>
        <main className={styles.main}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
