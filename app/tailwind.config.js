/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tontrac-orange': '#F97316',
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          tontrac: {
            "primary": "#F97316",
            "secondary": "#374151",
            "accent": "#1FB2A6",
            "neutral": "#1f2937",
            "base-100": "#111827",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
      ],
    }
  }