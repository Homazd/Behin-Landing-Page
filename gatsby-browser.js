import "./src/styles/global.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "animate.css/animate.min.css"
import "./src/Fonts/MyCustomFont.woff2"
import tailwindConfig from "./tailwind.config"

if (!tailwindConfig.theme.extend) {
    tailwindConfig.theme.extend = {}
  }
tailwindConfig.theme.extend.fontFamily["my-font"] = ["MyCustomFont", "sans-serif"]