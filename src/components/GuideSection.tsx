import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GuideSection: React.FC = () => {
  return (
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
  );
};

export default GuideSection;