// Admin Password Protection
var ADMIN_PASSWORD = 'admin123';

function checkAdminAccess() {
    var password = prompt('🔐 Admin Access Required\n\nEnter admin password:');
    if (password === null) {
        return false;
    }
    if (password === ADMIN_PASSWORD) {
        return true;
    } else {
        alert('❌ Incorrect password! Access denied.');
        return false;
    }
}

function goToAdmin() {
    if (checkAdminAccess()) {
        window.location.href = 'admin.html';
    }
}