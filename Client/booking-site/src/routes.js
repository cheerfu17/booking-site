import Admin from "./pages/Admin"
import Booking from "./pages/Booking"
import BookingPage from "./pages/BookingPage"
import Auth from "./pages/Auth"
import { ADMIN_ROUTE, BOOKING_NOTE_ROUTE, BOOKING_ROUTE, HALLS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE } from "./utils/consts"
import Users from "./pages/Users"
import Halls from "./pages/Halls"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BOOKING_ROUTE,
        Component: Booking
    },
    {
        path: BOOKING_NOTE_ROUTE + "/:id",
        Component: BookingPage
    },
    {
        path: USERS_ROUTE,
        Component: Users
    },
    {
        path: HALLS_ROUTE,
        Component: Halls
    }
]


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }

]