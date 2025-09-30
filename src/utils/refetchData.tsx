import { db } from "@/app/firebase/config";
import { Employee } from "@/types";
import { getDocsFromCache, collection, getDocs } from "firebase/firestore";

// to be amend
const refetch = async ({
  forceServer = false,
}: { forceServer?: boolean } = {}) => {
  setLoading(true);
  setError(null);

  try {
    if (!forceServer) {
      const cachedSnapshot = await getDocsFromCache(
        collection(db, "Users")
      ).catch(() => null);
      if (cachedSnapshot && !cachedSnapshot.empty) {
        const cachedEmployees = cachedSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Employee[];
        console.log("Serving from cache");
        setEmployees(cachedEmployees);
        setLoading(false);
        return;
      }
    }

    // server fetch
    const serverSnapshot = await getDocs(collection(db, "Users"));
    const serverEmployees = serverSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Employee[];
    console.log("Serving from server");
    setEmployees(serverEmployees);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
