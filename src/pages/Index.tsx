import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DonatSection from '@/components/DonatSection';
import NewsSection from '@/components/NewsSection';
import GuideSection from '@/components/GuideSection';
import ProfileSection from '@/components/ProfileSection';
import AdminPanel from '@/components/AdminPanel';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';

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
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <HeroSection setActiveTab={setActiveTab} />
        )}

        {activeTab === 'donate' && (
          <DonatSection 
            donatPackages={donatPackages}
            handlePayment={handlePayment}
          />
        )}

        {activeTab === 'news' && (
          <NewsSection news={news} />
        )}

        {activeTab === 'guide' && (
          <GuideSection />
        )}

        {activeTab === 'profile' && (
          <ProfileSection 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}

        {activeTab === 'admin' && isAdmin && (
          <AdminPanel 
            news={news}
            addNews={addNews}
            gameLogs={gameLogs}
          />
        )}

        <PrivacySection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;