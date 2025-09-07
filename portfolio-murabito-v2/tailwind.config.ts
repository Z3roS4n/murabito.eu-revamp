import type { Config } from "tailwindcss";

const config: Config = {
  theme: { 
    extend: { 
      keyframes: { 
        shine: { 
           '0%': { 'background-position': '100%' }, 
          '100%': { 'background-position': '-100%' }, 
         }, 
        "canopy-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "canopy-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      }, 
      animation: { 
        shine: 'shine 5s linear infinite', 
        "canopy-horizontal": "canopy-x var(--duration) infinite linear",
        "canopy-vertical": "canopy-y var(--duration) linear infinite",
      }, 
    }, 
  }, 
  plugins: [], 
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
       animation: {
        'scroll-up': 'scroll-up-smooth linear infinite',
        'scroll-down': 'scroll-down-smooth linear infinite',
      },
      keyframes: {
        'scroll-up-smooth': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-down-smooth': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },   
    },
  },
};

export default config;