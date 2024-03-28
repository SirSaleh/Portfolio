import { useEffect } from "react";

interface SkillItemProps {
    children: ReactNode;
    classNames: String;
    title: String;
}

export default function SkillItem(props: SkillItemProps) {

    const ClassNames = "skill-box bg-white text-black " + props.classNames;
    return (
    <span className={ClassNames} title={String(props.title)}>
        {props.children}
    </span>
  );
}
