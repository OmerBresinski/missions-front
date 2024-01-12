import { ThemeProvider } from "@/providers/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageLayout } from "@/layout/PageLayout";
import { Navbar } from "@/components/features/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <PageLayout>
          <Navbar />
        </PageLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
