import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import Alert from "../../components/Alert.js";
import database from "../../models/DataBase.class.mjs";
import Header from "../../components/Header.js";

//renderizando header
const header = new Header();
header.addMenuLink("../../assets/home.svg", "./feed.html", true);
header.addMenuLink("../../assets/search.svg", "./explorer.html");
header.addMenuLink("../../assets/new.svg", "./new.html");
header.addProfileDropdownLink("Ver perfil", "./profile.html");
header.addProfileDropdownLink("Editar Perfil", "./edit-profile.html");
header.addProfileDropdownLink("Seguindo", "./following.html");
header.addProfileDropdownLink("Sair", "./login.html", false, true);
header.renderMenuLinks();
header.renderDropDownMenu("../../assets/woman.jpg");

/*Elementos*/
const editName = (document.getElementById("userName-edit").value = `oi`);
