window.onload = () => {
    const navigation = {
        init: function () {
            this.menu();
        },
        menu: function () {
            const openMenu = document.querySelector('.test__menu__button');
            const closeMenu = document.querySelector('.closeMenu');
            const menu = document.querySelector('.test__nav');

            openMenu.addEventListener('click', () => {
                menu.classList.add('active');
                closeMenu.classList.add('active');
            })
            closeMenu.addEventListener('click', () => {
                menu.classList.remove('active');
                closeMenu.classList.remove('active');
            })
        }
    }
    navigation.init();

    const mainTab = {
        init: function () {
            this.tab('.test__main', '.main__tabs__button li', '.main__tabs__items .tabs__item');
        },
        tab: function (wrap, tabsButton, tabsItem) {
            const self = document.querySelector(wrap);
            const btns = self.querySelectorAll(tabsButton);
            const items = self.querySelectorAll(tabsItem);

            btns.forEach((btn, index) => btn.addEventListener('click', () => {
                btns.forEach(btn => btn.classList.remove('active'));
                items.forEach(item => item.classList.remove('active'));

                btns[index].classList.add('active');
                items[index].classList.add('active');
            }));
        }
    }
    mainTab.init();

    const subTab = {
        init: function () {
            this.tab('.section', '.section li .arrow_lv1', '.section_lv2');
            this.tab('.section_lv2', '.section_lv2 li .arrow_lv2', '.section_lv3');
        },
        tab: function (wrap, tabsButton, tabsItem) {
            const self = document.querySelectorAll(wrap);
            self.forEach(i => {
                const btns = i.querySelectorAll(tabsButton);
                const items = i.querySelectorAll(tabsItem);


                btns.forEach((btn, index) => btn.addEventListener('click', () => {
                    btns[index].classList.toggle('active');
                    items[index].classList.toggle('active');
                }));
            })

        }
    }
    subTab.init();

    const weekly = {
        init: function () {
            this.week();
        },
        week: function () {
            const element = document.querySelector('.week');
            const elementFirst = document.querySelector('.week #first');
            const elementLast = document.querySelector('.week #last');
            const nextWeek = document.querySelector('.calendar .fa-angle-right');
            const prevWeek = document.querySelector('.calendar .fa-angle-left');

            let curr = new Date; // get current date
            let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
            let last = first + 6; // last day is the first day + 6

            let firstday = new Date(curr.setDate(first));
            let lastday = new Date(curr.setDate(last));

            nextWeek.addEventListener('click', () => {
                first++;
                last = first + 6;
                firstday = new Date(curr.setDate(first));
                lastday = new Date(curr.setDate(last));
                update(firstday, lastday);
            })

            prevWeek.addEventListener('click', () => {
                first--;
                last = first + 6;
                firstday = new Date(curr.setDate(first));
                lastday = new Date(curr.setDate(last));
                update(firstday, lastday);
            })

            function update(firstday, lastday) {
                function formatDate(date) {
                    var monthNames = [
                        "1", "2", "3",
                        "4", "5", "6", "7",
                        "8", "9", "10",
                        "11", "12"
                    ];

                    var day = date.getDate();
                    var monthIndex = date.getMonth();
                    var year = date.getFullYear();

                    return day + '/' + monthNames[monthIndex] + '/' + year;
                }

                elementFirst.innerHTML = formatDate(firstday);
                elementLast.innerHTML = formatDate(lastday);
            }

            update(firstday, lastday);
        }
    }
    weekly.init();
}