import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { User, Settings, BookOpen, Clock, Award, Target, Edit, Save, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

interface Progress {
  subject: string;
  completed: number;
  total: number;
  lastActivity: string;
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");

  const [progress] = useState<Progress[]>([
    { subject: "Writing", completed: 0, total: 12, lastActivity: "Нет активности" },
    { subject: "Speaking", completed: 0, total: 10, lastActivity: "Нет активности" },
    { subject: "Math", completed: 0, total: 20, lastActivity: "Нет активности" }
  ]);

  const [achievements] = useState([
    { id: 1, title: "Первый урок", description: "Завершили первый урок", icon: "🎯", earned: false },
    { id: 2, title: "Неделя обучения", description: "Занимались 7 дней подряд", icon: "🔥", earned: false },
    { id: 3, title: "Грамматик", description: "Завершили курс грамматики", icon: "📝", earned: false },
    { id: 4, title: "Математик", description: "Завершили курс алгебры", icon: "📊", earned: false },
    { id: 5, title: "Оратор", description: "Завершили курс разговорной речи", icon: "🗣️", earned: false }
  ]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
    if (user) {
      setEditName(user.name);
    }
  }, [user, isLoading, navigate]);

  const handleSave = () => {
    // В реальном приложении здесь был бы API-запрос для обновления профиля
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(user?.name || "");
    setIsEditing(false);
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

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={true} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="text-2xl font-bold bg-background border border-input rounded px-2 py-1"
                    />
                    <button
                      onClick={handleSave}
                      className="p-1 text-green-600 hover:text-green-700"
                    >
                      <Save size={16} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-1 text-red-600 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-1 text-muted-foreground hover:text-foreground"
                    >
                      <Edit size={16} />
                    </button>
                  </div>
                )}
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground">
                  Участник с {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">0%</div>
              <p className="text-sm text-muted-foreground">Общий прогресс</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-2xl font-bold text-blue-500">0</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Завершенных уроков</h3>
            <p className="text-sm text-muted-foreground">Из 42 доступных</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-2xl font-bold text-green-500">0</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Часов обучения</h3>
            <p className="text-sm text-muted-foreground">За последний месяц</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-2xl font-bold text-yellow-500">0</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Достижения</h3>
            <p className="text-sm text-muted-foreground">Из 5 доступных</p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Прогресс по предметам</h2>
          <div className="space-y-4">
            {progress.map((item) => (
              <div key={item.subject} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.subject}</h3>
                    <p className="text-sm text-muted-foreground">
                      Последняя активность: {item.lastActivity}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-foreground">
                    {item.completed}/{item.total}
                  </div>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(item.completed / item.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border ${
                  achievement.earned
                    ? "bg-green-50 border-green-200"
                    : "bg-muted border-border opacity-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-medium text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage; 