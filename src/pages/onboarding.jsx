import { useUser } from "@clerk/clerk-react";
import { BarLoader } from 'react-spinners'
import React from "react";

const Onboarding = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader width="100%" className="mb-4" color="#36d7b7" />
  }

  return <div>Onboarding</div>;
};

export default Onboarding;
