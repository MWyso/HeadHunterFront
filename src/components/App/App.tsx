import React, {useEffect, useState} from 'react';
import {LoginView} from "../../views/LoginView";
import {useAuth} from "../../hooks/useAuth";
import {TemporaryUserEntity, UserContext} from "../../contexts/user.context";
import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "../PrivateRoute/PrivateRoute";
import {AdminFileUploadView} from "../../views/AdminFileUploadView";
import {AdminAddHrView} from "../../views/AdminAddHrView";
import {PasswordReset} from "../PasswordReset/PasswordReset";
import {DashboardView} from "../../views/DashboardView";
import {DashboardContainer} from "../common/DashboardContainer";
import {UserRole} from "../../types/UserRole";

export const App = () => {
    const {error, findUser, loading} = useAuth();
    const [user, setUser] = useState<TemporaryUserEntity | null>(null);

    useEffect(() => {
        (async () => {
            console.log(user);
            await findUser();
        })();
    }, [user]);

    return <UserContext.Provider value={{
        user,
        setUser,
        error,
        isLoading: loading,
    }}>
        <DashboardContainer>
            {/*<TempModal userName={userName}/>*/}
            <Routes>
                <Route path="/" element={<LoginView/>}/>
                <Route path='/reset-password' element={<PasswordReset/>}/>
                <Route path="/dashboard" element={<PrivateRoute outlet={<DashboardView/>}/>}/>

                <Route
                    path="/add-students"
                    element={
                        <PrivateRoute
                            outlet={<AdminFileUploadView/>}
                            accessFor={[UserRole.Admin]}
                        />
                    }
                />

                <Route
                    path="/add-hr"
                    element={
                        <PrivateRoute
                            outlet={<AdminAddHrView/>}
                            accessFor={[UserRole.Admin]}
                        />
                    }
                />

                {/*<Route*/}
                {/*    path='/change-cv'*/}
                {/*    element={*/}
                {/*        <PrivateRoute */}
                {/*            outlet={< xxxx />} */}
                {/*            accessFor={[UserRole.Student]}/>*/}
                {/*    }*/}
                {/*/>*/}

                {/*<Route path='/see-cv'/>  to chyba jako zwykły dashboard dla usera?*/}
                {/*<Route path='/got-employed'/> to chyba nie musi być osobna ścieżka, tylko sam fetch na BE*/}

            </Routes>
        </DashboardContainer>
    </UserContext.Provider>
};
