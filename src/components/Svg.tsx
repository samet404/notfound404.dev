import { type ComponentProps } from 'react'
import Image from 'next/image'
import { cn } from '../utils'

export const Svg = ({ src, className, alt, ...rest }: Props) => <Image src={`/images/svg/${src}.svg`} alt={alt} unoptimized={true} width={0} height={0} className={cn(className)} priority {...rest} />

type Props = ComponentProps<typeof Image>