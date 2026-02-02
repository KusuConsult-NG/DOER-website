import DocsNavbar from "@/components/Layout/DocsNavbar";

export default function DevelopersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <DocsNavbar />
            <main style={{ paddingTop: "80px" }}>{children}</main>
        </>
    );
}
