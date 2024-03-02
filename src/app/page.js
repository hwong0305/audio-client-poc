"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import { Howl } from "howler";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(!sessionStorage.getItem("octaverse"));
  const [audio, setAudio] = useState();

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("octaverse", true);
    audio.play();
  };

  useEffect(() => {
    const sound = new Howl({ src: "hub-bg.mp3" });
    setAudio(sound);

    if (sessionStorage.getItem("octaverse")) {
      sound.play();
    }
  }, []);

  return (
    <main>
      <p>shut up blah blah blah</p>
      <Link href="/hole">Hole</Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Step into Octoverse</DialogTitle>
        <DialogContent>
          <DialogContentText>
            each of the eight doors unveils a part of Sera Ryu's musical journey
            and the stories behind her songs. Dive into realms where melodies
            intertwine with creativity. Click a door to explore the inspiration
            and process behind each piece.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
