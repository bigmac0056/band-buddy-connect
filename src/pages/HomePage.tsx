import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BookOpen, Users, Zap, Target, Clock, Shield, Star, TrendingUp, Award, CheckCircle, ArrowRight, Play } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showAuth={true} />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          <span className="font-bold text-primary">Band</span>Up
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Персональный ИИ-ассистент для изучения Writing, Speaking и математики. 
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
              onClick={() => navigate("/ai-info")}
              className="btn-secondary text-lg px-8"
            >
              Об ИИ-ассистентах
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn-secondary text-lg px-8"
            >
              Уже есть аккаунт
            </button>
          </div>
        </div>

        {/* Why BandUp Section */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">Почему BandUp?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-accent rounded-xl p-6 text-center flex flex-col items-center">
              <Target className="w-8 h-8 text-accent-foreground mb-2" />
              <p className="font-medium text-lg text-foreground mb-2">Персонализированный подход</p>
              <p className="text-muted-foreground text-sm">ИИ подстраивается под ваш уровень и цели обучения</p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent-foreground mb-2" />
              <p className="font-medium text-lg text-foreground mb-2">Доступно 24/7</p>
              <p className="text-muted-foreground text-sm">Учитесь в любое время и в любом месте — без ограничений</p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent-foreground mb-2" />
              <p className="font-medium text-lg text-foreground mb-2">Безопасность и приватность</p>
              <p className="text-muted-foreground text-sm">Ваши данные защищены и не передаются третьим лицам</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-200">
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

        {/* Statistics Section */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">Наши достижения</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className="text-sm text-muted-foreground">Активных студентов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0%</div>
              <p className="text-sm text-muted-foreground">Успешных результатов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Доступность</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0★</div>
              <p className="text-sm text-muted-foreground">Рейтинг пользователей</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 animate-fade-in-up delay-400">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-foreground">Выберите предмет</h3>
              <p className="text-muted-foreground">
                Выберите Writing, Speaking или Math и начните обучение
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-foreground">Общайтесь с ИИ</h3>
              <p className="text-muted-foreground">
                Задавайте вопросы и получайте персональные ответы
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-foreground">Отслеживайте прогресс</h3>
              <p className="text-muted-foreground">
                Видите свой прогресс и улучшения в реальном времени
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Placeholder */}
        <div className="mt-16 animate-fade-in-up delay-500">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">Отзывы студентов</h2>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Отзывы появятся скоро
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Мы собираем отзывы от наших студентов. Скоро здесь появятся реальные истории успеха!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-white animate-fade-in-up delay-600">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-lg mb-6 opacity-90">
            Присоединяйтесь к тысячам студентов, которые уже улучшили свои навыки с BandUp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Начать бесплатно
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Уже есть аккаунт
            </button>
          </div>
        </div>

        {/* Test Accounts Section */}
        <div className="mt-16 p-6 bg-accent rounded-xl animate-fade-in-up delay-700">
          <h2 className="text-xl font-semibold text-center mb-4 text-foreground">Тестовые аккаунты</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-background rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-2">Обычный пользователь:</h3>
              <p className="text-muted-foreground">Email: <span className="font-mono">test@example.com</span></p>
              <p className="text-muted-foreground">Пароль: <span className="font-mono">любой</span></p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-2">Администратор:</h3>
              <p className="text-muted-foreground">Логин: <span className="font-mono">admin_4x7p</span></p>
              <p className="text-muted-foreground">Пароль: <span className="font-mono">P@ssw0rd!9zQ</span></p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              Используйте эти аккаунты для тестирования функциональности. 
              В реальном приложении здесь будет система регистрации и аутентификации.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full border-t border-border py-6 text-center text-xs text-muted-foreground bg-background animate-fade-in-up delay-300">
        <div className="max-w-4xl mx-auto px-4">
          <p>© {new Date().getFullYear()} BandUp. Все права защищены. Использование платформы регулируется <a href="/terms" className="underline hover:text-primary">пользовательским соглашением</a> и <a href="/privacy" className="underline hover:text-primary">политикой конфиденциальности</a>.</p>
          <p className="mt-2">BandUp — лицензированная образовательная платформа. Все материалы защищены законом.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;