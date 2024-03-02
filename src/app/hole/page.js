"use client";

import { Link } from "@mui/material";
import { Howl } from "howler";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Hole() {
  const router = useRouter();
  useEffect(() => {
    const sound = new Howl({ src: "hole_universe_bgm.mp3" });

    // Handle the case where user navigates to this page directly where so sound won't play automatically then redirect to entrance
    if (!sessionStorage.getItem("octaverse")) {
      router.push("/");
    }
    sound.play(); // This is a client side application. User should already have interacted before reaching this page
  }, []);

  return (
    <main>
      <p>
        This shard is about cosmic themes and sounds, inspiration, and
        limitlessness.
      </p>

      <Link href="/">Back</Link>
    </main>
  );
}
