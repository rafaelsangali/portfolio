import { icons } from "../../assets";

export default function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img
        src={icons.iconLoading}
        alt="Icone Tela de Loading"
        className="animate-spin"
        width={40}
      />
    </div>
  );
}
