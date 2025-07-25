import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BookOpen, Users, Zap } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={true} />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            BandUp
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Персональный ИИ-ассистент для изучения письма, разговорной речи и математики. 
            Получайте индивидуальную помощь в обучении 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => navigate("/register")}
              className="btn-primary text-lg px-8"
            >
              Начать обучение
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn-secondary text-lg px-8"
            >
              Уже есть аккаунт
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Writing</h3>
            <p className="text-muted-foreground">
              Улучшайте навыки письма с персональными рекомендациями и упражнениями
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Speaking</h3>
            <p className="text-muted-foreground">
              Развивайте разговорные навыки с интерактивными диалогами и практикой
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Math</h3>
            <p className="text-muted-foreground">
              Решайте математические задачи с пошаговыми объяснениями
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;