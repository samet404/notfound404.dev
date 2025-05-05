import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const compileCode = (properties: ComponentProps<'code'>) => {
    const match = /language-(\w+)/.exec(properties.className || '')

    console.log('match', match)
    return match
        ? <SyntaxHighlighter
            language={match[1]}
            style={tomorrowNightBlue}
            PreTag="code"
            customStyle={{
                backgroundColor: 'transparent'
            }}
            {...properties as any}
        >
            {properties.children as any}
        </SyntaxHighlighter>
        : <code {...properties} />
}

export const useMDXComponents = (components: MDXComponents): MDXComponents => {

    return {
        p: (props) => <p className='break-words leading-8' {...(props as any)} />,

        code: (props) => compileCode(props),

        a: (props) => (
            <Link
                target='_blank'
                {...(props as any)}
            />
        ),
        img: (props) => (
            <Image
                sizes="(min-width: 820px) calc(16.06vw + 615px), 93.6vw"
                width={700}
                height={400}
                className='rounded-lg object-contain w-full bg-[#ffffff43]'
                {...(props as ImageProps)}
            />
        ),
        ...components,
    }
}