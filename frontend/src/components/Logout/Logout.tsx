import { Navigate } from "react-router"

export const Logout: React.FC = () => {
    return <Navigate to="/login" replace />
}