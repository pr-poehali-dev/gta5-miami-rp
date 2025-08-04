import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface LogEntry {
  id: number;
  player: string;
  action: string;
  timestamp: string;
  details: string;
}

interface AdminPanelProps {
  addNews: (title: string, content: string) => void;
  gameLogs: LogEntry[];
}

const AdminPanel: React.FC<AdminPanelProps> = ({ addNews, gameLogs }) => {
  return (
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
  );
};

export default AdminPanel;