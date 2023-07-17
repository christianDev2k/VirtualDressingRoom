'use strict';

import { getData } from '../utils/callData.js';
import { RenderUI, handleTryOn } from '../controllers/functions.js';

// ================== INIT =========================

const app = async () => {
    const data = await getData();
    const { navPills, tabPanes } = data[0];

    RenderUI(navPills, tabPanes);
    event(tabPanes);
};

app();

// ==================== EVENT ========================

const event = tabPanes => {
    const myTabContent = document.querySelector('#myTabContent');

    myTabContent.onclick = e => {
        if (e.target.closest('button')) {
            const id = e.target.closest('button').id;

            handleTryOn(tabPanes, id);
        }
    };
};