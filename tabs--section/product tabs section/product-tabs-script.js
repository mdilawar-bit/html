document.addEventListener('DOMContentLoaded', function() {
    const tabHeaders = document.querySelectorAll('.tab-header-item');
    const expandBtns = document.querySelectorAll('.expand-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const ingredientCards = document.querySelectorAll('.ingredient-card');

    // Initialize
    setActiveTab('tab1');

    // Tab header click functionality
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            setActiveTab(tabId);
        });
    });

    // Expand/Collapse button functionality
    expandBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const tabId = this.getAttribute('data-tab');
            toggleTab(tabId);
        });
    });

    // Ingredient card click functionality
    ingredientCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            console.log('Selected ingredient: ' + title);
        });
    });

    /**
     * Set active tab and update UI
     */
    function setActiveTab(tabId) {
        // Remove active class from all headers
        tabHeaders.forEach(header => {
            header.classList.remove('active');
        });

        // Remove active class from all contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to clicked header
        const activeHeader = document.querySelector(`.tab-header-item[data-tab="${tabId}"]`);
        if (activeHeader) {
            activeHeader.classList.add('active');
        }

        // Add active class to corresponding content
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Update expand button text
        updateExpandButtons();
    }

    /**
     * Toggle tab open/close
     */
    function toggleTab(tabId) {
        const header = document.querySelector(`.tab-header-item[data-tab="${tabId}"]`);
        const content = document.getElementById(tabId);

        if (header.classList.contains('active')) {
            // Close tab
            header.classList.remove('active');
            content.classList.remove('active');
        } else {
            // Open tab
            setActiveTab(tabId);
        }
    }

    /**
     * Update expand button symbols
     */
    function updateExpandButtons() {
        expandBtns.forEach(btn => {
            const tabId = btn.getAttribute('data-tab');
            const header = document.querySelector(`.tab-header-item[data-tab="${tabId}"]`);

            if (header.classList.contains('active')) {
                btn.textContent = '−'; // Minus sign for expanded
            } else {
                btn.textContent = '+'; // Plus sign for collapsed
            }
        });
    }

    // Add hover effect
    tabHeaders.forEach(header => {
        header.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.opacity = '1';
            }
        });

        header.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.opacity = '1';
            }
        });
    });
});