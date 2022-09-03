import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Main from "../components/main";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    if (memberId) {
      router.push("/challenge");
    }
  }, [router]);

  return <Main />;
};

export default Home;
