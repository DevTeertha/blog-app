import React, { useContext } from 'react';
import { myContext } from '../../App';
import {
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const { userState } = useContext(myContext);
    const [user, setUser] = userState;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;