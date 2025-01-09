
const menu_list_container_id = document.getElementById('menu_list_container_id')

function showMenu(){
    console.log('Inside showMenu Function')
    menu_list_container_id.classList.toggle('active');
}


window.onload = function() {
    // Check if the page has already been reloaded
    
    function calculateFullHeight(element) {
        const style = getComputedStyle(element);
        const paddingTop = parseFloat(style.paddingTop);
        const paddingBottom = parseFloat(style.paddingBottom);
        const marginTop = parseFloat(style.marginTop);
        const marginBottom = parseFloat(style.marginBottom);
        return element.scrollHeight + paddingTop + paddingBottom + marginTop + marginBottom;
    }

    const nav_bar_ed_container_id_1 = document.getElementById('nav_bar_ed_container_id_1');
    const common_inner_education_content_container_div_ed_id_1 = document.getElementById('common_inner_education_content_container_div_ed_id_1');
    const nav_bar_ed_container_id_2 = document.getElementById('nav_bar_ed_container_id_2');
    const common_inner_education_content_container_div_ed_id_2 = document.getElementById('common_inner_education_content_container_div_ed_id_2');

    nav_bar_ed_container_id_1.style.height = calculateFullHeight(common_inner_education_content_container_div_ed_id_1) + 'px';
    nav_bar_ed_container_id_2.style.height = calculateFullHeight(common_inner_education_content_container_div_ed_id_2) + 'px';

    const nav_bar_exp_container_id_1 = document.getElementById('nav_bar_exp_container_id_1');
    const common_inner_education_content_container_div_exp_id_1 = document.getElementById('common_inner_education_content_container_div_exp_id_1');

    nav_bar_exp_container_id_1.style.height = calculateFullHeight(common_inner_education_content_container_div_exp_id_1) + 'px';

    console.log('nav_bar_exp_container_id_1 height: '+calculateFullHeight(nav_bar_exp_container_id_1))
    console.log('common_inner_education_content_container_div_exp_id_1 height: '+calculateFullHeight(common_inner_education_content_container_div_exp_id_1))

    const nav_bar_prj_container_id_1 = document.getElementById('nav_bar_prj_container_id_1');
    const common_inner_education_content_container_div_prj_id_1 = document.getElementById('common_inner_education_content_container_div_prj_id_1');
    const project_img_container_id_1 = document.getElementById('project_img_container_id_1');
    const nav_bar_prj_container_id_2 = document.getElementById('nav_bar_prj_container_id_2');
    const common_inner_education_content_container_div_prj_id_2 = document.getElementById('common_inner_education_content_container_div_prj_id_2');
    const project_img_container_id_2 = document.getElementById('project_img_container_id_2');
    const nav_bar_prj_container_id_3 = document.getElementById('nav_bar_prj_container_id_3');
    const common_inner_education_content_container_div_prj_id_3 = document.getElementById('common_inner_education_content_container_div_prj_id_3');
    const project_img_container_id_3 = document.getElementById('project_img_container_id_3');

    nav_bar_prj_container_id_1.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_1) + 'px';
    project_img_container_id_1.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_1) + 'px';
    nav_bar_prj_container_id_2.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_2) + 'px';
    project_img_container_id_2.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_2) + 'px';
    nav_bar_prj_container_id_3.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_3) + 'px';
    project_img_container_id_3.style.height = calculateFullHeight(common_inner_education_content_container_div_prj_id_3) + 'px';
};




// Select the dynamic div
const educationDiv = document.getElementById('education');


const experienceDiv = document.getElementById('experience');


const projectsDiv = document.getElementById('projects');


const skillsDiv = document.getElementById('skills');


const interestsDiv = document.getElementById('interests');


const certificationsDiv = document.getElementById('certifications');


// Function to update the height of the div
function updateDivHeight() {
    const contentHeightEducationDiv = educationDiv.scrollHeight; // Actual content height
    const contentHeightExperienceDiv = experienceDiv.scrollHeight; // Actual content height
    const contentHeightProjectsDiv = projectsDiv.scrollHeight; // Actual content height
    const contentHeightSkillDiv = skillsDiv.scrollHeight; // Actual content height
    const contentHeightInterestsDiv = interestsDiv.scrollHeight; // Actual content height
    const contentHeightCertificationsDiv = certificationsDiv.scrollHeight; // Actual content height
    const viewportHeight = window.innerHeight; // Current viewport height

    if (contentHeightEducationDiv > viewportHeight) {

    } else {
        educationDiv.style.height = '100vh'; // Set height back to 100vh
    }

    if (contentHeightExperienceDiv > viewportHeight) {
        
    } else {
        experienceDiv.style.height = '100vh'; // Set height back to 100vh
    }

    if (contentHeightProjectsDiv > viewportHeight) {
        
    } else {
        projectsDiv.style.height = '100vh'; // Set height back to 100vh
    }
    
    if (contentHeightSkillDiv > viewportHeight) {
        
    } else {
        skillsDiv.style.height = '100vh'; // Set height back to 100vh
    }
    
    if (contentHeightInterestsDiv > viewportHeight) {

    } else {
        interestsDiv.style.height = '100vh'; // Set height back to 100vh
    }

    if (contentHeightCertificationsDiv > viewportHeight) {

    } else {
        // certificationsDiv.style.height = '100vh'; // Set height back to 100vh
    }
}

// Run the function initially and whenever the window resizes
updateDivHeight();
window.addEventListener('resize', updateDivHeight);

