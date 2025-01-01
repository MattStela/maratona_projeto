// src/app/layout.js
import '../app/globals.css';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-20">
      {children}
    </div>
  );
}
