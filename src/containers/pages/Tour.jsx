 
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

    function Tour(){
        return(
            <Layout>
                <Navbar />
                <div className="pt-28">
                    Tour
                </div>
                <Footer />
       
            </Layout>
        )
    }
    export default Tour