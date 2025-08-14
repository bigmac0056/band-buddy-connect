import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Eye, EyeOff, Users, FileText, BarChart3, Flag, Image, Settings, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

type TabType = 'dashboard' | 'users' | 'progress' | 'reports' | 'media' | 'settings';

const AdminPage = () => {
  const navigate = useNavigate();
  const { user, login, logout, isLoading } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  // Проверка прав администратора
  useEffect(() => {
    if (!isLoading && user && !user.isAdmin) {
      navigate("/dashboard");
    }
  }, [user, isLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const result = await login(loginForm.email, loginForm.password);
    
    if (result.success) {
      // Проверка прав администратора будет выполнена в useEffect
    } else {
      setError(result.error || "Неверный логин или пароль");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Панель управления</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Всего пользователей</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Активных курсов</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Новых жалоб</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Flag className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Медиафайлов</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Image className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Управление пользователями</h2>
              <button className="btn-primary">Добавить пользователя</button>
            </div>
            <div className="bg-card border border-border rounded-lg">
              <div className="p-4 border-b border-border">
                <input
                  type="text"
                  placeholder="Поиск пользователей..."
                  className="w-full px-3 py-2 border border-input rounded-lg"
                />
              </div>
              <div className="overflow-x-auto">
                
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Аналитика прогресса</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Активность пользователей</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Активные пользователи</span>
                    <span className="font-semibold">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Новые регистрации</span>
                    <span className="font-semibold">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Среднее время обучения</span>
                    <span className="font-semibold">0 часа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Жалобы и отчеты</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Жалоба на пользователя</h3>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Новая</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">От: user123@example.com</p>
                <p className="mb-3">Пользователь нарушает правила сообщества, отправляет спам в комментариях.</p>
                <div className="flex gap-2">
                  <button className="btn-secondary text-sm">Просмотреть детали</button>
                  <button className="btn-secondary text-sm">Предупреждение</button>
                  <button className="btn-secondary text-sm">Заблокировать</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'media':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Управление медиафайлами</h2>
              <button className="btn-primary">Загрузить файл</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-card border border-border rounded-lg p-2">
                <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-xs text-center">guitar_lesson_1.mp4</p>
                <p className="text-xs text-muted-foreground text-center">15.2 MB</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-2">
                <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-xs text-center">music_theory.pdf</p>
                <p className="text-xs text-muted-foreground text-center">2.1 MB</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-2">
                <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-xs text-center">piano_chords.jpg</p>
                <p className="text-xs text-muted-foreground text-center">450 KB</p>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Настройки платформы</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Общие настройки</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Автомодерация комментариев</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Уведомления</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Email уведомления</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Push уведомления</span>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (!user || !user.isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header showAuth={false} />
        
        <main className="max-w-md mx-auto px-4 py-16">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Вход для администраторов</h1>
              <p className="text-muted-foreground">
                Войдите в панель администратора
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="admin-login" className="block text-sm font-medium text-foreground mb-2">
                  Логин администратора
                </label>
                <input
                  type="text"
                  id="admin-login"
                  value={loginForm.email}
                  onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                  required
                  className="w-full h-12 px-4 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="admin_4x7p"
                />
              </div>

              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-foreground mb-2">
                  Пароль администратора
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="admin-password"
                    value={loginForm.password}
                    onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                    required
                    className="w-full h-12 px-4 pr-12 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Введите пароль"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Войти в админ-панель
              </button>
            </form>

            <div className="mt-6 text-center">
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => navigate("/")}
              >
                На главную
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={false} />
      
      <div className="flex">
        {/* Боковая панель */}
        <aside className="w-64 bg-card border-r border-border min-h-screen">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Админ-панель</h2>
          </div>
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'dashboard' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <BarChart3 size={18} />
              Панель управления
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'users' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Users size={18} />
              Пользователи
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'progress' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <BarChart3 size={18} />
              Прогресс
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'reports' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Flag size={18} />
              Жалобы
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'media' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Image size={18} />
              Медиафайлы
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeTab === 'settings' ? 'bg-primary text-white' : 'hover:bg-muted'
              }`}
            >
              <Settings size={18} />
              Настройки
            </button>
          </nav>
          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-muted text-red-600"
            >
              <LogOut size={18} />
              Выйти
            </button>
          </div>
        </aside>

        {/* Основной контент */}
        <main className="flex-1 p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage; 