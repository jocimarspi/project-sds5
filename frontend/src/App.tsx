import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-primary py-3">Sales Dashboard</h1>

        <div className="row px-3" >
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucess Seller (%)</h5>
            <BarChart />          
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />          
          </div>
        </div>
        
        <div className="py-3" >
          <h2 className="text-primary">All sales</h2>
        </div>
        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;
