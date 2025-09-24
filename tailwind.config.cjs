// tailwind.config.cjs
module.exports = {
    content: [
      // "./pages/**/*.{html,md,mdx,js,jsx,ts,tsx}",
  
      // optional: useful if you have Jekyll or template includes/layouts
      // "./_includes/**/*.html",
      // "./_layouts/**/*.html",
      // "./**/*.html",

      "./index.html",
      "./about/index.html",
      "./projects/index.html",
      "./blog/index.html",
      "./contact/index.html",
    ],
    theme: {
      extend: {}
    },
    plugins: []
  };
  