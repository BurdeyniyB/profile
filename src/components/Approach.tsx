import { useState } from "react";
import style from "../styles/Approach.module.css";

const Approach = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <div className={style.aboutUsWrapper}>
      <div className={style.aboutUsContainer}>
        <div className={style.dividerLine}></div>

        <div className={style.howWeWorkSection}>
          <div className={style.howWeWorkHeader}>
            <h3>How I Work</h3>
          </div>

          <div className={style.howWeWorkGrid}>
            <div
              className={style.workStep}
              onMouseEnter={() => setHoveredStep("contact")}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={style.stepNumber}>01</div>
              <h4 className={style.stepTitle}>Contact</h4>
              <div className={style.stepIllustration}>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 140 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.contactIllustration}
                >
                  <rect
                    x="15"
                    y="20"
                    width="110"
                    height="100"
                    rx="8"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="25"
                    y="30"
                    width="90"
                    height="12"
                    rx="3"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <rect
                    x="28"
                    y="33"
                    width={hoveredStep === "contact" ? "40" : "0"}
                    height="6"
                    rx="2"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.6s ease 0.2s" }}
                  />
                  <rect
                    x="25"
                    y="48"
                    width="90"
                    height="12"
                    rx="3"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <rect
                    x="28"
                    y="51"
                    width={hoveredStep === "contact" ? "50" : "0"}
                    height="6"
                    rx="2"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.6s ease 0.4s" }}
                  />
                  <rect
                    x="25"
                    y="66"
                    width="90"
                    height="30"
                    rx="3"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <rect
                    x="28"
                    y="69"
                    width={hoveredStep === "contact" ? "60" : "0"}
                    height="4"
                    rx="2"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.6s ease 0.6s" }}
                  />
                  <rect
                    x="28"
                    y="76"
                    width={hoveredStep === "contact" ? "55" : "0"}
                    height="4"
                    rx="2"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.6s ease 0.8s" }}
                  />
                  <rect
                    x="28"
                    y="83"
                    width={hoveredStep === "contact" ? "45" : "0"}
                    height="4"
                    rx="2"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.6s ease 1.0s" }}
                  />
                  <rect
                    x="25"
                    y="102"
                    width="90"
                    height="14"
                    rx="4"
                    fill={
                      hoveredStep === "contact"
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.1)"
                    }
                    style={{ transition: "fill 0.4s ease 1.2s" }}
                  />
                  <rect
                    x="50"
                    y="106"
                    width={hoveredStep === "contact" ? "40" : "0"}
                    height="6"
                    rx="2"
                    fill="rgba(0,0,0,0.3)"
                    style={{ transition: "width 0.6s ease 1.4s" }}
                  />
                </svg>
              </div>
              <p className={style.stepDescription}>
                Reach out through our contact form or schedule a consultation.
                We&apos;ll discuss your project requirements and create
                something amazing together.
              </p>
            </div>

            <div
              className={style.workStep}
              onMouseEnter={() => setHoveredStep("development")}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={style.stepNumber}>02</div>
              <h4 className={style.stepTitle}>Development</h4>
              <div className={style.stepIllustration}>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 140 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.codeIllustration}
                >
                  <rect
                    x="10"
                    y="15"
                    width="120"
                    height="110"
                    rx="6"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <circle cx="25" cy="25" r="4" fill="rgba(255,100,100,0.3)" />
                  <circle cx="35" cy="25" r="4" fill="rgba(255,200,100,0.3)" />
                  <circle cx="45" cy="25" r="4" fill="rgba(100,200,100,0.3)" />
                  <rect
                    x="15"
                    y="35"
                    width="50"
                    height="10"
                    rx="2"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <rect
                    x="68"
                    y="35"
                    width="50"
                    height="10"
                    rx="2"
                    fill="rgba(255,255,255,0.05)"
                  />
                  <text
                    x="18"
                    y="54"
                    fontSize="6"
                    fill="rgba(255,255,255,0.3)"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    1
                  </text>
                  <text
                    x="18"
                    y="60"
                    fontSize="6"
                    fill="rgba(255,255,255,0.3)"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    2
                  </text>
                  <text
                    x="18"
                    y="66"
                    fontSize="6"
                    fill="rgba(255,255,255,0.3)"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    3
                  </text>
                  <text
                    x="18"
                    y="72"
                    fontSize="6"
                    fill="rgba(255,255,255,0.3)"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    4
                  </text>
                  <rect
                    x="20"
                    y="52"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="32"
                    y="52"
                    width={hoveredStep === "development" ? "40" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.5s ease 0.1s" }}
                  />
                  <rect
                    x="75"
                    y="52"
                    width={hoveredStep === "development" ? "30" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.5s ease 0.2s" }}
                  />
                  <rect
                    x="20"
                    y="58"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="32"
                    y="58"
                    width={hoveredStep === "development" ? "35" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.5s ease 0.3s" }}
                  />
                  <rect
                    x="70"
                    y="58"
                    width={hoveredStep === "development" ? "25" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.5s ease 0.4s" }}
                  />
                  <rect
                    x="20"
                    y="64"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="32"
                    y="64"
                    width={hoveredStep === "development" ? "45" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.5s ease 0.5s" }}
                  />
                  <rect
                    x="20"
                    y="70"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="32"
                    y="70"
                    width={hoveredStep === "development" ? "30" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                    style={{ transition: "width 0.5s ease 0.6s" }}
                  />
                  <rect
                    x="65"
                    y="70"
                    width={hoveredStep === "development" ? "20" : "0"}
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.25)"
                    style={{ transition: "width 0.5s ease 0.7s" }}
                  />
                  <rect
                    x="87"
                    y="70"
                    width="2"
                    height="8"
                    fill="rgba(255,255,255,0.8)"
                    className={
                      hoveredStep === "development" ? style.cursor : ""
                    }
                    style={{
                      opacity: hoveredStep === "development" ? 1 : 0,
                      transition: "opacity 0.3s ease 0.8s",
                    }}
                  />
                </svg>
              </div>
              <p className={style.stepDescription}>
                We handle all development stages from designing fundamental UI
                components to integrating and setting up 3rd-party frameworks.
              </p>
            </div>

            <div
              className={style.workStep}
              onMouseEnter={() => setHoveredStep("delivery")}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={style.stepNumber}>03</div>
              <h4 className={style.stepTitle}>Delivery</h4>
              <div className={style.stepIllustration}>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 140 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.deliveryIllustration}
                >
                  <rect
                    x="20"
                    y="25"
                    width="35"
                    height="35"
                    rx="6"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M25 30 L37.5 37.5 L25 45 Z"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="40"
                    y="35"
                    width="12"
                    height="3"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="40"
                    y="42"
                    width="8"
                    height="3"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <path
                    d="M27 38 L32 43 L37 35"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="10"
                    strokeDashoffset={hoveredStep === "delivery" ? "0" : "10"}
                    style={{ transition: "stroke-dashoffset 0.5s ease 0.2s" }}
                  />
                  <rect
                    x="65"
                    y="25"
                    width="35"
                    height="35"
                    rx="6"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="70"
                    y="30"
                    width="25"
                    height="25"
                    rx="2"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <path
                    d="M70 30 L85 30 L85 40 L80 40 L80 55 L70 55 Z"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="73"
                    y="45"
                    width="12"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="73"
                    y="49"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <path
                    d="M72 38 L77 43 L82 35"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="10"
                    strokeDashoffset={hoveredStep === "delivery" ? "0" : "10"}
                    style={{ transition: "stroke-dashoffset 0.5s ease 0.4s" }}
                  />
                  <rect
                    x="110"
                    y="25"
                    width="20"
                    height="35"
                    rx="4"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <circle cx="120" cy="35" r="3" fill="rgba(255,255,255,0.2)" />
                  <rect
                    x="118"
                    y="42"
                    width="4"
                    height="8"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="123"
                    y="45"
                    width="4"
                    height="5"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <path
                    d="M113 38 L117 42 L121 35"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="10"
                    strokeDashoffset={hoveredStep === "delivery" ? "0" : "10"}
                    style={{ transition: "stroke-dashoffset 0.5s ease 0.6s" }}
                  />
                  <rect
                    x="40"
                    y="70"
                    width="60"
                    height="50"
                    rx="8"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="45"
                    y="75"
                    width="50"
                    height="40"
                    rx="4"
                    fill="rgba(255,255,255,0.08)"
                  />
                  <rect
                    x="50"
                    y="80"
                    width="12"
                    height="12"
                    rx="3"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <circle cx="56" cy="86" r="3" fill="rgba(255,255,255,0.2)" />
                  <rect
                    x="54"
                    y="90"
                    width="4"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="65"
                    y="82"
                    width="25"
                    height="3"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="65"
                    y="87"
                    width="20"
                    height="3"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="45"
                    y="75"
                    width="50"
                    height="4"
                    rx="1"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <circle cx="48" cy="77" r="1" fill="rgba(255,255,255,0.3)" />
                  <rect
                    x="50"
                    y="76"
                    width="8"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="85"
                    y="76"
                    width="6"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="50"
                    y="100"
                    width="40"
                    height="3"
                    rx="1.5"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <rect
                    x="50"
                    y="100"
                    width={hoveredStep === "delivery" ? "30" : "0"}
                    height="3"
                    rx="1.5"
                    fill="rgba(255,255,255,0.4)"
                    style={{ transition: "width 0.8s ease 0.8s" }}
                  />
                  <circle
                    cx="70"
                    cy="108"
                    r="8"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    style={{
                      opacity: hoveredStep === "delivery" ? 1 : 0,
                      transition: "opacity 0.3s ease 1.1s",
                    }}
                  />
                  <path
                    d="M67 108 L69 110 L73 105"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="10"
                    strokeDashoffset={hoveredStep === "delivery" ? "0" : "10"}
                    style={{ transition: "stroke-dashoffset 0.5s ease 1.1s" }}
                  />
                </svg>
              </div>
              <p className={style.stepDescription}>
                We assist you with App Store deployment, provide source code,
                and offer post-launch support to ensure your app succeeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
