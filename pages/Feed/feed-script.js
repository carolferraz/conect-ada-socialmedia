import Header from "../../components/Header.js";
import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import database from "../../models/DataBase.class.mjs";

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "./feed.html", true)
header.addMenuLink('../../assets/search.svg', "../Explore/explore.html")
header.addMenuLink('../../assets/new.svg', "../NewPost/new-post.html")
header.addProfileDropdownLink('Ver perfil', "../Profile/profile.html")
header.addProfileDropdownLink('Editar Perfil', "../EditProfile/edit-profile.html")
header.addProfileDropdownLink('Seguindo', "../Following/following.html")
header.addProfileDropdownLink('Sair', "../../index.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg')
