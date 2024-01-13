import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-5 pt-40">
      <h1 className="text-6xl font-bold">Missions</h1>
      <Button variant="default" size="lg">
        Register Your Organization
      </Button>
    </div>
  );
};
