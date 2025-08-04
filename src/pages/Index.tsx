import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface LogEntry {
  id: number;
  player: string;
  action: string;
  timestamp: string;
  details: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: 'Обновление сервера v2.5',
      content: 'Добавлены новые локации, улучшена оптимизация и исправлены баги.',
      date: '2024-08-04',
      author: 'Администрация'
    },
    {
      id: 2,
      title: 'Акция на донат пакеты',
      content: 'Скидка 25% на все VIP пакеты до конца недели!',
      date: '2024-08-03',
      author: 'Администрация'
    }
  ]);
  
  const [gameLogs] = useState<LogEntry[]>([
    {
      id: 1,
      player: 'Tommy_Vercetti',
      action: 'Покупка автомобиля',
      timestamp: '2024-08-04 15:30:22',
      details: 'Купил Infernus за $240,000'
    },
    {
      id: 2,
      player: 'Carl_Johnson',
      action: 'Вход на сервер',
      timestamp: '2024-08-04 15:25:10',
      details: 'IP: 192.168.1.1'
    },
    {
      id: 3,
      player: 'Niko_Bellic',
      action: 'Покупка недвижимости',
      timestamp: '2024-08-04 15:20:45',
      details: 'Купил дом в Винвуде за $150,000'
    }
  ]);

  const donatPackages = [
    {
      name: 'Стартер',
      price: 299,
      features: ['$50,000 в игре', 'Стартовая машина', 'Базовые скины'],
      popular: false
    },
    {
      name: 'VIP Bronze',
      price: 599,
      features: ['$150,000 в игре', 'Премиум машина', 'VIP скины', 'Приоритет в очереди'],
      popular: false
    },
    {
      name: 'VIP Gold',
      price: 999,
      features: ['$300,000 в игре', 'Люксовая машина', 'Эксклюзивные скины', 'Приоритет VIP', 'Дом в подарок'],
      popular: true
    },
    {
      name: 'VIP Platinum',
      price: 1999,
      features: ['$500,000 в игре', 'Суперкар', 'Все скины', 'Максимальный приоритет', 'Пентхаус', 'Личный помощник'],
      popular: false
    }
  ];

  const handlePayment = (packageName: string, price: number) => {
    // Интеграция с AnyPay (заглушка)
    alert(`Переход к оплате пакета "${packageName}" за ${price}₽ через AnyPay`);
  };

  const addNews = (title: string, content: string) => {
    const newNews: News = {
      id: news.length + 1,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      author: 'Администратор'
    };
    setNews([newNews, ...news]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-600 via-navy-500 to-teal-600">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-orange/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-orbitron font-bold text-white">
                MIAMI <span className="text-orange">RP</span>
              </h1>
              <Badge className="bg-orange text-white font-semibold">ONLINE</Badge>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className="text-white hover:text-orange"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'donate' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('donate')}
                className="text-white hover:text-orange"
              >
                <Icon name="CreditCard" size={16} className="mr-2" />
                Донат
              </Button>
              <Button 
                variant={activeTab === 'news' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('news')}
                className="text-white hover:text-orange"
              >
                <Icon name="Newspaper" size={16} className="mr-2" />
                Новости
              </Button>
              <Button 
                variant={activeTab === 'guide' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('guide')}
                className="text-white hover:text-orange"
              >
                <Icon name="BookOpen" size={16} className="mr-2" />
                Как начать
              </Button>
              <Button 
                variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('profile')}
                className="text-white hover:text-orange"
              >
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
              {isAdmin && (
                <Button 
                  variant={activeTab === 'admin' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('admin')}
                  className="text-white hover:text-orange"
                >
                  <Icon name="Settings" size={16} className="mr-2" />
                  Админ
                </Button>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              {!isLoggedIn ? (
                <Button 
                  onClick={() => setIsLoggedIn(true)} 
                  className="bg-orange hover:bg-orange-600 text-white font-semibold"
                >
                  Войти
                </Button>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-white">Добро пожаловать!</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsAdmin(!isAdmin)}
                    className="text-white border-orange hover:bg-orange/20"
                  >
                    {isAdmin ? 'Выйти из админки' : 'Админ'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {activeTab === 'home' && (
          <div className="mb-12">
            <div 
              className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-cover bg-center"
              style={{ backgroundImage: `url('/img/3847cce5-5bdb-43b5-8ffa-b73c0a1f4cc1.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="ml-8 max-w-2xl">
                  <h2 className="text-5xl font-orbitron font-bold text-white mb-4 animate-slide-up">
                    ДОБРО ПОЖАЛОВАТЬ В
                    <br />
                    <span className="text-orange">MIAMI RP</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-6 animate-fade-in">
                    Лучший GTA 5 RP сервер с уникальными возможностями
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      size="lg" 
                      className="bg-orange hover:bg-orange-600 text-white font-bold px-8 py-3 animate-glow"
                      onClick={() => setActiveTab('guide')}
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      НАЧАТЬ ИГРАТЬ
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-white border-white hover:bg-white/20 px-8 py-3"
                      onClick={() => setActiveTab('donate')}
                    >
                      <Icon name="Star" size={20} className="mr-2" />
                      ДОНАТ
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-black/30 border-orange/20 text-white">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-orange" />
                  <h3 className="text-2xl font-bold">247</h3>
                  <p className="text-white/70">Игроков онлайн</p>
                </CardContent>
              </Card>
              <Card className="bg-black/30 border-orange/20 text-white">
                <CardContent className="p-6 text-center">
                  <Icon name="Trophy" size={32} className="mx-auto mb-2 text-teal" />
                  <h3 className="text-2xl font-bold">1,247</h3>
                  <p className="text-white/70">Игроков всего</p>
                </CardContent>
              </Card>
              <Card className="bg-black/30 border-orange/20 text-white">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-2 text-orange" />
                  <h3 className="text-2xl font-bold">127</h3>
                  <p className="text-white/70">Уникальных мест</p>
                </CardContent>
              </Card>
              <Card className="bg-black/30 border-orange/20 text-white">
                <CardContent className="p-6 text-center">
                  <Icon name="Zap" size={32} className="mx-auto mb-2 text-teal" />
                  <h3 className="text-2xl font-bold">99.8%</h3>
                  <p className="text-white/70">Аптайм сервера</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Donate Section */}
        {activeTab === 'donate' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
              ДОНАТ <span className="text-orange">ПАКЕТЫ</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {donatPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative bg-black/30 border-2 ${pkg.popular ? 'border-orange' : 'border-orange/20'} text-white hover:scale-105 transition-transform`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange text-white">
                      ПОПУЛЯРНЫЙ
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-orbitron">{pkg.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-orange">
                      {pkg.price}₽
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="mr-2 text-teal" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-orange hover:bg-orange-600 text-white font-semibold"
                      onClick={() => handlePayment(pkg.name, pkg.price)}
                    >
                      <Icon name="CreditCard" size={16} className="mr-2" />
                      КУПИТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-black/30 border-orange/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-orange">
                  <Icon name="Shield" size={24} className="mr-2" />
                  Информация об оплате
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Все платежи обрабатываются через безопасную платежную систему AnyPay. 
                  Мы принимаем карты, электронные кошельки и другие способы оплаты.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-teal">Способы оплаты:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Банковские карты (Visa, MasterCard)</li>
                      <li>• Электронные кошельки</li>
                      <li>• Мобильные платежи</li>
                      <li>• Криптовалюты</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-teal">Гарантии:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Мгновенная доставка</li>
                      <li>• Возврат средств в течение 24ч</li>
                      <li>• Техподдержка 24/7</li>
                      <li>• Защита данных SSL</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
              НОВОСТИ <span className="text-orange">СЕРВЕРА</span>
            </h2>
            
            <div className="space-y-6">
              {news.map((article) => (
                <Card key={article.id} className="bg-black/30 border-orange/20 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-orange">{article.title}</CardTitle>
                      <Badge variant="outline" className="text-teal border-teal">
                        {article.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-white/70">
                      Автор: {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{article.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Guide Section */}
        {activeTab === 'guide' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
              КАК НАЧАТЬ <span className="text-orange">ИГРАТЬ</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-black/30 border-orange/20 text-white text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange">Скачайте GTA 5</h3>
                  <p className="text-white/80">
                    Убедитесь, что у вас установлена лицензионная копия GTA 5 
                    через Steam, Epic Games или Rockstar Launcher
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-orange/20 text-white text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal">Установите RageMP</h3>
                  <p className="text-white/80">
                    Скачайте и установите RageMP клиент с официального сайта. 
                    Это обязательно для игры на нашем сервере
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-orange/20 text-white text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange">Подключитесь</h3>
                  <p className="text-white/80">
                    Добавьте наш сервер в избранное в RageMP и начните играть! 
                    IP: 185.169.134.83:22005
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/30 border-orange/20 text-white">
              <CardHeader>
                <CardTitle className="text-orange flex items-center">
                  <Icon name="Info" size={24} className="mr-2" />
                  Правила сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-teal">Основные правила:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Запрещен читерство и использование модов</li>
                      <li>• Уважайте других игроков</li>
                      <li>• Играйте по ролевой модели</li>
                      <li>• Не нарушайте игровую атмосферу</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-teal">Полезные команды:</h4>
                    <ul className="space-y-2 text-sm font-mono">
                      <li>• /help - список команд</li>
                      <li>• /me [действие] - описание действия</li>
                      <li>• /do [описание] - описание окружения</li>
                      <li>• /b [сообщение] - OOC чат</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Profile Section */}
        {activeTab === 'profile' && (
          <div className="animate-fade-in">
            {!isLoggedIn ? (
              <Card className="bg-black/30 border-orange/20 text-white max-w-md mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-orange">Вход в личный кабинет</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Никнейм" className="bg-black/20 border-orange/20 text-white" />
                  <Input type="password" placeholder="Пароль" className="bg-black/20 border-orange/20 text-white" />
                  <Button 
                    className="w-full bg-orange hover:bg-orange-600 text-white"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Войти
                  </Button>
                  <p className="text-center text-sm text-white/70">
                    Нет аккаунта? Создайте его в игре на сервере
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <h2 className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
                  ЛИЧНЫЙ <span className="text-orange">КАБИНЕТ</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-black/30 border-orange/20 text-white">
                    <CardHeader>
                      <CardTitle className="text-orange">Информация о персонаже</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Никнейм:</span>
                          <span className="text-orange">Tommy_Vercetti</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Уровень:</span>
                          <span className="text-teal">47</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Деньги:</span>
                          <span className="text-orange">$247,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Работа:</span>
                          <span>Таксист</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Организация:</span>
                          <span>Нет</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/30 border-orange/20 text-white">
                    <CardHeader>
                      <CardTitle className="text-orange">Статистика</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Время в игре:</span>
                          <span className="text-teal">127 часов</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Последний вход:</span>
                          <span>Сегодня, 15:30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Репутация:</span>
                          <span className="text-orange">+95</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Предупреждения:</span>
                          <span>0/3</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Admin Panel */}
        {activeTab === 'admin' && isAdmin && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-8 text-center">
              АДМИН <span className="text-orange">ПАНЕЛЬ</span>
            </h2>
            
            <Tabs defaultValue="news" className="space-y-6">
              <TabsList className="bg-black/30 border-orange/20">
                <TabsTrigger value="news" className="text-white data-[state=active]:bg-orange">
                  Создать новость
                </TabsTrigger>
                <TabsTrigger value="logs" className="text-white data-[state=active]:bg-orange">
                  Логи игроков
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="news">
                <Card className="bg-black/30 border-orange/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-orange">Создание новости</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target as HTMLFormElement);
                      addNews(
                        formData.get('title') as string,
                        formData.get('content') as string
                      );
                      (e.target as HTMLFormElement).reset();
                    }} className="space-y-4">
                      <Input 
                        name="title"
                        placeholder="Заголовок новости" 
                        required
                        className="bg-black/20 border-orange/20 text-white"
                      />
                      <Textarea 
                        name="content"
                        placeholder="Содержание новости..." 
                        required
                        className="bg-black/20 border-orange/20 text-white min-h-32"
                      />
                      <Button type="submit" className="bg-orange hover:bg-orange-600 text-white">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Создать новость
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="logs">
                <Card className="bg-black/30 border-orange/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-orange">Логи игровых действий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-4">
                      <div className="flex space-x-4">
                        <Select>
                          <SelectTrigger className="bg-black/20 border-orange/20 text-white">
                            <SelectValue placeholder="Тип действия" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Все действия</SelectItem>
                            <SelectItem value="login">Входы</SelectItem>
                            <SelectItem value="purchase">Покупки</SelectItem>
                            <SelectItem value="trade">Торговля</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input 
                          placeholder="Поиск по игроку..."
                          className="bg-black/20 border-orange/20 text-white"
                        />
                      </div>
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow className="border-orange/20">
                          <TableHead className="text-orange">Игрок</TableHead>
                          <TableHead className="text-orange">Действие</TableHead>
                          <TableHead className="text-orange">Время</TableHead>
                          <TableHead className="text-orange">Детали</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {gameLogs.map((log) => (
                          <TableRow key={log.id} className="border-orange/20">
                            <TableCell className="text-teal">{log.player}</TableCell>
                            <TableCell>{log.action}</TableCell>
                            <TableCell className="text-white/70">{log.timestamp}</TableCell>
                            <TableCell className="text-white/70">{log.details}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Privacy Policy */}
        <Card className="mt-12 bg-black/30 border-orange/20 text-white">
          <CardHeader>
            <CardTitle className="text-orange flex items-center">
              <Icon name="Shield" size={24} className="mr-2" />
              Политика конфиденциальности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/80 mb-4">
              Мы серьезно относимся к защите ваших персональных данных. Вся информация, 
              которую вы предоставляете при регистрации и использовании нашего сервера, 
              защищена в соответствии с требованиями законодательства.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-teal">Мы собираем:</h4>
                <ul className="space-y-1 text-white/70">
                  <li>• Игровую статистику</li>
                  <li>• IP-адреса для безопасности</li>
                  <li>• Данные платежей (через AnyPay)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-teal">Мы НЕ передаем:</h4>
                <ul className="space-y-1 text-white/70">
                  <li>• Персональные данные третьим лицам</li>
                  <li>• Игровую переписку</li>
                  <li>• Финансовую информацию</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-orange/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p className="mb-4">© 2024 Miami RP. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-orange transition-colors">Discord</a>
            <a href="#" className="hover:text-orange transition-colors">VK</a>
            <a href="#" className="hover:text-orange transition-colors">Telegram</a>
            <a href="#" className="hover:text-orange transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;