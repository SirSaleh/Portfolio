import { ReactNode } from 'react';

interface CreditProps {
    children: ReactNode;
}

export default function Credit(props: CreditProps) {

    return (
    <span className="bg-gray-900 absolute bottom-0 left-0 italic text-xs [&>a]:sky-600">
        {props.children}
    </span>
  );
}
