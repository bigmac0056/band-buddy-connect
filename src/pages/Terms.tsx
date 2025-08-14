import Header from "../components/Header";

const Terms = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header showAuth={true} />
    <main className="flex-1 max-w-2xl mx-auto px-4 py-16 w-full">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Пользовательское соглашение</h1>
      <div className="space-y-4 text-muted-foreground text-base">
        <p>Настоящее пользовательское соглашение регулирует условия использования платформы BandUp. Используя сервис, вы соглашаетесь соблюдать все правила и положения, изложенные в данном документе.</p>
        <p>1. Использование платформы разрешено только в образовательных целях.</p>
        <p>2. Пользователь обязуется не передавать свои учетные данные третьим лицам.</p>
        <p>3. Все материалы защищены авторским правом и не могут быть использованы без разрешения.</p>
        <p>4. Администрация платформы оставляет за собой право изменять условия соглашения.</p>
        <p>5. Подробные условия доступны по запросу.</p>
      </div>
    </main>
  </div>
);

export default Terms; 