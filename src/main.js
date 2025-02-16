import 'normalize.css'
import './style.scss'

import * as Logo from './assets/'
import * as Icons from './assets'
import * as Illustrations from './assets'

import {
  toggleMobileMenu,
  getPersonalMessage,
  getSelectText,
  removeUser,
  addUser,
} from './scripts'

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <header class="layout__header">
      <div class="page-header">
        <div class="page-header__container container">
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
      <section class="page-section">
        <div class="page-section__container container">
          <h1 class="page-section__title">Recognize someone now</h1>
          <div class="page-section__content">
            <aside class="aside-panel">
              <div class="aside-panel__item">
                <div class="aside-panel__content">
                  <img class="aside-panel__image" src="${Illustrations.itemIllustration1}" alt="Celebration" width="100" height="50">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">Anna Parker</h3>
                    <p class="aside-panel__text">Senior Director, Total Rewards</p>
                  </div>
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration2}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">Go Shopping</h3>
                    <p class="aside-panel__text"><span class="aside-panel__text-keyword">1,124</span> Shopping Points</p>
                  </div>
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration3}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">My Budget</h3>
                    <p class="aside-panel__text"><span class="aside-panel__text-keyword">1,932</span> Points to Give</p>
                  </div>
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration4}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">My Badges</h3>
                  </div>
                  <img class="aside-panel__icon" src="${Icons.badgeIcon}" alt="Celebration" width="24" height="24">
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration5}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">My Awards</h3>
                  </div>
                  <img class="aside-panel__icon" src="${Icons.trophyIcon}" alt="Celebration" width="24" height="24">
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration6}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">Quizzes</h3>
                  </div>
                  <img class="aside-panel__icon" src="${Icons.lightBulbIcon}" alt="Celebration" width="24" height="24">
                </div>
              </div>

              <div class="aside-panel__item">
                <img class="aside-panel__bg" src="${Illustrations.itemIllustration7}" alt="Celebration" width="150" height="150">
                <div class="aside-panel__content">
                  <div class="aside-panel__description">
                    <h3 class="aside-panel__title">Redeem On-The-Spot Award</h3>
                    <hr class="aside-panel__line"></hr>
                  </div>
                </div>
              </div>
            </aside>

            <div class="main-content">
              <h2 class="main-content__title">Recognize</h2>
              <div class="group-tags">
                <p class="group-tags__description">I would like to recognize the following group:</p>
                <div class="group-tags__items">
                  <div class="group-tags__item" id="1">
                    <p class="group-tags__text">Dorian Greene</p>
                    <div class="group-tags__close"></div>
                  </div>
                  <div class="group-tags__item" id="2">
                    <p class="group-tags__text">Gus Levy</p>
                    <div class="group-tags__close"></div>
                  </div>
                  <div class="group-tags__item" id="3">
                    <p class="group-tags__text">Jeremy Stevens</p>
                    <div class="group-tags__close"></div>
                  </div>
                  <div class="group-tags__item" id="4">
                    <p class="group-tags__text">Brenda Owen</p>
                    <div class="group-tags__close"></div>
                  </div>
                  <div class="group-tags__item" id="5">
                    <p class="group-tags__text">Michael LaRoche</p>
                    <div class="group-tags__close"></div>
                  </div>
                  <div class="group-tags__item" id="6">
                    <p class="group-tags__text">Jeanette Lincoln</p>
                    <div class="group-tags__close"></div>
                  </div>
                </div>
                <button class="group-tags__button">Add user</button>
              </div>

              <div class="group-colleagues">
                <p class="group-colleagues__description">I’d like to recognize<span class="group-colleagues__keyword"> a group of colleagues </span> for the <span class="group-colleagues__keyword">Peer-to-Peer Program</span></p>
                <div class="group-selects">
                  <div class="group-selects__item">
                    <label class="group-selects__label" for="criteria">Criteria</label>
                    <select class="group-selects__select js-select-criteria" id="criteria">
                      <option value="technical-excellence">Technical excellence</option>
                      <option value="soft-skills">Soft skills</option>
                      <option value="critical-thinking">Critical thinking</option>
                      <option value="energy-and-enthusiasm">Energy and enthusiasm</option>
                      <option value="experience">Experience</option>
                    </select>
                  </div>

                  <div class="group-selects__item">
                    <label class="group-selects__label" for="points">Points</label>
                    <select class="group-selects__select js-select-points" id="points">
                      <option value="50">50</option>
                      <option value="40">40</option>
                      <option value="30">30</option>
                      <option value="20">20</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="group-message">
                <label class="group-message__label" for="message">Personal message:</label>
                <textarea class="group-message__input" id="message" rows="2" placeholder="Enter your message here..."></textarea>
              </div>

              <form class="form" action="#" method="POST">
                <div class="form__container">
                  <div class="e-card">
                    <h2 class="e-card__title">E-Card preview:</h2>
                    <div class="e-card__content">
                      <div class="e-card__column e-card__column--primary">
                        <img class="e-card__image" src="${Illustrations.ecardImage1}" alt="Celebration" width="280" height="200">
                        <div class="e-card__description">
                          <p class="e-card__label js-label-criteria" id="criteria">Criteria: <span></span></p>
                          <p class="e-card__label js-label-points" id="points">Points: <span></span></p>
                          <p class="e-card__text">Your personal message ...</p>
                          <p class="e-card__author">Anna Parker</p>
                          <p class="e-card__date">Award date: 10/19/2015</p>
                        </div>
                      </div>
                      <div class="e-card__column e-card__column--secondary">
                        <div class="group-illustrations">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage1}" alt="Card image" width="50" height="50">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage2}" alt="Card image" width="50" height="50">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage3}" alt="Card image" width="50" height="50">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage4}" alt="Card image" width="50" height="50">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage5}" alt="Card image" width="50" height="50">
                          <img class="group-illustrations__image" src="${Illustrations.ecardImage6}" alt="Card image" width="50" height="50">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="send-form">
                    <button class="send-form__button" type="submit">Send copy to:</button>
                    <div class="send-form__input">
                      <label class="label" for="label"></label>
                      <input class="input" type="input" id="input" placeholder="Enter email address" />
                    </div>
                    <button class="send-form__button button-review" type="button">Review awards</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`
toggleMobileMenu()
getPersonalMessage()
getSelectText('.group-selects .js-select-criteria', '.form .js-label-criteria')
getSelectText('.group-selects .js-select-points', '.form .js-label-points')
removeUser()
addUser()
