import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
    /** rest of the code */
    plugins: [
        animate,
        setupInspiraUI
    ],
} satisfies Config;
