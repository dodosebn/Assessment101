import React from "react";
import { ProductMaps } from "./ProductsMaps";

import UseCloth from "@/app/utils/useCloth";

const MainPro = () => {
  return (
  <UseCloth whereWeAreImportingFrom={ProductMaps}/>
  );
};

export default MainPro;
