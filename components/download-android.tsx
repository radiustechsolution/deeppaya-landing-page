import Image from "next/image";
import { isIOS, isAndroid } from "react-device-detect";

const DownloadAppButtonAndroid = () => {
  const handleDownload = () => {
    // iOS devices
    if (isIOS) {
      window.location.href = "https://apps.apple.com/app/YOUR_APP_ID";
      // or use the itms-apps:// scheme for better deep linking
      // window.location.href = 'itms-apps://itunes.apple.com/app/idYOUR_APP_ID';
    }
    // Android devices
    else if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";
      // or use the market:// scheme for better deep linking
      // window.location.href = 'market://details?id=YOUR_PACKAGE_NAME';
    }
    // Fallback for other devices
    else {
      window.location.href = "https://deeppaya.com/download"; // or show both options
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="download-button" // Add your styles
    >
      <Image
        src="/play.png"
        alt="Google Play Store"
        fill
        className="object-contain"
        priority
      />
    </button>
  );
};

export default DownloadAppButtonAndroid;
