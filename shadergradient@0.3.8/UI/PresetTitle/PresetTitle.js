// src/UI/PresetTitle/PresetTitle.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { PRESETS } from "../../presets.js";
import { useUIStore } from "../../store.js";
import { TextAnimation } from "../../UI/index.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1890-YFMqHtNe2WIp/shadergradient/src/UI/PresetTitle/PresetTitle.module.css.js
var digest = "10170d4d056886460a8e5003b1a67f0e5d7a9ab6a650077d5c4af7da914e164c";
var css = `@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap");
._presetWrapper_nbez8_2 {
  width: 100vw;
  height: fit-content; }
  @media (max-width: 640px) {
    ._presetWrapper_nbez8_2 {
      width: fit-content; } }

._presetTitle_nbez8_9 {
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lora', serif;
  font-weight: 500; }

._slideBtns_nbez8_18 {
  display: flex;
  font-family: 'Inter', sans-serif; }

._slideBtn_nbez8_18 {
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -5px; }

._clickOnTitle_nbez8_30 {
  width: 100%;
  height: 50%;
  background: white;
  cursor: pointer;
  filter: blur(30px);
  border-radius: 100%; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var PresetTitle_module_css_default = { "presetWrapper": "_presetWrapper_nbez8_2", "presetTitle": "_presetTitle_nbez8_9", "slideBtns": "_slideBtns_nbez8_18", "slideBtn": "_slideBtn_nbez8_18", "clickOnTitle": "_clickOnTitle_nbez8_30" };

// src/UI/PresetTitle/PresetTitle.tsx
function PresetTitle({
  color = "#FF430A",
  title = "title",
  index = 0,
  fontSize = 120,
  isMobile = false,
  arrowOn = true
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const setActivePreset = useUIStore((state) => state.setActivePreset);
  const activeUp = () => {
    if (activePreset !== PRESETS.length - 1) {
      setActivePreset(activePreset + 1);
    } else {
      setActivePreset(0);
    }
  };
  const activeDown = () => {
    if (activePreset !== 0) {
      setActivePreset(activePreset - 1);
    } else {
      setActivePreset(PRESETS.length - 1);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetWrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetTitle,
    style: {
      display: index === activePreset ? "flex" : "none",
      gap: 25,
      flexDirection: isMobile === true ? "column" : "row"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "fit-content",
      height: "fit-content",
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      zIndex: 10
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.clickOnTitle,
    style: { opacity: 0 },
    whileHover: { opacity: 0.2 },
    onClick: activeUp
  }), /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.clickOnTitle,
    style: { opacity: 0 },
    whileHover: { opacity: 0.2 },
    onClick: activeDown
  })), /* @__PURE__ */ React.createElement(TextAnimation, {
    delay: 0,
    font: '"Lora", serif',
    color,
    fontSize,
    content: isMobile === true ? title.substring(3) : title
  })), /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.slideBtns,
    style: {
      color,
      fontSize: isMobile === true ? 22 : 30,
      display: arrowOn === false ? "none" : "flex"
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    whileHover: {
      backgroundColor: "rgba(255,255,255,0.15)"
    },
    onClick: activeDown,
    style: { width: isMobile ? 35 : 40, height: isMobile ? 35 : 40 }
  }, "\u2193"), /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    whileHover: {
      backgroundColor: "rgba(255,255,255,0.15)"
    },
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    onClick: activeUp,
    style: {
      width: isMobile === true ? 35 : 40,
      height: isMobile === true ? 35 : 40
    }
  }, "\u2191"))));
}
export {
  PresetTitle
};
