import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCheckAuthQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const { data, loading } = useCheckAuthQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.checkAuth) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
