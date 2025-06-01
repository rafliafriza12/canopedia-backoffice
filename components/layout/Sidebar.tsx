import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/UseAuth";
import API from "@/utils/API";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Manajemen Katalog", path: "/katalog", icon: "🌿" },
  { name: "Peta Distribusi", path: "/map", icon: "🗺️" },
];

export function Sidebar() {
  const pathname = usePathname();
  const auth = useAuth();

  const onLogout = () => {
    API.post(
      `/auth/logout`,
      {},
      {
        headers: {
          Authorization: `${auth.auth.token}`,
        },
      }
    )
      .then((res) => {
        auth.logout();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-64 h-screen bg-[#0B3B2D] text-white fixed left-0 top-0">
      <div className="p-4 border-b border-emerald-800">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-lg">CANOPEDIA</span>
        </Link>
      </div>

      <nav className="mt-6 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 ${
              pathname === item.path
                ? "bg-emerald-700 text-white"
                : "text-gray-300 hover:bg-emerald-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 w-full px-4">
        <button
          onClick={() => onLogout()}
          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-emerald-800 rounded-lg w-full"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
