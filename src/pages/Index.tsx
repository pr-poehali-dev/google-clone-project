import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  const mockResults = [
    {
      title: 'Википедия',
      url: 'https://ru.wikipedia.org',
      description: 'Свободная энциклопедия, которую может редактировать каждый. Миллионы статей на различные темы.',
    },
    {
      title: 'GitHub',
      url: 'https://github.com',
      description: 'Платформа для разработчиков. Хостинг кода, система контроля версий и совместная работа.',
    },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      description: 'Вопросы и ответы для программистов. Крупнейшее сообщество разработчиков.',
    },
    {
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
      description: 'Документация по веб-технологиям. HTML, CSS, JavaScript и другие веб-стандарты.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-700 hover:underline cursor-pointer">О проекте</span>
          <span className="text-sm text-gray-700 hover:underline cursor-pointer">Реклама</span>
        </div>
        <div className="flex items-center space-x-4">
          <Icon name="Grid3X3" className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
          <Button variant="outline" size="sm">Войти</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className={`${showResults ? 'pt-8' : 'pt-32'} px-4`}>
        {/* Logo */}
        <div className={`${showResults ? 'mb-8' : 'mb-8'} text-center`}>
          <div className={`${showResults ? 'text-4xl' : 'text-7xl'} font-normal mb-8`}>
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`${showResults ? 'max-w-2xl' : 'max-w-xl'} mx-auto mb-8`}>
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Найти в Google или введите URL"
              className="pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md focus:shadow-md transition-shadow"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
              <Icon name="Mic" className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
              <Icon name="Camera" className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
            </div>
          </div>
        </div>

        {/* Search Buttons */}
        {!showResults && (
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              onClick={handleSearch}
              className="px-6 py-3 text-sm hover:shadow-md"
            >
              Поиск в Google
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 text-sm hover:shadow-md"
            >
              Мне повезёт!
            </Button>
          </div>
        )}

        {/* Navigation Tabs */}
        {showResults && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex space-x-8 border-b border-gray-200">
              <button className="pb-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                <Icon name="Search" className="inline mr-2" size={16} />
                Все
              </button>
              <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Icon name="Image" className="inline mr-2" size={16} />
                Картинки
              </button>
              <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Icon name="Play" className="inline mr-2" size={16} />
                Видео
              </button>
              <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Icon name="Newspaper" className="inline mr-2" size={16} />
                Новости
              </button>
              <button className="pb-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Icon name="MoreHorizontal" className="inline mr-2" size={16} />
                Ещё
              </button>
            </div>
          </div>
        )}

        {/* Search Results */}
        {showResults && (
          <div className="max-w-2xl mx-auto">
            <div className="text-sm text-gray-600 mb-4">
              Результатов: примерно 1 234 567 890 (0,45 сек.)
            </div>
            
            <div className="space-y-6">
              {mockResults.map((result, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-1">
                    <Icon name="Globe" className="text-gray-400 mr-2" size={16} />
                    <span className="text-sm text-gray-600">{result.url}</span>
                  </div>
                  <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-1 group-hover:underline">
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" disabled className="text-gray-400">
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "ghost"}
                      size="sm"
                      className={page === 1 ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button variant="ghost" className="text-blue-600 hover:bg-blue-50">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {!showResults && (
        <footer className="absolute bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200">
          <div className="px-8 py-4">
            <div className="text-gray-600 text-sm mb-3">Россия</div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-6">
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Реклама</span>
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Для бизнеса</span>
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Как работает Поиск</span>
              </div>
              <div className="flex space-x-6">
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Конфиденциальность</span>
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Условия</span>
                <span className="text-gray-600 text-sm hover:underline cursor-pointer">Настройки</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;