import * as Pages from "../pages/pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Pages.HomePage,
  },
  {
    path: "/page1",
    exact: false,
    component: Pages.Page1,
  },
];

export default routes;
