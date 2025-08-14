import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Brain, Zap, Target, Shield, Clock, Users, Lightbulb, ArrowRight } from "lucide-react";

const AIInfoPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Искусственный интеллект",
      description: "Наши ИИ-ассистенты используют передовые технологии машинного обучения для персонализированной помощи в обучении."
    },
    {
      icon: Zap,
      title: "Мгновенные ответы",
      description: "Получайте подробные объяснения и решения задач в реальном времени, 24/7."
    },
    {
      icon: Target,
      title: "Персонализированный подход",
      description: "ИИ адаптируется под ваш уровень знаний и стиль обучения для максимальной эффективности."
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Ваши данные защищены и не передаются третьим лицам. Полная конфиденциальность обучения."
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Точные ответы",
      description: "ИИ анализирует ваш вопрос и дает наиболее подходящий ответ"
    },
    {
      icon: "📚",
      title: "Обширные знания",
      description: "Доступ к огромной базе знаний по всем предметам"
    },
    {
      icon: "⏰",
      title: "Экономия времени",
      description: "Не тратьте время на поиск информации - получайте ответы мгновенно"
    },
    {
      icon: "🔄",
      title: "Постоянное обучение",
      description: "ИИ постоянно улучшается и обновляет свои знания"
    }
  ];

  const subjects = [
    {
      name: "Writing",
      description: "Улучшите навыки письма с помощью ИИ-ассистента",
      icon: "✍️",
      features: ["Грамматика", "Стиль", "Структура текста", "Проверка ошибок"]
    },
    {
      name: "Speaking",
      description: "Развивайте разговорные навыки с ИИ-помощником",
      icon: "🗣️",
      features: ["Произношение", "Уверенность", "Диалоги", "Практика речи"]
    },
    {
      name: "Math",
      description: "Решайте математические задачи с пошаговыми объяснениями",
      icon: "📊",
      features: ["Алгебра", "Геометрия", "Тригонометрия", "Пошаговые решения"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={true} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ИИ-ассистенты для обучения
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Откройте для себя мощь искусственного интеллекта в образовании. 
            Персональные ИИ-ассистенты помогут вам освоить любые предметы быстрее и эффективнее.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
          >
            <Brain size={20} />
            Попробовать ИИ-ассистента
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Почему ИИ-ассистенты?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Преимущества ИИ-обучения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-accent rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Предметы для изучения
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{subject.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {subject.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {subject.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full mt-6 btn-primary"
                >
                  Начать изучение
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Как работает ИИ-ассистент?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Задайте вопрос
              </h3>
              <p className="text-muted-foreground">
                Напишите любой вопрос по предмету, который изучаете
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Получите ответ
              </h3>
              <p className="text-muted-foreground">
                ИИ проанализирует вопрос и даст подробное объяснение
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Изучайте дальше
              </h3>
              <p className="text-muted-foreground">
                Задавайте уточняющие вопросы для глубокого понимания
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы попробовать?</h2>
          <p className="text-lg mb-6 opacity-90">
            Присоединяйтесь к тысячам студентов, которые уже используют ИИ-ассистентов для обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
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
      </main>
    </div>
  );
};

export default AIInfoPage; 