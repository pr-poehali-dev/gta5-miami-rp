import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ProfileSectionProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
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
  );
};

export default ProfileSection;