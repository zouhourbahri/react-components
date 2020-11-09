import profil from "../../Component/image/profil.jpg";
import './style.css';

function ProfilPhoto() {
  return (
    <div>
        <img src={profil} alt="" className="photo" />
    </div>
  );
}

export default ProfilPhoto;