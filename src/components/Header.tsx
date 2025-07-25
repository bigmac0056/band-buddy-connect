import { useNavigate, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";

interface HeaderProps {
  showAuth?: boolean;
}

const Header = ({ showAuth = true }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  const handleLogout = () => {
    // В реальном приложении здесь была бы логика выхода
    navigate("/");
  };

  return (
    <header className="bg-background border-b border-border px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Логотип */}
        <div 
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          BandUp
        </div>

        {/* Навигация */}
        <div className="flex items-center gap-4">
          {showAuth && !isDashboard && (
            <>
              <button
                onClick={() => navigate("/login")}
                className="btn-secondary"
              >
                Вход
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn-primary"
              >
                Регистрация
              </button>
            </>
          )}
          
          {isDashboard && (
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center gap-2"
            >
              <LogOut size={18} />
              Выход
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;