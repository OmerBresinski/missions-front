import { Button } from "@/components/ui/button";
import { useTheme, ThemeProvider } from "@/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useOrganizations } from "./hooks/organization";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <ThemeChanger />
        <OrgList />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="default" onClick={toggleTheme}>
      Change theme
    </Button>
  );
};

const OrgList = () => {
  const { data, isLoading } = useOrganizations();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((org) => (
            <div key={org.id}>{org.name}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
