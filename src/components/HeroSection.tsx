import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
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
                className="bg-orange hover:bg-orange-600 text-white px-8 py-3"
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
  );
};

export default HeroSection;