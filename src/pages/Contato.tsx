import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { BannerContato } from "../components/BannerContato";
import { FormContato } from "../components/FormContato";

export function Contato() {
  return (
    <div>
      <Nav />
      <BannerContato/>
      <FormContato/>
      <Footer />
    </div>
  );
}
