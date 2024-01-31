import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 py-2"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-white h-5 w-5"></div>
      ) : (
        <>
          Submit{""}
        </>
      )}
    </button>
  );
}
