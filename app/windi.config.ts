import { defineConfig } from "windicss/helpers";




export default defineConfig({
    attributify: {
        prefix: "w",
        
    },
    theme:{
        extend: {
            colors: {
                yellow: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#eab308",
                    600: "#ca8a04",
                    700: "#a16207",
                    800: "#854d0e",
                    900: "#713f12",
                }
            }
        }
    }
    
})