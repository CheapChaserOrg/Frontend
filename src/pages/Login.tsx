import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../components/ui/use-toast';

const Login = () => {
  const { userType } = useParams();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: `Attempted to login as ${userType}`,
    });
  };

  // Dynamic welcome message and description based on user type
  const getWelcomeMessage = () => {
    switch (userType) {
      case 'guide':
        return {
          title: "Welcome back, Guide!",
          description: "Sign in to your account to continue guiding travelers.",
        };
      case 'traveler':
        return {
          title: "Welcome back, Traveler!",
          description: "Sign in to your account to continue your travel journey.",
        };
      case 'activity-provider':
        return {
          title: "Welcome back, Activity Provider!",
          description: "Sign in to your account to manage your activities.",
        };
      case 'hotel':
        return {
          title: "Welcome back, Hotel Partner!",
          description: "Sign in to your account to manage your hotel listings.",
        };
      default:
        return {
          title: "Welcome back!",
          description: "Sign in to your account to continue.",
        };
    }
  };

  const { title, description } = getWelcomeMessage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm mt-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {title}
          </h1>
          <p className="text-center text-gray-600 mb-8">
            {description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <a href={`/signup/${userType}`} className="text-blue-600 hover:underline">
              Sign up as {userType}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;