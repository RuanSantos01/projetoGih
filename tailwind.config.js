module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "vertical-marquee": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }, // Move apenas até a metade, garantindo continuidade
        },
      },
      animation: {
        "vertical-marquee": "vertical-marquee 60s linear infinite", // Mantém o loop infinito com rotação contínua
      },
    },
  },
  plugins: [],
};
