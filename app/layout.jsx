
import "@styles/globals.css"
import Nav from "@components/Nav.jsx";
import Provider from "@components/Provider";
export const metadata = {
  title: "promtopiaaa",
  description: "Discove and share ai prompt",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
        <Nav/>
        {children}
        </main>
        </Provider>
      </body>
      
    </html>
  );
};

export default RootLayout;
