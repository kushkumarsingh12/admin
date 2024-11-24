// Example data
let users = [
    { id: 1, username: "admin", email: "admin@example.com", roles: ["Admin"] },
    { id: 2, username: "john_doe", email: "john.doe@example.com", roles: ["Editor"] }
];

let roles = [
    { name: "Admin", description: "Administrator with full access" },
    { name: "Editor", description: "Can edit content" }
];

let permissions = [
    { name: "View Users", roles: ["Admin", "Editor"] },
    { name: "Edit Users", roles: ["Admin"] }
];

// Functions to handle modals
function openUserModal() {
    // Populate roles for the user modal
    const roleSelect = document.getElementById("user-roles");
    roleSelect.innerHTML = roles.map(role => `<option value="${role.name}">${role.name}</option>`).join("");
    document.getElementById("user-modal").style.display = "flex";
}

function openRoleModal() {
    document.getElementById("role-modal").style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Save user
function saveUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const rolesSelected = Array.from(document.getElementById("user-roles").selectedOptions).map(option => option.value);
    
    const newUser = {
        id: users.length + 1,
        username,
        email,
        roles: rolesSelected
    };
    
    users.push(newUser);
    closeModal('user-modal');
    renderUserTable();
}

// Save role
function saveRole() {
    const roleName = document.getElementById("role-name").value;
    const roleDescription = document.getElementById("role-description").value;
    
    const newRole = { name: roleName, description: roleDescription };
    roles.push(newRole);
    closeModal('role-modal');
    renderRoleTable();
}

// Render Users Table
function renderUserTable() {
    const userTableBody = document.getElementById("user-table-body");
    userTableBody.innerHTML = users.map(user => {
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.roles.join(", ")}</td>
                <td><button onclick="editUser(${user.id})">Edit</button></td>
            </tr>
        `;
    }).join("");
}

// Render Roles Table
function renderRoleTable() {
    const roleTableBody = document.getElementById("role-table-body");
    roleTableBody.innerHTML = roles.map(role => {
        return `
            <tr>
                <td>${role.name}</td>
                <td>${role.description}</td>
                <td><button onclick="editRole('${role.name}')">Edit</button></td>
            </tr>
        `;
    }).join("");
}

// Initial render
renderUserTable();
renderRoleTable();

// Placeholder functions
function logout() {
    alert("Logged out!");
}

function editUser(userId) {
    alert("Editing user with ID: " + userId);
}

function editRole(roleName) {
    alert("Editing role: " + roleName);
}
