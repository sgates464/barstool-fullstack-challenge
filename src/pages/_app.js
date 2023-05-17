import BoxScoreHeader from "@/components/BoxScoreHeader";
import { Grommet, Page } from "grommet";

export default function App({ Component, pageProps }) {
  const theme = {
    name: "my theme",
    rounding: 8,
    spacing: 24,
    defaultMode: "light",
    global: {
      colors: {
        brand: {
          dark: "#7700cc",
          light: "#6600cc",
        },
        background: {
          dark: "#111111",
          light: "#FFFFFF",
        },
        "background-back": {
          dark: "#111111",
          light: "#EEEEEE",
        },
        "background-front": {
          dark: "#222222",
          light: "#FFFFFF",
        },
        "background-contrast": {
          dark: "#FFFFFF11",
          light: "#11111111",
        },
        text: {
          dark: "#EEEEEE",
          light: "#333333",
        },
        "text-strong": {
          dark: "#FFFFFF",
          light: "#000000",
        },
        "text-weak": {
          dark: "#CCCCCC",
          light: "#444444",
        },
        "text-xweak": {
          dark: "#999999",
          light: "#666666",
        },
        border: {
          dark: "#444444",
          light: "#CCCCCC",
        },
        control: "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "brand",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning",
      },
      font: {
        family: '"Lexend"',
        face: "/* vietnamese */\n@font-face {\n  font-family: 'Lexend';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLhneoCrCEswgqSP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lexend';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLlneoCrCEswgqSP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lexend';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLdneoCrCEswgg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* gurmukhi */\n@font-face {\n  font-family: 'Braah One';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfJxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Braah One';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Braah One';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Braah One';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      },
      active: {
        background: "active-background",
        color: "active-text",
      },
      hover: {
        background: "active-background",
        color: "active-text",
      },
      selected: {
        background: "selected-background",
        color: "selected-text",
      },
      control: {
        border: {
          radius: "8px",
        },
      },
      drop: {
        border: {
          radius: "8px",
        },
      },
    },
    chart: {},
    diagram: {
      line: {},
    },
    meter: {},
    tip: {
      content: {
        background: {
          color: "background",
        },
        elevation: "none",
        round: false,
      },
    },
    layer: {
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
    },
    button: {
      border: {
        radius: "8px",
      },
    },
    checkBox: {
      check: {
        radius: "8px",
      },
      toggle: {
        radius: "8px",
      },
    },
    radioButton: {
      check: {
        radius: "8px",
      },
    },
    formField: {
      border: {
        color: "border",
        error: {
          color: {
            dark: "white",
            light: "status-critical",
          },
        },
        position: "inner",
        side: "bottom",
      },
      content: {
        pad: "small",
      },
      disabled: {
        background: {
          color: "status-disabled",
          opacity: "medium",
        },
      },
      error: {
        color: "status-critical",
        margin: {
          vertical: "xsmall",
          horizontal: "small",
        },
      },
      help: {
        color: "dark-3",
        margin: {
          start: "small",
        },
      },
      info: {
        color: "text-xweak",
        margin: {
          vertical: "xsmall",
          horizontal: "small",
        },
      },
      label: {
        margin: {
          vertical: "xsmall",
          horizontal: "small",
        },
      },
      margin: {
        bottom: "small",
      },
      survey: {
        label: {
          margin: {
            bottom: "xsmall",
          },
          size: "medium",
          weight: 400,
        },
      },
      round: "8px",
    },
    heading: {
      font: {
        family: '"Braah One"',
      },
      extend: () => `margin-top: 12px; margin-bottom: 12px;`,
    },
    text: {
      xsmall: {
        size: "10px",
        height: "16px",
        maxWidth: "240px",
      },
      small: {
        size: "14px",
        height: "20px",
        maxWidth: "336px",
      },
      medium: {
        size: "18px",
        height: "24px",
        maxWidth: "432px",
      },
      large: {
        size: "26px",
        height: "32px",
        maxWidth: "624px",
      },
      xlarge: {
        size: "34px",
        height: "40px",
        maxWidth: "816px",
      },
      xxlarge: {
        size: "50px",
        height: "56px",
        maxWidth: "1200px",
      },
    },
    paragraph: {
      extend: () => `font-weight: 300; margin-top: 0;`,
      xxlarge: {
        size: "28px",
      },
    },
  };
  return (
    <Grommet theme={theme} background="background-back" full>
      <BoxScoreHeader />
      <Component {...pageProps} />
    </Grommet>
  );
}
