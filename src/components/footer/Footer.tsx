import MailIcon from "../../assets/Social Media Icon/MailIcon";
import MapPin from "../../assets/Social Media Icon/MapPin";
import PhoneIcon from "../../assets/Social Media Icon/PhoneIcon";

function Footer() {
  return (
    <div className="  py-10 border-t">
      <div className="flex gap-10">
        <div className="w-[20rem]">
          <h1 className="font-bold text-xl pb-2">Jagoan Kuliner</h1>
          <p className="font-sans font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident animi, explicabo harum laboriosam tempora corporis delectus facilis facere nemo!</p>
          <div></div>
        </div>
        <div className="w-[20rem]">
          <h1 className="font-bold text-xl pb-2">Contact</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-center">
              <PhoneIcon />
              <p className="font-sans font-light">+6281234567890</p>
            </div>
            <div className="flex gap-5 items-center">
              <MailIcon />
              <p className="font-sans font-light">JagoanKuliner@gmail.com</p>
            </div>
            <div className="flex gap-5 items-center">
              <MapPin />
              <p className="font-sans font-light">Green Lake City</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <h1 className="text-right">© 2023 Jagoan Kuliner. All rights reserved.</h1>
    </div>
  );
}

export default Footer;
