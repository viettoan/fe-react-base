import PaymentIndex from "./pages";
import PaymentSuccess from "./pages/success";

export const paymentRoutes = {
    path: 'payments',
    children: [
        {
            index: true,
            element: <PaymentIndex/>,
        },
        {
            path: "success",
            element: <PaymentSuccess/>,
        }
    ],
};
