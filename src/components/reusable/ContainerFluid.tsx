import { ReactNode } from "react";


const ContainerFluid = ({ children }: { children: ReactNode; }) => {
    return (
        <div className="w-full">
            {children}
        </div>
    );
};

export default ContainerFluid;