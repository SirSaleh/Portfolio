import { useEffect } from "react";
import { ReactNode } from 'react';

interface SkillItemProps {
    children: ReactNode;
    classNames: String;
    title?: String | null;
}

export default function SkillItem(props: SkillItemProps) {

    const ClassNames = "skill-box bg-white text-black m-1 " + props.classNames;
    const titleVal = props.title ? props.title : "";
    return (
    <span className={ClassNames} title={titleVal}>
        {props.children}
    </span>
  );
}