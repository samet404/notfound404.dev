import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
    return {
        p: (props) => <p className='break-words leading-8' {...(props as any)} />,

        a: (props) => (
            <Link
                target='_blank'
                {...(props as any)}
            />
        ),
        img: (props) => (
            <Image
                sizes="(min-width: 820px) calc(16.06vw + 615px), 93.6vw"
                width={500}
                height={400}
                className='rounded-lg object-contain w-full bg-[#ffffff43]'
                {...(props as ImageProps)}
            />
        ),
        ...components,
    }
}