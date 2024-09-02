import {Box} from "@mui/material";
import {Suspense} from "react";
import {lazy} from "react";

const BigBundleComponent = lazy(() => import("../Components/BigBundleComponent/BigBundleComponent"));

export default function BigBundlePage() {

    return (
        <Suspense fallback={<Box>Подождите, идет загрузка...</Box>}>
            <BigBundleComponent/>
        </Suspense>
    )
}