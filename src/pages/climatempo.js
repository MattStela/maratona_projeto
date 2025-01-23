import Layout from "@/app/layout";
import Graficos from "@/components/graficos";

export default function Climatempo() {
  return (
    <Layout>
      <div className="min-h-screen informativo flex flex-col items-center justify-center w-full text-center">
        <Graficos />
      </div>
    </Layout>
  );
}
