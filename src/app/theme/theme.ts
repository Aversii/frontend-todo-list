// theme.ts
export const theme = {
    colors: {
      primary: '#303443', // Cor primária
      secondary: '#1C202A', // Cor secundária
      background: '#12151E', // Cor de fundo
      text: '#eaeaea', // Cor do texto principal
      textSecondary: '#fff', // Cor do texto secundário
      border: '#eaeaea', // Cor das bordas
      error: '#ff0000', // Cor de erro
      success: '#28a745', // Cor de sucesso
      warning: '#ffc107', // Cor de alerta
      info: '#17a2b8', // Cor de informação
      gradient: 'linear-gradient(to right, #0062e6, #33aeff)', // Gradiente
    },
    typography: {
      fontFamily: "'Helvetica Neue', sans-serif", // Fonte principal
      fontWeightRegular: 400, // Peso regular da fonte
      fontWeightBold: 700, // Peso negrito da fonte
      fontSizeBase: '16px', // Tamanho base da fonte
      fontSizeHeading: '2rem', // Tamanho da fonte para headings
      lineHeightBase: '1.5', // Altura da linha base
    },
    spacing: {
      small: '8px', // Pequeno
      medium: '16px', // Médio
      large: '32px', // Grande
      xLarge: '64px', // Extra grande
    },
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
    },
    borders: {
      radius: '8px', // Raio de borda padrão
      width: '1px', // Largura da borda
      style: 'solid', // Estilo da borda
    },
    shadows: {
      light: '0px 2px 6px rgba(0, 0, 0, 0.1)', // Sombra leve
      medium: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Sombra média
      heavy: '0px 8px 24px rgba(0, 0, 0, 0.3)', // Sombra pesada
    },
    transitions: {
      default: 'all 0.3s ease-in-out', // Transição padrão
      fast: 'all 0.2s ease-in-out', // Transição rápida
    },
    zIndex: {
      modal: 1000, // Z-index para modais
      dropdown: 999, // Z-index para dropdowns
    },
  };
  
  export default theme;
  