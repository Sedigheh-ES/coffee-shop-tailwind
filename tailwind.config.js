/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        },
      
      },
      boxShow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
       
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "vaziry-bold": "Vazir-Bold",
        "Armita-bold": "Armita-Black",
        "noto-bold": "noto-bold",
        "noto-light": "noto-light",
        "noto-medium": "noto-medium",
        "noto-regular": "noto-regular"
      },

      letterSpacing: {
        'tightest': '-0.065em',
      },
      spacing: {
        '30':'7.5rem',
      }
    },
  },
    plugins: [
      function ( { addVariant } ) {
        addVariant( 'child', '& > *' );
        addVariant( 'child-hover', '& > *:hover' );
      }
    ]
  
}
