// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuotationForm from './components/QuotationForm';
import ComparisonTable from './components/ComparisonTable';

function App() {

  // Simulate an API response
const mockApiResponse = async (formData) => {
  // Simulate different quotes based on formData
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
              { id: 1, company: 'Company A', price: 500, coverage: 'Comprehensive' },
              { id: 2, company: 'Company B', price: 450, coverage: 'Third-Party, Fire, and Theft' },
              { id: 3, company: 'Company C', price: 600, coverage: 'Comprehensive' },
          ]);
      }, 1000);  // Simulate a 1-second API call delay
  });
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuotationForm />} />
        <Route path="/compare" element={<ComparisonTable />} />
      </Routes>
    </Router>
  );
}

export default App;
