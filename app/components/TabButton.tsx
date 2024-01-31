import React from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-green-500 border-b border-white"
        : "text-red-500";
    return (
        <button onClick={selectTab} className={buttonClasses}>
            <p className="px-2 font-semibold hover:text-green-500 text-base 2xl:text-lg">{children}</p>
        </button>
    );
};

export default TabButton;
