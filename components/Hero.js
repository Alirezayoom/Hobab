import { useState } from "react";
import classes from "./Hero.module.css";

import Form from "./Form";
import PlusIcon from "./icons/PlusIcon";
import DarkModeIcon from "./icons/DarkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";
import AboutIcon from "./icons/AboutIcon";
import About from "./About";

export default function Hero() {
  const [dark, setDark] = useState(true);
  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <>
      <div className={classes.hero}>
        <div className={classes.topIcons}>
          <div onClick={() => setDark(!dark)}>
            {dark ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
          <div className={classes.info} onClick={() => setInfo(!info)}>
            <AboutIcon />
          </div>
        </div>
        <div className={classes.title}>Hobab</div>
        <div className={classes.description}>
          <div>Write what in your mind is.</div>
          <div>A sentence, poute, quote or anything else.</div>
        </div>
        <button className={classes.button} onClick={() => setAdd(!add)}>
          <span className={classes.plus}>
            <PlusIcon />
          </span>
          Add
        </button>
      </div>

      {add && <Form onAdd={() => setAdd(!add)} />}
      {info && <About onclick={() => setInfo(!info)} />}
    </>
  );
}
