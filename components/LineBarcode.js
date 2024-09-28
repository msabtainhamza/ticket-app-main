import Barcode from "react-barcode";

export default function BarcodeComponent() {
  return (
    <div className="w-full mt-2 ml-0">
      <Barcode
        value="123456789012"
        format="CODE128"
        lineColor="#7a844a"
        background="#1c1c1c"
        width={2.1}
        height={105}
        displayValue={false}
      />
    </div>
  );
}
