import VenomBeam from "../ui/venom-beam";

const Footer = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <VenomBeam height="h-75 flex items-center justify-center flex-col px-4 w-full">
        <div className="flex flex-col w-1/3 justify-center">
          <div className="flex flex-row justify-between">
            <p>Antonio Murabito</p>
            <p>Copyright - {new Date().getFullYear()}</p>
          </div>

        </div>
      </VenomBeam>
    </div>
  );
}

export default Footer;