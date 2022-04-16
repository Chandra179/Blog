import React from "react";
import { useRouter } from "next/router";

export default function sidecharacterid() {
  const router = useRouter();
  console.log(router.query)
  const { characterid, sidecharacter, reviewid } = router.query;
  return (
    <div>
      {characterid} - {sidecharacter} - {reviewid}
    </div>
  );
}
