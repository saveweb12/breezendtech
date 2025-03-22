"use client"
import { Provider } from "react-redux";
import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import store from "@/libAdmin/store";
import Footer from "@/components/Footer";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import NavUser from "@/components/nav-user";
import { Toaster } from "react-hot-toast";
import "../globals.css"


export default function DashboardLayout({ children }) {
    const queryClient = useMemo(() => new QueryClient(), []);
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <Toaster position="top-center" reverseOrder={false} />
                        <header className="flex w-full h-14 shrink-0 items-center gap-2 bg-muted/50 transition-[width,height] 
                        ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14 fixed z-50 px-2 shadow-sm">
                            <SidebarTrigger />
                            <div className="flex gap-4">
                                <NavUser />
                            </div>
                        </header>
                        <div className="flex flex-col min-h-screen px-3 bg-muted/50" >
                            <div className="flex-1">
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </QueryClientProvider>
                </Provider>
            </SidebarInset>
        </SidebarProvider>
    );
}