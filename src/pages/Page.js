import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AppRoutes from '../Routes/AppRoutes';
import Notification from '../common/Notification';
import { useGlobalUiContext } from '../Context/GlobalUiContextProvider';
const Page = () => {
    const {notification, clearNotification} = useGlobalUiContext();
    return (
        <div>
            <Header />
            <main>
                <AppRoutes />
            </main>
            <Footer />
            {notification.message && <Notification clearNotification={clearNotification} message={notification.message} type={notification.type} />}
        </div>
    );
};

export default Page;
