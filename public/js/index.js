import panelBtn from "./modules/panel_btn.js";
import searchForm from "./modules/search_form.js";
import selectCategories from "./modules/select_categories.js";
import voiceRecon from "./modules/voice_recognition.js";
import loader from "./modules/loader.js";
loader();
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
	panelBtn();
	searchForm();
	selectCategories();
});

voiceRecon();
