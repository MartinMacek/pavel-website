// ContactLink component with arrow icon and custom text

export default function ContactLink({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 text-2xl">
            <ArrowRightIcon />
            {text}
        </div>
    );
}


//costom arrow right icon 
const ArrowRightIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    );
}