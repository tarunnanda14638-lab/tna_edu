// Since this is a frontend-only static website without a backend API (as instructed in notes), 
// we will export a mock hook just to fulfill the architectural pattern requirements 
// without actually calling non-existent API endpoints.
import { useState } from "react";

export function useSubmitBooking() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: any) => {
    setIsPending(true);
    setError(null);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true };
    } catch (err: any) {
      setError(err.message || "Failed to submit request");
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return { submit, isPending, error };
}
