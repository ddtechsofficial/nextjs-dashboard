import { Inter, Caveat, Lusitana } from "next/font/google"
export const inter = Inter({
    subsets: ['latin']
})

export const caveat = Caveat({
    subsets: ['cyrillic'],
    weight: ["400", "700"]
})

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', "700"]
})