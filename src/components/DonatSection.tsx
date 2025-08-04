import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DonatPackage {
  name: string;
  price: number;
  features: string[];
  popular: boolean;
}

interface DonatSectionProps {
  donatPackages: DonatPackage[];
  handlePayment: (packageName: string, price: number) => void;
}

const DonatSection: React.FC<DonatSectionProps> = ({ donatPackages, handlePayment }) => {
  return (
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
  );
};

export default DonatSection;