import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import CatalogList from "../catalogList/CatalogList";
import AppFooter from "../appFooter/AppFooter";


function App() {
   return (
      <div className="App">
         <div class="wrapper_devider">
            <div className="container">
               <AppHeader />
               <AppBanner />
               <CatalogList />
               <AppFooter />
            </div>
         </div>
      </div>
   );
}

export default App;
