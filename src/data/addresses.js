import alameda from "./addresses/alameda.json";
import cupertino from "./addresses/cupertino.json";
import mountainView from "./addresses/mountain_view.json";
import paloAlto from "./addresses/palo_alto.json";
import sanFrancisco from "./addresses/san_francisco.json";
import sanMateo from "./addresses/san_mateo.json";
import sanJose from "./addresses/san_jose.json";
import santaClara from "./addresses/santa_clara.json";
import sunnyvale from "./addresses/sunnyvale.json";

const parsedAlameda = JSON.parse(alameda);
const parsedCupertino = JSON.parse(cupertino);
const parsedMountainView = JSON.parse(mountainView);
const parsedPaloAlto = JSON.parse(paloAlto);
const parsedSanFrancisco = JSON.parse(sanFrancisco);
const parsedSanMateo = JSON.parse(sanMateo);
const parsedSanJose = JSON.parse(sanJose);
const parsedSantaClara = JSON.parse(santaClara);
const parsedSunnyvale = JSON.parse(sunnyvale);

const addresses = parsedAlameda.concat(
	parsedCupertino,
	parsedMountainView,
	parsedPaloAlto,
	parsedSanFrancisco,
	parsedSanMateo,
	parsedSanJose,
	parsedSantaClara,
	parsedSunnyvale
);

export default addresses;
