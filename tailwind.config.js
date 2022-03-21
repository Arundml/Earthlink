module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'siteblue': '#007dba',
        'sitedarkblue': '#0056a0',
        'siteyellow': '#f68d1f',
        'sitedarkyellow': '#e98012',
        'siteblack': '#444444',
      },
      backgroundImage: {
        'banner': "url('./images/home-bg-illo.webp')",
        'footer-texture': "url('/img/footer-texture..webp')",
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'] 
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '21px' : '21px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '72px': '72px',
        
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '3': '3px',
    },
    boxShadow: {
      'plan': '0 1px 4px 2px rgb(0 0 0 / 10%)',
      'h-plan': '0 2px 4px 2px rgb(0 0 0 / 15%)',
    },
    maxWidth: {
      'sitecontainer': '1170px',
    }
 
    },
  },
  plugins: [],
}