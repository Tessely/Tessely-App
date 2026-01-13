import { defineRecipe, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: "brand.primary",
        color: "white",
        _hover: {
          bg: "brand.primary",
          opacity: 0.8,
        }
      },
      danger: {
        bg: "brand.error",
        color: "white",
        _hover: {
          bg: "brand.error",
          opacity: 0.8,
        }
      },
    },
  },
})

const config = defineConfig({
  preflight: false,
  globalCss: {
    p: { margin: 0 },
    h1: { margin: 0 },
    h2: { margin: 0 },
    h3: { margin: 0 },
    h4: { margin: 0 },
    h5: { margin: 0 },
    h6: { margin: 0 },
    body: {
      margin: 0,
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
      text:{
        base:{
          margin:0,
        }
      },
    },
    tokens: {
      colors: {
        brand: {
          "primary": { value: "#003F72" },
          "selected": { value: "#E5F3FF" },
          "error": { value: "#932121"},
          "success": { value: "#28894C" },
          "border": { value: "#E4E4E7" },
          "greybg": { value: "#F8F8F8"},
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
