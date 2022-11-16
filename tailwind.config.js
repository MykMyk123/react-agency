module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        blob: "blob 5s  infinite  "
      },
      keyframes:{
        blob:{
          "0%":{
            transform:" translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: " translate(30px, -50px) scale(1.2)"
          },
          "66%":{
            transform: " translate(-20px, 20px) scale(0.8)"
          },
          "100%":{
            transform: " translate(0px, 0px) scale(1)"
          },
        }
      }
    },
    fontFamily:{
      "sans":['Poppins']
    },
    
    
  },
  colors:{
    "main-blue":"#2a74bf"
  },
  plugins: [],
}