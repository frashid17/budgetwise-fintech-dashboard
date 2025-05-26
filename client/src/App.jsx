import './index.css';
import { useLocation } from 'wouter';

function App() {
  const [, navigate] = useLocation();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          👋 Welcome to BudgetWise
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your personal finance dashboard starts here. Track expenses, set goals, and own your financial future.
        </p>

        <button
          onClick={handleGetStarted}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
