/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const PRIMARY = {
  main: "var(--primary-main)",
  border: "var(--primary-border)",
};

const ERROR = {
  150: "var(--error-150)",
  critical: "var(--error-critical)",
  100: "var(--error-100)",
  50: "var(--error-50)",
};

const WARNING = {
  150: "var(--warning-150)",
  100: "var(--warning-100)",
  50: "var(--warning-50)",
};

const SUCCESS = {
  150: "var(--success-150)",
  100: "var(--success-100)",
  50: "var(--success-50)",
};

const TEXT = {
  main: "var(--text-main)",
  main_2: "var(--text-main-2)",
  3: "var(--text-3)",
};

const SIDEBAR = {
  main: "var(--sidebar-main)",
};
const palette = {
  error: {
    ...ERROR,
  },
  success: {
    ...SUCCESS,
  },
  warning: {
    ...WARNING,
  },
  text: {
    ...TEXT,
  },
  sidebar: {
    ...SIDEBAR,
  },
  primary: {
    ...PRIMARY,
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      ...palette,
    },
  },
  plugins: [],
};
