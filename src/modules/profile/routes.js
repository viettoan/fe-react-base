import ProfileIndex from "./pages";

export const profileRoutes = {
    path: "profile",
    children: [
        {
            index: true,
            element: <ProfileIndex/>
        }
    ]
};

