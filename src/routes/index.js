const routes = [
  {
    path: "/",
    loader: () =>
      import(/* webpackChunkName: "home" */ "../components/Home.jsx"),
    label: "Home",
  },
  {
    path: "/about",
    loader: () =>
      import(/* webpackChunkName: "about" */ "../components/About.jsx"),
    label: "About",
    children: [
      {
        path: "/about/feature1",
        loader: () =>
          import(
            /* webpackChunkName: "feature1" */ "../components/Feature1.jsx"
          ),
        label: "Feature 1",
      },
      {
        path: "/about/feature2",
        loader: () =>
          import(
            /* webpackChunkName: "feature2" */ "../components/Feature2.jsx"
          ),
        label: "Feature 2",
      },
    ],
  },
];

export default routes;
