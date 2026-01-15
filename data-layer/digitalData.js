/**
 * AEP Web Tracking Lab - Digital Data Layer
 * 
 * This script initializes the global window.digitalData object used for analytics tracking.
 * It automatically populates page-level details based on the current URL.
 */

(function() {
    'use strict';

    // Initialize digitalData object
    window.digitalData = window.digitalData || {};

    // Helper to get page name from URL
    function getPageDetails() {
        const path = window.location.pathname;
        let pageName = 'home'; // Default
        let siteSection = 'general'; // Default

        if (path.includes('credit-card')) {
            pageName = 'credit-cards';
            siteSection = 'products';
        } else if (path.includes('loan')) {
            pageName = 'loans';
            siteSection = 'products';
        } else if (path.includes('signup')) {
            pageName = 'signup';
            siteSection = 'account';
        }

        return {
            pageName: `globalbank:${siteSection}:${pageName}`,
            siteSection: siteSection,
            destinationURL: window.location.href
        };
    }

    // Populate Page Info
    const details = getPageDetails();
    
    window.digitalData.page = {
        pageInfo: {
            pageName: details.pageName,
            destinationURL: details.destinationURL,
            siteSection: details.siteSection,
            language: 'en-US'
        }
    };

    // Populate User Info (Default to anonymous)
    window.digitalData.user = {
        profile: {
            profileInfo: {
                status: 'anonymous',
                profileID: '' // To be populated if user logs in
            }
        }
    };

    // Log to console for demonstration
    console.log('Digital Data Layer Initialized:', window.digitalData);

})();
