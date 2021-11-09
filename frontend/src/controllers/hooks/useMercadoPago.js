import { useEffect, useState } from "react";
import useScript from "../hooks/useScript";

let mp = null;

export default function useMercadoPago() {
    const [resultPayment, setResultPayment] = useState(undefined);

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

   // useEffect(() => {
        if (MercadoPago && mp === null) {
            mp = new MercadoPago("TEST-b6d44444-b745-4dce-915b-b47f5410c762");
        }
  //  }, [MercadoPago]);

    return mp;
}