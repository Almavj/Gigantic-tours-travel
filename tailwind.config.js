module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: ["Poppins", "Inter", "sans-serif"],
          body: ["Inter", "sans-serif"]
        },
        colors: {
          primary: {
            DEFAULT: '#ff7e5f', // Vibrant coral
            dark: '#feb47b',    // Soft orange
          },
          secondary: {
            DEFAULT: '#43cea2', // Aqua green
            dark: '#185a9d',    // Deep blue
          },
          accent: {
            DEFAULT: '#f7971e', // Golden yellow
            dark: '#ffd200',    // Bright yellow
          },
          night: {
            DEFAULT: '#232526', // Deep night
            light: '#414345',   // Lighter night
          },
        },
      },
    },
    plugins: [],
  }