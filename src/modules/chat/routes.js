import Chat from "./pages";

export const chatRoutes = {
    path: 'chat',
    children: [
        {
            index: true,
            element: <Chat/>,
        },
    ],
};

