import { useEffect, useState } from "react";

function useIsSm() {
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const check = () => setIsSm(window.innerWidth < 768); // tailwind md = 768
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isSm;
}

export default useIsSm;
