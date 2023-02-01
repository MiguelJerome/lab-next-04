import Header from "./Header";

export default function Layout({setPage, children}) {
    return <>
        <Header setPage={setPage} />
        
        {children}

        {/* Footer ici */}
    </>
}