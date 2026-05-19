import { useMemo } from "react";
import styles from "../styles/TiledBackground.module.css";

import analyticsMagnifyingGlass from "../assets/logos/analytics-magnifying-glass.svg";
import appsAdd from "../assets/logos/apps-add.svg";
import browser from "../assets/logos/browser.svg";
import codeWindow from "../assets/logos/code-window.svg";
import crmComputer from "../assets/logos/crm-computer.svg";
import globe from "../assets/logos/globe.svg";
import layoutFluid from "../assets/logos/layout-fluid.svg";
import marketplace from "../assets/logos/marketplace.svg";
import site from "../assets/logos/site.svg";
import worldwideNetwork from "../assets/logos/worldwide-network.svg";

const logos = [
  analyticsMagnifyingGlass,
  appsAdd,
  browser,
  codeWindow,
  crmComputer,
  globe,
  layoutFluid,
  marketplace,
  site,
  worldwideNetwork,
];

const COLS = 25;
const ROWS = 20;

const TiledBackground = () => {
  const cells = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => ({
        id: i,
        src: logos[Math.floor(Math.random() * logos.length)],
      })),
    []
  );

  return (
    <div className={styles.background}>
      <div className={styles.grid}>
        {cells.map((cell) => (
          <img key={cell.id} src={cell.src} className={styles.icon} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TiledBackground;
