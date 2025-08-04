import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isLoggedIn,
  setIsLoggedIn,
  isAdmin,
  setIsAdmin
}) => {
  return (
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
                  className={`text-white ${
                    isAdmin 
                      ? 'bg-red-600 hover:bg-red-700 border-red-500' 
                      : 'border-orange hover:bg-orange/20'
                  }`}
                >
                  {isAdmin ? 'Выйти из админки' : 'Админ'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;