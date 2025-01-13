import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
 
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Hospital Food Delivery System</h1>
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate('/register')}
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* About Content */}
      <main className="container mx-auto p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Hospital Food Delivery System</h2>
          <p className="text-gray-700 mb-6">
            This platform helps hospital managers, pantry staff, and delivery personnel efficiently
            manage patient food delivery and preparation tasks.
          </p>
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image URL
            alt="Hospital Food Management"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
