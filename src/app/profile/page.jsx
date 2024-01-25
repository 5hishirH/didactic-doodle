"use client";

import useAuthContext from "@/utils/AuthProvider";
import { redirect, useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const { handleSignOut } = useAuthContext();
  const { loading, user } = useAuthContext();
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  } else if (user) {
    return (
      <div className="mt-24">
        <div>
          <h2></h2>
        </div>
        <button className="btn" onClick={handleSignOut}>
          sign out
        </button>
      </div>
    );
  } else {
    redirect("/login?from=profile");
  }
};

export default Profile;
