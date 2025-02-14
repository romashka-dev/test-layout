import 'normalize.css'
import './style.scss'

import * as Logo from './assets/'
import * as Icons from './assets'
import * as Illustrations from './assets'

import { toggleMobileMenu } from './scripts/toggleMobileMenu'

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <header class="layout__header">
      <div class="page-header">
        <div class="page-header__container">
          <div class="header-top">
            <img class="header-top__logo" src="${Logo.mainLogo}" alt="Main logo" width="159" height="132">
            <div class="header-top__contacts">
              <img class="header-top__contacts-item header-top__contacts-item--inbox" src="${Icons.inboxIcon}" alt="Inbox icon" width="20" height="14">
              <img class="header-top__contacts-item header-top__contacts-item--approvals" src="${Icons.approvalsIcon}" alt="Approvals icon" width="20" height="18">
              <img class="header-top__contacts-item header-top__contacts-item--help" src="${Icons.helpIcon}" alt="Help icon" width="20" height="18">
            </div>
          </div>

          <nav class="header-navigtation" role="navigation" aria-label="Main Site Menu">
            <ul class="header-navigtation__list">
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Home</a>
              </li>
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Recognize</a>
              </li>
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Network</a>
              </li>
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Leaderboard</a>
              </li>
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Programs</a>
              </li>
              <li class="header-navigtation__item">
                <a href="#" class="navigtation-list__link">Activity</a>
              </li>
            </ul>
          </nav>

          <button class="burger-menu" aria-label="Toggle navigation">
            <span class="burger-menu__line"></span>
          </button>
        </div>
      </div>
    </header>

    <main class="layout__main">
      <h1>Hello Vite!</h1>
    </main>
  </div>
`
toggleMobileMenu()
