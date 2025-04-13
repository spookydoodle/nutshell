import { Divider} from '@mui/material';
import { ProductTiles } from "./ProductTiles";
import * as MetricTypes from "./types";

interface Props {
    title: string;
    data: MetricTypes.Datum[];
    divider?: boolean;
}

export const Bestsellers: React.FC<Props> = ({ title, data, divider }) => {
    return (
        <>
            <ProductTiles title={title} data={data} size="sm" align="row" />
            {divider && <Divider variant="middle" />}
        </>
    );
};
