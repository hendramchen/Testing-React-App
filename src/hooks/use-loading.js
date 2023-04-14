import { useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(false);

  const on = () => {
    setLoading(true);
  };

  const off = () => {
    setLoading(false);
  };

  return {
    loading,
    on,
    off,
  };
};
