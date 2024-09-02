import React from 'react';

interface ChartWrapperProps {
    id: string;
    children: React.ReactNode;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ id, children }) => {
    return <div key={id}>{children}</div>;
};

export default ChartWrapper;
