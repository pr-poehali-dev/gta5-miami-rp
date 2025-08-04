import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrivacySection: React.FC = () => {
  return (
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
  );
};

export default PrivacySection;