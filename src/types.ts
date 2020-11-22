
interface routes {
    path: string;
    exact: boolean;
    component: React.ComponentClass;
    routes: routes[]
}
export interface BaseProps {
    routes: routes[]
}