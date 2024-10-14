// A sample implementation of language translation
let translations = {};

// Function to load the translation file
function loadTranslations(language) {
    $.getJSON(`js/languages/${language}.json`, function(data) {
        translations = data;
        applyTranslations();
    });
}

// Function to apply translations to all elements with data-i18n
function applyTranslations() {
    $("[data-i18n]").each(function() {
        const key = $(this).attr("data-i18n");
        if (translations[key]) {
            $(this).html(translations[key]);
        }
    });
}

// Function to switch languages
function changeLanguage(language) {
    loadTranslations(language);
}

// Initialize default language (you can set a default here)
$(document).ready(function() {
    loadTranslations("en"); // Load default language
});
