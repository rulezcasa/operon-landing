import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <Route>
          <main style={{ minHeight: "60vh", padding: "8rem 1.5rem 3rem" }}>
            <Helmet>
              <title>404 | Operon AI</title>
              <meta
                name="description"
                content="The page you are looking for could not be found."
              />
            </Helmet>
            <h1>404 - Page Not Found</h1>
          </main>
        </Route>
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
