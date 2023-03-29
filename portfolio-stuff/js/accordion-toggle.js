var accordionTriggers = Array.from(document.getElementsByClassName('component-accordion-trigger'));

function toggleSingleAccordion(accordionTrigger) {
    accordionTrigger.classList.toggle('is-open');
    var content = accordionTrigger.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = '3000px';
    }
}
for (var i = 0; i < accordionTriggers.length; i++) {
    accordionTriggers[i].addEventListener('click', function () {
        toggleSingleAccordion(this);
    });
}
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        accordionTriggers.forEach(toggleSingleAccordion);
        var targetDivs = document.querySelectorAll('.accordion-container');
        targetDivs.forEach(acc => {
            var closeButton = document.createElement('a');
            closeButton.classList.add('closeButton');
            closeButton.style = 'cursor: pointer; position: relative; text-decoration: underline; color: #dd0d0d;';
            closeButton.innerHTML = 'Close All Accordions';

            var buttonWrapper = document.createElement('div');
            buttonWrapper.classList.add('accWrapper');
            buttonWrapper.setAttribute('id', 'accWrapper');
            buttonWrapper.style = 'width: 100%; text-align: right; margin-bottom: 10px;';

            acc.insertBefore(buttonWrapper, acc.firstChild);
            buttonWrapper.insertBefore(closeButton, buttonWrapper.firstChild);
        });

        var closeDiv = document.querySelectorAll('.accWrapper');

        closeDiv.forEach(closeDiv => {
            closeDiv.addEventListener('click', function () {
                accordionTriggers.forEach(toggleSingleAccordion);
                const removeButton = document.querySelectorAll('.accWrapper');
                removeButton.forEach(removeButton => {
                    removeButton.remove();
                })
            });
        })
    }
});