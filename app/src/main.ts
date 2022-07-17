


enum SelectedElements {
    MENU_TOGGLER = "#nav-dropdown-toggler",
    NAV_DROPDOWN = "#nav-dropdown",
}

enum ControlledClasses{
    NEGATIVE_TRANSLATE_Y_100_PERCENT = "-translate-y-full",
    HIDDEN = "hidden",
    DROPDOWN_TRANSITION_SETUP= "transition-transform duration-500 ease-in-out" 
}


startApp()

function startApp() {
    const { body } = document
    
    
    const
        menuOpener =
            body.querySelector<HTMLButtonElement>(SelectedElements.MENU_TOGGLER),
        
        navDropdown =
            body.querySelector<HTMLDivElement>(SelectedElements.NAV_DROPDOWN)
    


    if (!menuOpener || !navDropdown) {
        
        return console.error(
            `The ${SelectedElements.MENU_TOGGLER} and the ${SelectedElements.NAV_DROPDOWN} must exist`
        )
    }


    function toggleNavDropdown(navDropdown:HTMLDivElement) {


        return () => {
            
            const { classList: navDropdownClassList } = navDropdown
            
           
            if (navDropdownClassList.contains(ControlledClasses.NEGATIVE_TRANSLATE_Y_100_PERCENT)) {
                
                navDropdownClassList.add(...ControlledClasses.DROPDOWN_TRANSITION_SETUP.split(" "))
    
                navDropdownClassList.remove(ControlledClasses.NEGATIVE_TRANSLATE_Y_100_PERCENT)
                return
                
            }
            
            
            navDropdownClassList.add(ControlledClasses.NEGATIVE_TRANSLATE_Y_100_PERCENT)
            
            navDropdownClassList.remove(...ControlledClasses.DROPDOWN_TRANSITION_SETUP.split(" "))
            
                
            
        }
       
    }

    menuOpener.addEventListener("click", toggleNavDropdown(navDropdown))


}

    
    
