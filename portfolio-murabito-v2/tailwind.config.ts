import type { Config } from "tailwindcss";

const config: Config = {
   theme: { 
     extend: { 
       keyframes: { 
         shine: { 
           '0%': { 'background-position': '100%' }, 
          '100%': { 'background-position': '-100%' }, 
         }, 
      }, 
       animation: { 
        shine: 'shine 5s linear infinite', 
       }, 
     }, 
    }, 
    plugins: [], 
};

export default config;