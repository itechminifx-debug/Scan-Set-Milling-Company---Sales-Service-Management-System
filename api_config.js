// ==================== GOOGLE SHEETS API CONFIGURATION ====================
// Replace this with your actual Google Apps Script Web App URL
var API_URL = 'https://script.google.com/macros/s/AKfycbzNB5CiQke8CazYRAYafJJzusYGQX6Yw92Demx5HD7NfT1nYpzmCmyU_dKn_mP6nj4I/exec';

// ==================== API HELPER FUNCTIONS ====================

// Fetch data from Google Sheets
async function apiGet(action) {
    try {
        var response = await fetch(API_URL + '?action=' + action);
        var data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}

// Save data to Google Sheets
async function apiPost(action, data) {
    try {
        var response = await fetch(API_URL + '?action=' + action + '&data=' + encodeURIComponent(JSON.stringify(data)));
        var result = await response.json();
        return result;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
    }
}

// Delete data by date
async function apiDeleteByDate(action, date) {
    try {
        var response = await fetch(API_URL + '?action=' + action + '&date=' + encodeURIComponent(date));
        var result = await response.json();
        return result;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false };
    }
}

// Delete by ID
async function apiDeleteById(action, id) {
    try {
        var response = await fetch(API_URL + '?action=' + action + '&id=' + encodeURIComponent(id));
        var result = await response.json();
        return result;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false };
    }
}

// Delete by index
async function apiDeleteByIndex(action, index) {
    try {
        var response = await fetch(API_URL + '?action=' + action + '&index=' + index);
        var result = await response.json();
        return result;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false };
    }
}