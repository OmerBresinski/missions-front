import { useParams } from "@tanstack/react-router";
import {
  ExistingOrganizationForm,
  NewOrganizationForm,
} from "@/components/features/RegistrationForm";

export const AuthPage = () => {
  const { organizationId } = useParams({ from: "/auth/$organizationId" });

  return (
    <div className="flex h-full w-full justify-center pt-52">
      {organizationId ? (
        <ExistingOrganizationForm organizationId={organizationId} />
      ) : (
        <NewOrganizationForm />
      )}
    </div>
  );
};
