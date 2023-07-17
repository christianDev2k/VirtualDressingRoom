const $ = document.querySelector.bind(document);

function RenderListItem(tabPanes, id) {
    const container = $('#' + id);
    const div = document.createElement('div');
    div.className = 'row';
    container.appendChild(div);

    const content = tabPanes.filter(item => item.type === id);
    const html = content.map(item => {
        const { id, desc, imgSrc_jpg, name } = item;
        return `
            <div class="col-3 my-2">
                <button id="${id}" class="item-btn" title="${desc}">
                    <img src="${imgSrc_jpg}" alt="" class="img-fluid mx-auto">
                    <p class="name mt-1">${name}</p>
                </button>
            </div>
        `;
    });

    div.innerHTML = html.join('');
}

export function RenderUI(navPills, tabPanes) {
    const myTab = $('#myTab');
    const myTabContent = $('#myTabContent');

    const nav = navPills.map((item, index) => {
        const { tabName, type, showName } = item;
        return `
            <li class="nav-item" role="presentation">
                <button class="nav-link ${!index ? 'active' : null}" id="${tabName}" data-toggle="tab" data-target="#${type}" type="button" role="tab" aria-controls="home" aria-selected="true">${showName}</button>
            </li>
        `;
    });

    const tab = navPills.map((item, index) => {
        const { type } = item;
        return `
            <div class="tab-pane fade ${!index ? 'active show' : null}" id="${type}" role="tabpanel" aria-labelledby="home-tab"></div>
        `;
    });

    myTab.innerHTML = nav.join('');
    myTabContent.innerHTML = tab.join('');

    navPills.forEach(item => {
        const { type } = item;
        RenderListItem(tabPanes, type);
    });
}

export function handleTryOn(tabPanes, id) {
    const item = tabPanes.filter(item => item.id === id);
    const { type, imgSrc_png } = item[0];

    let selector;
    switch (type) {
        case 'topclothes':
            selector = '.bikinitop';
            break;
        case 'botclothes':
            selector = '.bikinibottom';
            break;
        case 'shoes':
            selector = '.feet';
            break;
        case 'handbags':
            selector = '.handbag';
            break;
        case 'necklaces':
            selector = '.necklace';
            break;
        case 'hairstyle':
            selector = '.hairstyle';
            break;
        case 'background':
            selector = '.background';
            break;
    }

    $(selector).style.backgroundImage = `url(${imgSrc_png})`;
}
