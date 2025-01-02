// src/app/layout.js
import Header from '@/components/header';
import '../app/globals.css';
import Footer from '@/components/footer';


export default function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4 pt-10">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}
