import Bar from "./Bar";

export default {
    title: 'Bar',
    component: Bar,
};

export const Primary = () => {
    return <Bar></Bar>
};

export const Secondary = () => {
    return <Bar text={"WELL"}></Bar>
};