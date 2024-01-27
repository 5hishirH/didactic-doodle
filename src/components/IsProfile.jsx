"use client";

import useAuthContext from "@/utils/AuthProvider";
import { useRouter } from "next/navigation";
import Profile from "./Profile";

const IsProfile = () => {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  } else if (user) {
    return (
      <div>
        <Profile email={user.email} />
      </div>
    );
  } else {
    router.push("/login?from=profile");
  }
};

export default IsProfile;
