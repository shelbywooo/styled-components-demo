// import  { css } from 'styled-components'

const modifierConfig = {
    // The functions receive the props of the component as the only argument.
    // Here, we destructure the theme from the argument for use within the modifier styling.
    // disabled: ({ theme }) => `
    //   // These styles are applied any time this modifier is used.
    //   background-color: ${theme.colors.chrome_400};
    //   color: ${theme.colors.chrome_100};
    // `,
  
    // // Alternatively, you can return an object with your styles under the key `styles`.
    // success: ({ theme }) => ({
    //   styles: `
    //     background-color: ${theme.colors.success};
    //   `,
    // }),
  
    // // Styled Components exports a `css` util that enables some nice linting and interpolation
    // // features. You can use it directly or with the `styles` object pattern.
    // warning: ({ theme }) => css`
    //   background-color: ${theme.colors.warning};
    // `,
  
    large: () => `
      font-size: 40px;
    `,
  };

  export default modifierConfig;