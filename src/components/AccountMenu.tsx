
import { useState } from 'react';
import { User, LogIn, UserPlus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { toast } = useToast();

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate login (in a real app, this would connect to your backend/Supabase)
    setIsLoggedIn(true);
    setUserEmail(loginForm.email);
    setIsOpen(false);
    toast({
      title: "Success",
      description: "Logged in successfully!",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    // Simulate registration
    setIsLoggedIn(true);
    setUserEmail(registerForm.email);
    setIsOpen(false);
    toast({
      title: "Success",
      description: "Account created successfully!",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setLoginForm({ email: '', password: '' });
    setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
    toast({
      title: "Success",
      description: "Logged out successfully!",
    });
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span className="text-sm">{userEmail}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="w-4 h-4 md:mr-2" />
          <span className="hidden md:inline">Logout</span>
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span className="hidden md:inline">Account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-600">
            {activeTab === 'login' ? 'Login' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex space-x-1 mb-6">
          <Button 
            variant={activeTab === 'login' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('login')}
            className="flex-1"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button 
            variant={activeTab === 'register' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('register')}
            className="flex-1"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Register
          </Button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="reg-email">Email</Label>
              <Input
                id="reg-email"
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="reg-password">Password</Label>
              <Input
                id="reg-password"
                type="password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                placeholder="Create a password"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AccountMenu;
