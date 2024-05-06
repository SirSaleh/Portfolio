"use client"

interface contactBarProps {
}

export default function ContactBar(props: contactBarProps) {
    return (
        <address className="not-italic items-end flex flex-row md:flex-col justify-between md:justify-between h-full text-center text-lg md:text-sm select-none bg-black text-white bg-opacity-50">
            <div className="opacity-0">
                left-head
            </div>
            <div className="">
                <ul className="!list-none flex flex-row md:flex-col text-center">
                <li>
                    <a className="text-sky-600 underline" href="mailto:animatorsaleh@gmail.com">&#x1F582; animatorsaleh@gmail.com</a>
                </li>
                    {/* <li><a href="tel:+989197246908">📞</a></li> */}
                </ul>
            </div>
        </address>
  );
}
