"use client"

interface contactBarProps {
}

export default function ContactBar(props: contactBarProps) {
    return (
        <address className="not-italic items-end flex flex-row md:flex-col justify-between md:justify-between h-full text-center text-lg md:text-sm select-none bg-black text-white bg-opacity-50">
            <div className="opacity-0">
                left-head
            </div>
            <div className="h-full flex flex-col justify-center md:justify-end">
                <ul className="!list-none flex flex-row md:flex-col text-center !text-left">
                <li>
                    <a className="underline" href="mailto:animatorsaleh@gmail.com">&#x1F582; <span className="hidden md:inline">animatorsaleh@gmail.com</span></a>
                </li>
                    <li><a href="tel:+989197246908">📞<span className="hidden md:inline">+989197246908</span></a></li>
                </ul>
            </div>
        </address>
  );
}
