import Header from "../components/Header";

const Privacy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header showAuth={true} />
    <main className="flex-1 max-w-2xl mx-auto px-4 py-16 w-full">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Политика конфиденциальности</h1>
      <div className="space-y-4 text-muted-foreground text-base">
        <p>Платформа BandUp уважает вашу конфиденциальность и обеспечивает защиту ваших персональных данных.</p>
        <p>1. Мы собираем только минимально необходимые данные для предоставления сервиса.</p>
        <p>2. Ваши данные не передаются третьим лицам без вашего согласия.</p>
        <p>3. Все данные хранятся в защищённом виде и используются только для улучшения качества сервиса.</p>
        <p>4. Вы можете запросить удаление своих данных, обратившись в службу поддержки.</p>
        <p>5. Подробная информация доступна по запросу.</p>
      </div>
    </main>
  </div>
);

export default Privacy; 