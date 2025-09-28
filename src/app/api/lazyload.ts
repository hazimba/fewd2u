"use client";
import { useState, useEffect } from "react";

const cache: Record<string, any> = {};

export function useLazyFetch(url: string, active: boolean) {
  console.log("cache", cache);
  const [data, setData] = useState<any>(cache[url] || null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (active && !cache[url] && !loading) {
      setLoading(true);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((json) => {
          cache[url] = json;
          setData(json);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url, active, loading]);

  return { data, loading, error };
}
