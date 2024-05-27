import { ReactNode } from 'react';

interface SkillItemProps {
    children: ReactNode;
    classNames?: string | "";
    title?: string | null;
}

export default function SkillItem(props: SkillItemProps) {

    const ClassNames = "skill-box bg-white text-black m-1 w-fit h-fit " + props.classNames;
    const titleVal = props.title ? props.title : "";
    return (
    <span className={ClassNames} title={titleVal}>
        {props.children}
    </span>
  );
}
