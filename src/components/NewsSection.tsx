//
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface NewsSectionProps {
  news: News[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
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
  );
};

export default NewsSection;