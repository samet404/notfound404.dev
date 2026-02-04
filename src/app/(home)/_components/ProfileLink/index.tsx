import Link from 'next/link';
import type { ReactNode } from 'react';

export const ProfileLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
        className="flex font-[600] rounded-md text-[#ffffffc0] hover:opacity-60 items-center justify-center"
        href={href}
        target="_blank"
    >
        {children}
    </Link>
)