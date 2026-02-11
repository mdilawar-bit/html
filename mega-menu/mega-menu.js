(function() {
    const megaItems = document.querySelectorAll('.nav-item.has-mega');

    // Close all panels
    function closeAll(except) {
        megaItems.forEach(item => {
            if (item !== except) {
                item.classList.remove('open');
                const btn = item.querySelector('.nav-link');
                const panel = item.querySelector('.mega-panel');
                if (btn) btn.setAttribute('aria-expanded', 'false');
                if (panel) panel.setAttribute('aria-hidden', 'true');
            }
        });
    }

    megaItems.forEach(item => {
        const btn = item.querySelector('.nav-link');
        const panel = item.querySelector('.mega-panel');
        let hoverTimeout;

        // hover open/close for desktop
        item.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            closeAll(item);
            open(item);
        });
        item.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => close(item), 250);
        });

        // click to toggle (mobile)
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.classList.contains('open')) {
                close(item);
            } else {
                closeAll(item);
                open(item);
            }
        });

        // keyboard support
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close(item);
            if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === btn) { e.preventDefault();
                btn.click(); }
        });
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-mega')) {
            closeAll();
        }
    });

    // Manage focus trap when a panel is open
    let activeTrap = null;

    function open(item) {
        item.classList.add('open');
        const btn = item.querySelector('.nav-link');
        const panel = item.querySelector('.mega-panel');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (panel) panel.setAttribute('aria-hidden', 'false');
        // save previously focused element
        item.__previousFocus = document.activeElement;
        // move focus into panel
        if (panel) {
            const focusable = panel.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length) focusable[0].focus();
            else panel.focus();
            activateFocusTrap(panel);
        }
    }

    function close(item) {
        item.classList.remove('open');
        const btn = item.querySelector('.nav-link');
        const panel = item.querySelector('.mega-panel');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.setAttribute('aria-hidden', 'true');
        deactivateFocusTrap();
        // restore focus
        try { if (item.__previousFocus) item.__previousFocus.focus(); } catch (e) {}
    }

    // Focus trap helpers
    function activateFocusTrap(container) {
        deactivateFocusTrap();
        const focusableSelector = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const nodes = Array.from(container.querySelectorAll(focusableSelector)).filter(n => !n.hasAttribute('disabled'));
        if (!nodes.length) return;
        activeTrap = function(e) {
            if (e.key !== 'Tab') return;
            const first = nodes[0];
            const last = nodes[nodes.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault();
                    last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault();
                    first.focus(); }
            }
        };
        document.addEventListener('keydown', activeTrap);
    }

    function deactivateFocusTrap() {
        if (activeTrap) document.removeEventListener('keydown', activeTrap);
        activeTrap = null;
    }

    // Deep submenu toggle for Links panel (with ARIA)
    document.querySelectorAll('.links-panel .sub-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const submenu = parent.querySelector('.sub-menu');
            if (!submenu) return;
            const isOpen = submenu.style.display === 'block';
            // close sibling submenus
            parent.parentElement.querySelectorAll('.sub-menu').forEach(sm => { if (sm !== submenu) { sm.style.display = 'none'; const btn = sm.parentElement.querySelector('.sub-toggle'); if (btn) btn.setAttribute('aria-expanded', 'false'); } });
            submenu.style.display = isOpen ? 'none' : 'block';
            this.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        });
    });

})();