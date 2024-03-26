import { MobileHeader } from "@/components/mobileheader"
import { Sidebar } from "@/components/sidebar"

interface MainLayoutProps{
    children:React.ReactNode
}
const MarketingLayout = ({children}:MainLayoutProps)=>{
    return (
        <>
            <MobileHeader/>
            <Sidebar className="hidden lg:flex"/>
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0 ">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default MarketingLayout