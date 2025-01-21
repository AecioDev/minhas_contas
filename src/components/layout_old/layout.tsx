import { Header } from "./header";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-4 flex gap-1">
        <aside className="w-64">
          <div className="fixed w-64 p-4 border-4 rounded-xl">
            <Sidebar />
          </div>
        </aside>
        <main className="w-full p-4  border-4 rounded-xl">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
