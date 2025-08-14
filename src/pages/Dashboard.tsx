import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PenTool, Mic, Calculator, BookOpen, Clock, TrendingUp, Award } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import TabNavigation from "../components/TabNavigation";
import ChatWindow from "../components/ChatWindow";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("writing");

  const tabs = [
    { id: "writing", label: "Writing", icon: PenTool },
    { id: "speaking", label: "Speaking", icon: Mic },
    { id: "math", label: "Math", icon: Calculator },
  ];

  // Проверка аутентификации
  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

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

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="flex-1 max-w-7xl mx-auto w-full p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Добро пожаловать, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Выберите предмет для изучения и начните обучение с ИИ-ассистентом
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Сегодня изучено</p>
                <p className="text-2xl font-bold">0 уроков</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Всего времени</p>
                <p className="text-2xl font-bold">0 часов</p>
              </div>
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Прогресс</p>
                <p className="text-2xl font-bold">0%</p>
              </div>
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Достижения</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Выберите предмет для изучения</h2>
          <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Chat Window */}
        <div className="h-[600px] pb-16 md:pb-0">
          <ChatWindow subject={activeTab} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;