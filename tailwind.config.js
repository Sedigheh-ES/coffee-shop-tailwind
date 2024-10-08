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
        '4.5':'1.125rem',
        '30': '7.5rem',
        '25': "6.25rem",
        '50':"12.5rem"
        
      },
      container: {
          center: true,
          padding: {
          DEFAULT: "1rem",
          lg:"0.625rem"
        }
       
        
      },
       backgroundImage: {
          "home-mobile":"url(../images/headerBgMobile.webp)",
          "home-desktop":"url(../images/headerBgDesktop.webp)"
        },

    },
     screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
    plugins: [
      function ( { addVariant } ) {
        addVariant( 'child', '& > *' );
        addVariant( 'child-hover', '& > *:hover' );
      }
    ]
  
}
