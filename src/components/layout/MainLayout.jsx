import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function MainLayout({children}){

    return(
        <div className="d-flex min-vh-100 app-layout">

            {/*LEFT SIDEBAR*/}
            <Sidebar/>

            {/*RIGHT SIDE*/}
            <div className="flex-grow-1">

                {/*TOPBAR*/}
                <Topbar/>

                {/*PAGE CONTENT */}
                <main className="p-4 app-content">
                    {children}
                </main>
                
            </div>
        </div>
    );
}

export default MainLayout;