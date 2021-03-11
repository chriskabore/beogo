
const SideBarUtils = {
    displaySideBar : false,
    showSideBar (){
        this.displaySideBar= !this.displaySideBar;
    },
    getDisplaySideBar(){
        return this.displaySideBar;
    }
}
export default SideBarUtils;
