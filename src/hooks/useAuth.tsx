import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка пользователя из localStorage при инициализации
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Функция для получения пользователей из localStorage
  const getUsers = (): User[] => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Функция для сохранения пользователей в localStorage
  const saveUsers = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Инициализация тестовых пользователей при первом запуске
  useEffect(() => {
    const users = getUsers();
    if (users.length === 0) {
      const testUsers: User[] = [
        {
          id: '1',
          name: 'Тестовый Пользователь',
          email: 'test@example.com',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Администратор',
          email: 'admin_4x7p',
          createdAt: new Date().toISOString(),
          isAdmin: true,
        }
      ];
      saveUsers(testUsers);
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const users = getUsers();
      
      // Проверка админского аккаунта
      if (email === 'admin_4x7p' && password === 'P@ssw0rd!9zQ') {
        const adminUser = users.find(u => u.email === 'admin_4x7p');
        if (adminUser) {
          setUser(adminUser);
          localStorage.setItem('user', JSON.stringify(adminUser));
          return { success: true };
        }
      }

      // Проверка обычного пользователя
      const user = users.find(u => u.email === email);
      if (!user) {
        return { success: false, error: 'Пользователь не найден' };
      }

      // Для демонстрации принимаем любой пароль для существующих пользователей
      // В реальном приложении здесь была бы проверка хеша пароля
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Ошибка входа' };
    }
  };

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const users = getUsers();
      
      // Проверка на существующий email
      if (users.find(u => u.email === email)) {
        return { success: false, error: 'Пользователь с таким email уже существует' };
      }

      // Создание нового пользователя
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      saveUsers(users);

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Ошибка регистрации' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 