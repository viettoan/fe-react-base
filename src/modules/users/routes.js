import UserIndex from "./pages";
import UserCreate from "./pages/create";
import UserEdit from "./pages/edit";

export const userRoutes = {
    path: "users",
    children: [
        {
            index: true,
            element: <UserIndex/>,
        },
        {
            path: "create",
            element: <UserCreate/>,
        },
        {
            path: ":userId/edit",
            element: <UserEdit/>,
        },
    ]
};
