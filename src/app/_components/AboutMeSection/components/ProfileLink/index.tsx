import Link from 'next/link';

export const ProfileLink = ({ href, text }: { href: string; text: string }) => (
    <Link
        className="flex bg-[#ffffff8a] px-2 py-1 font-[600] rounded-md text-[#00000074] hover:opacity-60"
        href={href}
        target="_blank"
    >
        {text}
    </Link>
)