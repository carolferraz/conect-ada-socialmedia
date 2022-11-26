import FollowerCard from "../../components/FollowerCard.js";
import database from "../../models/DataBase.class.mjs";
import Header from "../../components/Header.js"

//renderizando header
const header = new Header()
header.addMenuLink('../../assets/home.svg', "./feed.html")
header.addMenuLink('../../assets/search.svg', "../Explore/explore.html", true)
header.addMenuLink('../../assets/new.svg', "../NewPost/new-post.html")
header.addProfileDropdownLink('Ver perfil', "./profile.html")
header.addProfileDropdownLink('Editar Perfil', "./edit-profile.html")
header.addProfileDropdownLink('Seguindo', "./following.html")
header.addProfileDropdownLink('Sair', "../../index.html", false, true)
header.renderMenuLinks()
header.renderDropDownMenu('../../assets/woman.jpg') 
// Fim da header

database.initialization();

function renderCards(){
    database.users.forEach(user => {
        if (user.id !== database.currentUserInSession.id) {
             const followerCard = new FollowerCard(user);
        }})
}

renderCards()

// const carol = new FollowerCard({ name: "Carol", image: " ", role: "Front-End Dev"  });

// const vi = new FollowerCard({ name: "Vitória", image: " ", role: "Front-End Dev"  });