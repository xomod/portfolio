import { createUseStyles } from 'react-jss'
import { hexToRgba } from "../../global";

export default createUseStyles(theme => ({
  "button": {
    "position": "relative",
    "border-radius": theme.borderRadius,
    "text-transform": "uppercase",
    "margin": theme.spacing,
    "padding": `${theme.spacing}px ${theme.spacing * 2}px`,
    "display": "inline-block",
    "user-select": "none",
    "cursor": "pointer",
    "border": "none",
    "outline": "none",

    "&.disabled": {
      "cursor": "initial"
    }
  },
  "variant-contained": {
    "background": theme.palette.primary.main,
    "color": theme.palette.primary.text,
    "box-shadow": "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    "transition": "all 255ms ease",

    "&:hover": {
      "boxShadow": "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
    },

    "&:focus": {
      "background": hexToRgba(theme.palette.primary.main, 0.98)
    },

    "&.disabled": {
      "background": theme.palette.disabled.main,
      "color": theme.palette.disabled.text,
      "box-shadow": "none",
    }
  },
  "variant-outlined": {
    "color": theme.palette.primary.main,
    "border-style": "solid",
    "border-color": theme.palette.primary.main,
    "border-width": "1px",
    "transition": "all 255ms ease",
    "background": "transparent",

    "&:hover": {
      "background": hexToRgba(theme.palette.primary.main, 0.15)
    },

    "&:active": {
      "background": hexToRgba(theme.palette.primary.main, 0.18)
    },

    "&:focus": {
      "background": hexToRgba(theme.palette.primary.main, 0.1)
    },

    "&.disabled": {
      "border-color": theme.palette.disabled.main,
      "color": theme.palette.disabled.main,
      "&:hover": { "background": "transparent" },
      "&:active": { "background": "transparent" },
      "&:focus": { "background": "transparent" },
    }
  },
  "variant-text": {
    "background": "transparent",
    "color": theme.palette.primary.main,
    "transition": "all 255ms ease",

    "&:hover": {
      "background": hexToRgba(theme.palette.primary.main, 0.15)
    },

    "&:active": {
      "background": hexToRgba(theme.palette.primary.main, 0.18)
    },

    "&:focus": {
      "background": hexToRgba(theme.palette.primary.main, 0.1)
    },

    "&.disabled": {
      "color": theme.palette.disabled.main,
      "&:hover": { "background": "transparent" },
      "&:active": { "background": "transparent" },
      "&:focus": { "background": "transparent" },
    }
  },
}))