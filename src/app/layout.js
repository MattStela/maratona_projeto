// src/app/layout.js
import Header from '@/components/header';
import '../app/globals.css';
import Footer from '@/components/footer';


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-10">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}
