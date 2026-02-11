// const tabHeaders = document.querySelectorAll('.tab-header-item');
// const tabContents = document.querySelectorAll('.tab--content');

// function setActiveTab(tabId) {
//     console.count("setActiveTab called");
//     console.log("tabId:", tabId);
//     // 1️⃣ Remove active from all headers
//     tabHeaders.forEach(header => {
//         header.classList.remove('active');
//     });

//     // 2️⃣ Remove active from all contents
//     tabContents.forEach(content => {
//         content.classList.remove('active');
//     });

//     // 3️⃣ Activate clicked header
//     const activeHeader = document.querySelector(
//         `.tab-header-item[data-tab="${tabId}"]`
//     );
//     if (activeHeader) {
//         activeHeader.classList.add('active');
//     }

//     // 4️⃣ Activate related content
//     const activeContent = document.getElementById(tabId);
//     if (activeContent) {
//         activeContent.classList.add('active');
//     }

//     console.log("Active tab:", tabId);
// }

// // Single click listener ✅
// tabHeaders.forEach(header => {
//     header.addEventListener('click', function() {
//         const tabId = this.getAttribute('data-tab');
//         setActiveTab(tabId);
//     });
// });
document.addEventListener('click', function(e) {
    const header = e.target.closest('.tab-header-item');
    if (!header) return;

    const tabId = header.dataset.tab;

    const tabHeaders = document.querySelectorAll('.tab-header-item');
    const tabContents = document.querySelectorAll('.tab-content');

    // reset
    tabHeaders.forEach(h => h.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // activate
    header.classList.add('active');
    const content = document.getElementById(tabId);
    if (content) content.classList.add('active');
});
const tabs = document.querySelectorAll('.tab-header-item');
const wrapper = document.querySelector('.tabs--section--wrapper');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // remove old wrapper state classes
        wrapper.classList.remove(
            'tab1-active',
            'tab2-active',
            'tab3-active',
        );

        // add new state based on clicked tab
        const tabId = tab.dataset.tab; // tab1, tab2, tab3
        wrapper.classList.add(`${tabId}-active`);

        // OPTIONAL: active class on headers
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
//mobile layout tabs js
document.querySelectorAll(".s--faq--question").forEach(button => {
    button.addEventListener("click", () => {
        const currentItem = button.parentElement;
        console.log("working--1");
        document.querySelectorAll(".s--faq--item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active")
                console.log("working--2");
            }
        });


        currentItem.classList.toggle("active");
        console.log("working");
    });
})