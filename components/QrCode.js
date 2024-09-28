import { QRCode } from "react-qrcode-logo";

export default function QRCodeComponent() {
  return (
    <div className="rounded-xl inline-block mt-4">
      <QRCode
        value="1231231278361823"
        size={220} // Size of the QR code
        fgColor="#d8dbc9" // Color of the QR code
        bgColor="#7a844a" // Background color (matches the container)
        qrStyle="squares"
      />
    </div>
  );
}
