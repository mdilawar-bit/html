document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Remove active class from all panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Add active class to corresponding pane
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // Add click events to child items for demo
    const childItems = document.querySelectorAll('.child-item');
    childItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            console.log('Clicked on: ' + title);
        });
    });

    // Add click events to action buttons
    const actionButtons = document.querySelectorAll('.tab-action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Action button clicked: ' + this.textContent);
            // Add your action here
        });
    });
});