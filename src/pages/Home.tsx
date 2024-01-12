import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <div className="flex flex-col w-full h-full pt-40 items-center gap-5">
      <h1 className="text-6xl font-bold">Missions</h1>
      <Button variant="default" size="lg">
        Register Your Organization
      </Button>
    </div>
  );
};
