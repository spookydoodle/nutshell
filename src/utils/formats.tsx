import * as MetricTypes from "../components/metrics-dashboard/types";

export const getScalingLabel = (scaling?: MetricTypes.Scaling): string => {
  return scaling === 1000000 ? 'M' : scaling === 1000 ? 'K' : '';
};

export const formatNumber = (
  n: string | number | undefined,
  options: MetricTypes.MeasureOptions
): string => {
  if (n === undefined || n === "" || isNaN(Number(n))) {
    return "";
  }

  const { unit, showUnitBefore = false, scaling = 1, decimals = 0, showPlusSign = false, prefix, suffix } = options;
  const scalingLabel = getScalingLabel(scaling);
  const scalingSuffix = scalingLabel ? ` ${scalingLabel}` : '';

  const result = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(n) / scaling);

  const plusPrefix = showPlusSign && Number(result) > 0 ? '+' : '';
  const unitPrefix = unit && showUnitBefore ? `${unit} ` : '';
  const unitSuffix = unit && !showUnitBefore ? ` ${unit}` : '';
  const valuePrefix = prefix ? `${prefix} ` : "";
  const valueSuffix = suffix ? ` ${suffix}` : "";

  return `${valuePrefix}${unitPrefix}${plusPrefix}${result}${scalingSuffix}${unitSuffix}${valueSuffix}`;
}

export const formatPercentageDelta = (
  n: string | number,
  options: MetricTypes.MeasureOptions
) => {
  const { scaling = 1, decimals = 0, suffix = false } = options;
  const valueSuffix = suffix ? ` ${suffix}` : "";

  return `${isNaN(Number(n))
    ? ""
    : Number(n) >= 1000
      ? ">+999%"
      : Number(n) <= -1000
        ? "<-999%"
        : `${Number(n) > 0 ? "+" : ""}${formatNumber(n, { scaling, decimals })}${!isNaN(Number(n)) && Number(n) != 0 ? "%" : ""
        }`

    }${valueSuffix}`;
};

export const formatTickerItemName = (
  characteristic: MetricTypes.Dimension,
  tickerItem: MetricTypes.Dimension,
  timebox: string,
  withTimebox?: boolean
) => {
  const tickerItemDim = characteristic.key === "" ? tickerItem : characteristic;

  return `${tickerItemDim.text} ${withTimebox ? timebox : ""}`;
};
