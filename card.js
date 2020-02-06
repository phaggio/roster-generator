'use strict'
const role = {
    Manager: 'fas fa-user-tie fa-fw',
    Engineer: 'fas fa-user-astronaut fa-fw',
    Intern: 'fas fa-user-graduate fa-fw',
    SitAround: 'fas fa-poo fa-fw'
};

const roleElementText = {
    Manager: 'Office Number',
    Engineer: 'GitHub',
    Intern: 'School',
    SitAround: 'Hobby'
};

const roleKeys = {
    Manager: 'officeNumber',
    Engineer: 'github',
    Intern: 'school',
    SitAround: 'hobby'
};

const generateCardHtml = (employee) => {
    return `
<div class="card text-white bg-primary m-3" style="width: 18rem;">
    <div class="card-header"><span class="m-1"><i class="${role[employee.getRole()]}"></i></span>${employee.getRole()}</div>
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <div class="card-text">
            <p>ID: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>${roleElementText[employee.getRole()]}: ${employee[roleKeys[employee.getRole()]]}</p>
        </div>
    </div>
</div>
    `;
};

module.exports = generateCardHtml