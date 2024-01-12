import { Navbar } from "@/components/features/Navbar";
import { PageLayout } from "@/layout/PageLayout";
import { Home } from "@/pages/Home";
import { Outlet, Router, Route, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <PageLayout>
        <Navbar />
        <Outlet />
      </PageLayout>
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return (
      <div className="flex h-full w-full items-center justify-center">
        About Page
      </div>
    );
  },
});

const register = new Route({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: function About() {
    return (
      <div className="flex h-full w-full items-center justify-center">Auth</div>
    );
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, register]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
