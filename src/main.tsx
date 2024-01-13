import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "@/components/features/Navbar";
import { missionsQueryOptions } from "@/hooks/mission";
import { PageLayout } from "@/layout/PageLayout";
import * as Pages from "@/pages";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Router,
  Route,
  rootRouteWithContext,
  RouterProvider,
} from "@tanstack/react-router";
import { usersQueryOptions } from "@/hooks/user";

const queryClient = new QueryClient();

export const RootComponent = () => {
  return (
    <>
      <PageLayout>
        <Navbar />
        <Outlet />
      </PageLayout>
      <TanStackRouterDevtools />
    </>
  );
};

const rootRoute = rootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Pages.HomePage,
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

const missionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/missions",
  component: Pages.MissionsPage,
  loader: ({ context: { queryClient } }) =>
    Promise.allSettled([
      queryClient?.ensureQueryData(missionsQueryOptions),
      queryClient?.ensureQueryData(usersQueryOptions),
    ]),
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

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  missionsRoute,
  register,
]);

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>,
  );
}
