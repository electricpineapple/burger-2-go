import { Outlet, useNavigate, useMatch } from "react-router";

export default function Layout() {
    const navigate = useNavigate()
    const isIndex = !!useMatch({ path: '/', end: true });

    return (
        <div>
            {!isIndex && (
                <button onClick={() => navigate(-1)}>{"<"} Back</button>
            )}
            <main>
                <Outlet />
            </main>
        </div>
    );
}