import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import { Layouts } from "../../helpers/types";
import "react-grid-layout/css/styles.css";

const ResponsiveGridProvider = WidthProvider(Responsive);

interface DashboardGridProps {
    layouts: Layouts;
    onLayoutChange: (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => void;
    children: React.ReactNode;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ layouts, onLayoutChange, children }) => {
    return (
        <ResponsiveGridProvider
            className="layout"
            isDraggable={true}
            isDroppable={true}
            layouts={layouts}
            breakpoints={{ md: 996 }}
            cols={{ md: 10 }}
            onLayoutChange={onLayoutChange}
        >
            {children}
        </ResponsiveGridProvider>
    );
};

export default DashboardGrid;
