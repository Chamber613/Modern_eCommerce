import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const PayPalIcon = ({
  width = "81",
  height = "81",
  viewBox = "0 0 81 81",
  sx = { width: "81px", height: "81px" },
  id,
}: SvgIconProps) => {
  return (
    <SvgIcon {...{ viewBox, width, height, sx }} data-testid={id}>
      <image
        id="paypal-logo-preview"
        width="81"
        height="81"
        href="data:image/png;base64,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"
      />
    </SvgIcon>
  );
};

export default PayPalIcon;
