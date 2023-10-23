import Image, { ImageProps } from "next/image"
import { ComponentProps } from "react"

const PromoBanner = ({ alt, ...props }: ImageProps) => {
    return (
        <Image
            height={0}
            width={0}
            className='h-auto w-full px-5'
            sizes='100vw'
            {...props}
            alt={alt}
        />
    )
}

export default PromoBanner