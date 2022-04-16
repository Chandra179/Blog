import React from "react";
import { useRouter } from "next/router";

export default function character() {
  const router = useRouter();
  console.log(router.query)
  const { characterid } = router.query;
  return (
    <div>
      {characterid}
    </div>
  );
}
